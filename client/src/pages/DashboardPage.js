import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Notification from '../components/Notification';
import '../styles/DashboardPage.css';

function DashboardPage() {
    return (
        <div className="dashboard-page">
            <Header />
            <div className="content">
                <Dashboard />
                <Notification />
            </div>
        </div>
    );
}

export default DashboardPage;
