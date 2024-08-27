import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

export const getAccount = async () => {
    const accounts = await web3.eth.requestAccounts();
    return accounts[0];
};

export const createIncomeStream = async (receiver, amount, duration) => {
    // Interact with the smart contract to create the income stream
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return contract.methods.createIncomeStream(receiver, amount, duration).send({ from: await getAccount() });
};
