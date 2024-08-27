import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestAccount, isMetaMaskInstalled } from '../services/authService';
import '../styles/Home.css';

function Home() {
    const [account, setAccount] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate

    // Check if MetaMask is already connected
    useEffect(() => {
        const checkConnection = async () => {
            if (isMetaMaskInstalled()) {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    navigate('/dashboard'); // Redirect to Dashboard if connected
                }
            }
        };
        checkConnection();
    }, [navigate]);

    // Handle MetaMask connection
    const handleConnect = async () => {
        try {
            const account = await requestAccount();
            setAccount(account);
            navigate('/dashboard'); // Redirect to Dashboard after successful connection
        } catch (error) {
            console.error('Connection failed:', error);
            alert('Failed to connect to MetaMask');
        }
    };

    return (
        <div className="home">
            <h2>Welcome to DeFi Platform</h2>
            <p>Experience decentralized finance like never before</p>
            {account ? (
                <p>Connected as: {account}</p>
            ) : (
                <button onClick={handleConnect}>Connect with MetaMask</button>
            )}
        </div>
    );
}

export default Home;
