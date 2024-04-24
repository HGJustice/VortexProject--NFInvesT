// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract BusinessManagement {
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
    uint currentBusinessID = 0;

    function createBusiness(
        string memory _registrationDocuments,
        string memory _taxIDNumber,
        string memory _proofOfAddress,
        uint _bankAccountNumber,
        string memory _financialDocuments,
        string memory _anualReports,
        string memory _businessWebsite
    ) external {
        currentBusinessID++;
        Business memory newBusiness = Business(
            currentBusinessID,
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
            currentBusinessID,
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
