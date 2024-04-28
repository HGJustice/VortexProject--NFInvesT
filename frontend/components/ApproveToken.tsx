import React, { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "";
const ABI = "";

const ApproveToken = () => {
  const [formData, setFormData] = useState({
    marketplaceContract: "",
    amount: 0,
  });

  const handleInputChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const approveTokenHandler = async (event: any) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, ABI, signer);
    const tx = await contract.approve(
      formData.marketplaceContract,
      formData.amount
    );
    await tx.wait();
  };

  return (
    <div>
      <h1>ApproveToken</h1>
      <form onSubmit={approveTokenHandler}>
        <input
          type="text"
          name="marketplaceContract"
          value={formData.marketplaceContract}
          placeholder="marketplaceContract"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          placeholder="amount"
          onChange={handleInputChange}
        />
        <button type="submit">Approve</button>
      </form>
    </div>
  );
};

export default ApproveToken;
