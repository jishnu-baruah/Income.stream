import React, { useState } from 'react';
import '../styles/ContractForm.css';

function ContractForm() {
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to deploy contract
        console.log({ receiver, amount, duration });
    };

    return (
        <div className="contract-form">
            <h3>Deploy New Contract</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Receiver Address
                    <input
                        type="text"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                    />
                </label>
                <label>
                    Amount (ETH)
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <label>
                    Duration (seconds)
                    <input
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </label>
                <button type="submit">Deploy Contract</button>
            </form>
        </div>
    );
}

export default ContractForm;
