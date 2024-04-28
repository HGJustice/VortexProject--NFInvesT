import React, { useState } from "react";
import { ethers } from "ethers";
import ABI from "../ABI/MarketplaceContract.json";

const contractAddress = "0xfDa9377106C66d6C312FA31648F1267e26153470";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    amount: 0,
    price: 0,
  });

  const handleInputChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const createListingHandler = async (event: any) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, ABI, signer);
    const tx = await contract.listToken(formData.amount, formData.price);
    await tx.wait();
  };

  return (
    <div>
      <h1>CreateListing</h1>
      <form onSubmit={createListingHandler}>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          placeholder="amount"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          placeholder="price"
          onChange={handleInputChange}
        />
        <button type="submit">List Share</button>
      </form>
    </div>
  );
};
export default CreateListing;
