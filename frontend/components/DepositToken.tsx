import React, { useState } from "react";
import { ethers } from "ethers";

const contractAddreess = "";
const ABI = "";

const DepositToken = () => {
  const [formData, setFormData] = useState({
    amount: 0,
  });

  const handleInputChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const depositTokensHandler = async (event: any) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddreess, ABI, signer);
    const tx = await contract.depositToken(formData.amount);
    await tx.wait();
  };

  return (
    <div>
      <h1>DepositToken</h1>
      <form onSubmit={depositTokensHandler}>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          placeholder="amount"
          onChange={handleInputChange}
        />
        <button type="submit">Deposit Tokens</button>
      </form>
    </div>
  );
};

export default DepositToken;
