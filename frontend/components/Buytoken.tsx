import React, { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "";
const ABI = "";

const Buytoken = () => {
  const [formData, setFormData] = useState({
    tokenID: 0,
  });

  const handleInputChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const buyTokenHandler = async (event: any) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, ABI, signer);
    const tx = await contract.buyToken(formData.tokenID);
    await tx.wait();
  };

  return (
    <div>
      <h1>Buy Token</h1>
      <form onSubmit={buyTokenHandler}>
        <input
          type="number"
          name="tokenID"
          value={formData.tokenID}
          placeholder="tokenID"
          onChange={handleInputChange}
        />
        <button type="submit">Buy</button>
      </form>
    </div>
  );
};

export default Buytoken;
