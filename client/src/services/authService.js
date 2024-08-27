import Web3 from 'web3';

// Check if MetaMask is installed
export const isMetaMaskInstalled = () => {
    return typeof window.ethereum !== 'undefined';
};

// Request MetaMask account
export const requestAccount = async () => {
    if (!isMetaMaskInstalled()) {
        alert('MetaMask is not installed. Please install MetaMask and try again.');
        return;
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
};

export const disconnectWallet = () => {
    // Remove wallet-related session data from localStorage
    localStorage.removeItem('userWalletAddress');
    localStorage.removeItem('walletConnected');
    // Optionally, you can also reset any state related to wallet connection in your app
};

// Initialize Web3
export const getWeb3 = () => {
    return new Web3(window.ethereum);
};
