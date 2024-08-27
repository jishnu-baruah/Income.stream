import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import { disconnectWallet } from '../services/authService'; // Import your authService

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        disconnectWallet(); // Call the function to clear the session
        navigate('/'); // Redirect to the home page or login page
    };

    return (
        <header className="header">
            <h1>Income.stream</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/profile">Profile</a>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </nav>
        </header>
    );
}

export default Header;
