// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "contracts/BusinessManagement.sol";
import "contracts/TokenFactory.sol";
import "contracts/PriceFeed.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Marketplace {
    BusinessManagement private businessContract;
    TokenFactory private tokenContract;
    AggregatorV3Interface private priceFeed;
    using PriceConverter for uint256;

    struct Listing {
        uint id;
        address tokenAddress;
        address tokenSeller;
        uint amount;
        uint price;
    }

    event ListingCreated(
        uint id,
        address seller,
        address tokenAddy,
        uint price,
        uint amount
    );
    event ListingBought(uint id, address buyer, uint price, uint amount);

    address owner;
    uint currentListingId = 0;
    mapping(address => mapping(uint => Listing)) listings;
    mapping(uint => Listing) idToListings;

    constructor(address businessAddy, address tokenAddress) {
        owner = msg.sender;
        businessContract = BusinessManagement(businessAddy);
        tokenContract = TokenFactory(tokenAddress);
        priceFeed = AggregatorV3Interface(
            0x59F1ec1f10bD7eD9B938431086bC1D9e233ECf41
        );
    }

    function listToken(uint _tokenAmount, uint _price) external {
        require(_tokenAmount > 0, "please input correct amount");
        require(
            businessContract.getBusiness(msg.sender).isCreated == true,
            "you need business before listing"
        );

        currentListingId++;

        Listing memory newListing = Listing(
            currentListingId,
            tokenContract.getTokens(msg.sender),
            msg.sender,
            _tokenAmount,
            _price
        );

        idToListings[currentListingId] = newListing;
        listings[msg.sender][currentListingId] = newListing;
        emit ListingCreated(
            currentListingId,
            msg.sender,
            tokenContract.getTokens(msg.sender),
            _price,
            _tokenAmount
        );
    }

    function buyToken(uint tokenID) external payable {
        require(tokenID <= currentListingId, "invalid listing");
        Listing storage current = idToListings[tokenID];
        require(
            msg.value >= current.price.getConversionRate(priceFeed),
            "invalid amount to buy share"
        );

        IERC20(current.tokenAddress).transfer(msg.sender, current.amount);
        payable(current.tokenSeller).transfer(msg.value);

        emit ListingBought(
            current.id,
            msg.sender,
            current.price,
            current.amount
        );

        delete idToListings[tokenID];
        delete listings[current.tokenSeller][tokenID];
    }

    function convertTest(uint amount) public view returns (uint256) {
        uint256 converted = amount.getConversionRate(priceFeed);
        return converted;
    }
}
