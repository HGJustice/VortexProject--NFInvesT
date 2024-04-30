import React, { useState } from "react";
import TokenABI from "../ABI/FactoryContract.json";
const ethers = require("ethers");

const contractAddress = "0xdd796D528145000f1Df16995cDAaCe5eA6Cf39A6";
const ABI = TokenABI;

const CreateToken = () => {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const createTokenHandler = async (event) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, ABI, signer);
    const tx = await contract.createToken(formData.name, formData.symbol);
    await tx.wait();
  };
  return (
    <div>
      <h1>Create Token</h1>
      <form onSubmit={createTokenHandler}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="symbol"
          value={formData.symbol}
          placeholder="symbol"
          onChange={handleInputChange}
        />
        <button type="submit">Mint Token</button>
      </form>
    </div>
  );
};

export default CreateToken;
