// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "contracts/BusinessManagement.sol";
import "contracts/BusinessToken.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TokenFactory is ReentrancyGuard {
    BusinessManagement private businessContract;

    mapping(address => address) tokenAddress;

    event TokenCreated(address businessOwner, address token);

    constructor(address BusinessAddress) {
        businessContract = BusinessManagement(BusinessAddress);
    }

    function createToken(
        string memory name,
        string memory symbol
    ) external nonReentrant {
        require(
            tokenAddress[msg.sender] == address(0),
            "User has already created a token."
        );
        require(
            businessContract.getBusiness(msg.sender).isCreated,
            "Business not registered."
        );

        BusinessToken newToken = new BusinessToken(name, symbol);
        tokenAddress[msg.sender] = address(newToken);
        bool sent = newToken.transfer(msg.sender, newToken.totalSupply());
        require(sent, "token transfer failed");

        emit TokenCreated(msg.sender, address(newToken));
    }

    function getTokensAddress(address addy) external view returns (address) {
        return tokenAddress[addy];
    }

    function getTokenDetails(
        address addy
    ) external view returns (string memory, string memory, uint256) {
        BusinessToken token = BusinessToken(tokenAddress[addy]);
        (string memory name, string memory symbol, uint256 supply) = token
            .getTokenDetails(addy);
        return (name, symbol, supply);
    }
}
