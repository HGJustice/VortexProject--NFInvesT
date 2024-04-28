import React, { useState } from "react";
import ABI from "../ABI/MarketplaceContract.json";
import { ethers } from "ethers";

const contractAddreess = "0xfDa9377106C66d6C312FA31648F1267e26153470";

const DepositToken = () => {
  const [formData, setFormData] = useState({
    amount: 0,
  });

  const handleInputChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const depositTokensHandler = async (event: any) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddreess, ABI, signer);
    const tx = await contract.depositToken(formData.amount);
    await tx.wait();
  };

  return (
    <div>
      <h1>Deposit Token</h1>
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
