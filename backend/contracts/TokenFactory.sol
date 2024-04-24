// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "contracts/BusinessManagement.sol";
import "contracts/BusinessToken.sol";

contract TokenFactory {
    BusinessManagement private businessContract;

    mapping(address => address) tokenAddress;
    mapping(address => uint8) balances;

    event TokenCreated(address businessOwner, address token);

    constructor(address BusinessAddress) {
        businessContract = BusinessManagement(BusinessAddress);
    }

    function createToken(string memory name, string memory symbol) external {
        require(
            tokenAddress[msg.sender] == address(0),
            "User has already created a token."
        );
        require(
            businessContract.getBusiness(msg.sender).isCreated,
            "Business not registered."
        );

        BusinessToken newToken = new BusinessToken(name, symbol);
        newToken.transfer(msg.sender, newToken.totalSupply());

        tokenAddress[msg.sender] = address(newToken);
        balances[msg.sender] = 1;
        emit TokenCreated(msg.sender, address(newToken));
    }

    function getTokens(address addy) external view returns (address) {
        return tokenAddress[addy];
    }

    function getTokenDetails(
        address addy
    ) external view returns (string memory, string memory, uint256) {
        BusinessToken token = BusinessToken(tokenAddress[addy]);
        return token.getTokenDetails(addy);
    }

    function getUserBalance(address addy) external view returns (uint8) {
        return balances[addy];
    }
}
