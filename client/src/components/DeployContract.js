import React, { useState } from 'react';
import { ethers } from 'ethers';
import '../styles/DeployContract.css'; // Import the CSS file

const DeployContract = () => {
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState('');
    const [duration, setDuration] = useState('');

    const deployContract = async () => {
        if (!receiver || !amount || !duration) {
            alert("Please fill all fields");
            return;
        }

        try {
            // Connect to MetaMask
            const provider = new ethers.providers.JsonRpcProvider('https://rpc.open-campus-codex.gelato.digital');
            const signer = provider.getSigner();

            // Define contract ABI and Bytecode
            const abi = [ /* ABI of your IncomeStream contract */];
            const bytecode = '/* Bytecode of your IncomeStream contract */';

            // Create Contract Factory
            const factory = new ethers.ContractFactory(abi, bytecode, signer);

            // Deploy Contract
            const contract = await factory.deploy(receiver, ethers.utils.parseEther(amount), duration);
            console.log('Contract deployed at address:', contract.address);

            // Wait for confirmation
            await contract.deployTransaction.wait();
            console.log('Contract deployment confirmed');
        } catch (error) {
            console.error("Deployment failed:", error);
        }
    };

    return (
        <div className="deploy-contract-container">
            <div className="deploy-contract-form">
                <h1 className="deploy-contract-heading">Deploy Smart Contract</h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Receiver Address"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                        className="deploy-contract-input"
                    />
                    <input
                        type="number"
                        placeholder="Amount (ETH)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="deploy-contract-input"
                    />
                    <input
                        type="number"
                        placeholder="Duration (seconds)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="deploy-contract-input"
                    />
                    <button
                        onClick={deployContract}
                        className="deploy-contract-button"
                    >
                        Deploy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeployContract;
