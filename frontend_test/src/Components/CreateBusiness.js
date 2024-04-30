import React, { useState } from "react";
import BusinessABI from "../ABI/BusinessContract.json";
const ethers = require("ethers");

const contractAddress = "0x0A0E8290c4eBb871876Ad4E04110ca5DF023Ea4b";
const ABI = BusinessABI;

const CreateBusiness = () => {
  const [formData, setFormData] = useState({
    registrationDocuments: "",
    taxIDNumber: "",
    proofOfAddress: "",
    bankAccountNumber: 0,
    financialDocuments: "",
    anualReports: "",
    businessWebsite: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const CreateBusinessHandler = async (event) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, ABI, signer);
    const tx = await contract.createBusiness(
      formData.registrationDocuments,
      formData.taxIDNumber,
      formData.proofOfAddress,
      formData.bankAccountNumber,
      formData.financialDocuments,
      formData.anualReports,
      formData.businessWebsite
    );

    await tx.wait();
  };

  return (
    <div>
      <h1>CreateBusiness</h1>
      <form onSubmit={CreateBusinessHandler}>
        <input
          type="text"
          name="registrationDocuments"
          value={formData.registrationDocuments}
          placeholder="registrationDocuments"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="taxIDNumber"
          value={formData.taxIDNumber}
          placeholder="taxIDNumber"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="proofOfAddress"
          value={formData.proofOfAddress}
          placeholder="proofOfAddress"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="bankAccountNumber"
          value={formData.bankAccountNumber}
          placeholder="bankAccountNumber"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="financialDocuments"
          value={formData.financialDocuments}
          placeholder="financialDocuments"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="anualReports"
          value={formData.anualReports}
          placeholder="anualReports"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="businessWebsite"
          value={formData.businessWebsite}
          placeholder="businessWebsite"
          onChange={handleInputChange}
        />
        <button type="submit">Add Business</button>
      </form>
    </div>
  );
};

export default CreateBusiness;
