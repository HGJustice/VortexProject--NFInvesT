import React, { useState } from 'react';
import { ethers } from 'ethers';
import ABI from '../ABI/MarketplaceContract.json';

const contractAddress = '0xfDa9377106C66d6C312FA31648F1267e26153470';

const Buytoken = () => {
  const [formData, setFormData] = useState({
    tokenID: 0,
    etherAmount: '',
  });

  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const buyTokenHandler = async event => {
    event.preventDefault();
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, ABI, signer);
    const tx = await contract.buyToken(formData.tokenID, {
      value: ethers.utils.parseEther(formData.etherAmount),
    });
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
          placeholder="Token ID"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="etherAmount"
          value={formData.etherAmount}
          placeholder="Amount in ETH"
          onChange={handleInputChange}
        />
        <button type="submit">Buy</button>
      </form>
    </div>
  );
};

export default Buytoken;
