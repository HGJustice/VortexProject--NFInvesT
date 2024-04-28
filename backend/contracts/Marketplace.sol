// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "contracts/BusinessManagement.sol";
import "contracts/TokenFactory.sol";
import "contracts/PriceFeed.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {
    BusinessManagement private businessContract;
    TokenFactory private tokenContract;
    AggregatorV3Interface private priceFeed;
    using PriceConverter for uint256;
    using Counters for Counters.Counter;

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

    uint256 purchaseFee = 0.00001 ether;
    uint256 accumulatedFees = 0;
    address owner;
    Counters.Counter private currentListingId;

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

    function depositToken(uint amount) external {
        require(amount > 0, "invalid amount");
        IERC20 token = IERC20(tokenContract.getTokensAddress(msg.sender));
        bool sent = token.transferFrom(msg.sender, address(this), amount);
        require(sent, "Token transfer failed");
    }

    function listToken(uint _tokenAmount, uint _price) external {
        require(_tokenAmount > 0, "please input correct amount");
        require(
            businessContract.getBusiness(msg.sender).isCreated == true,
            "you need business before listing"
        );

        currentListingId.increment();

        Listing memory newListing = Listing(
            currentListingId.current(),
            tokenContract.getTokensAddress(msg.sender),
            msg.sender,
            _tokenAmount,
            _price
        );

        idToListings[currentListingId.current()] = newListing;
        listings[msg.sender][currentListingId.current()] = newListing;
        emit ListingCreated(
            currentListingId.current(),
            msg.sender,
            tokenContract.getTokensAddress(msg.sender),
            _price,
            _tokenAmount
        );
    }

    function buyToken(uint tokenID) external payable nonReentrant {
        require(tokenID <= currentListingId.current(), "invalid listing");
        Listing storage current = idToListings[tokenID];
        require(
            msg.value >= current.price.getConversionRate(priceFeed),
            "invalid amount to buy share"
        );

        delete idToListings[tokenID];
        delete listings[current.tokenSeller][tokenID];
        uint feesDeducted = msg.value - purchaseFee;
        accumulatedFees += feesDeducted;

        bool sent = IERC20(current.tokenAddress).transfer(
            msg.sender,
            current.amount
        );
        require(sent, "transferfailed");

        payable(current.tokenSeller).transfer(msg.value);

        emit ListingBought(
            current.id,
            msg.sender,
            current.price,
            current.amount
        );
    }

    function getListingPriceEth(uint tokenID) external view returns (uint256) {
        Listing memory current = idToListings[tokenID];
        uint value = current.price.getConversionRate(priceFeed);
        return value;
    }

    function withdrawFees() external {
        require(msg.sender == owner, "only owner can withdraw");
        (bool sent, ) = payable(owner).call{value: accumulatedFees}("");
        require(sent, "withdraw failed");
    }

    receive() external payable {
        accumulatedFees += msg.value;
    }
}
