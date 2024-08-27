import React from 'react';
import '../styles/Dashboard.css';
import ContractForm from './ContactForm';
import ContractManagement from './ContractManagement';

function Dashboard() {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <ContractForm />
            <ContractManagement />
        </div>
    );
}

export default Dashboard;
