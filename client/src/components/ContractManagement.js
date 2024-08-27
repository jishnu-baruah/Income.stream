import React from 'react';
import '../styles/ContractManagement.css';

function ContractManagement() {
    return (
        <div className="contract-management">
            <h3>Contract Management</h3>
            <button>Extend Duration</button>
            <button>Update Receiver</button>
            <button>Withdraw Funds</button>
        </div>
    );
}

export default ContractManagement;
