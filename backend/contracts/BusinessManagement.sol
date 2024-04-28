// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/utils/Counters.sol";

contract BusinessManagement {
    using Counters for Counters.Counter;

    struct Business {
        uint ID;
        string registrationDocuments;
        string taxIDNumber;
        string proofOfAddress;
        uint bankAccountNumber;
        string financialDocuments;
        string anualReports;
        string businessWebsite;
        bool isCreated;
    }

    event BusinessCreated(
        uint ID,
        string registrationDocuments,
        string taxIDNumber,
        string proofOfAddress,
        uint bankAccountNumber,
        string financialDocuments,
        string anualReports,
        string businessWebsite
    );

    mapping(address => Business) userToBusiness;
    Counters.Counter private currentBusinessID;

    function createBusiness(
        string memory _registrationDocuments,
        string memory _taxIDNumber,
        string memory _proofOfAddress,
        uint _bankAccountNumber,
        string memory _financialDocuments,
        string memory _anualReports,
        string memory _businessWebsite
    ) external {
        currentBusinessID.increment();
        Business memory newBusiness = Business(
            currentBusinessID.current(),
            _registrationDocuments,
            _taxIDNumber,
            _proofOfAddress,
            _bankAccountNumber,
            _financialDocuments,
            _anualReports,
            _businessWebsite,
            true
        );

        userToBusiness[msg.sender] = newBusiness;
        emit BusinessCreated(
            currentBusinessID.current(),
            _registrationDocuments,
            _taxIDNumber,
            _proofOfAddress,
            _bankAccountNumber,
            _financialDocuments,
            _anualReports,
            _businessWebsite
        );
    }

    function getBusiness(address addy) external view returns (Business memory) {
        return userToBusiness[addy];
    }
}
