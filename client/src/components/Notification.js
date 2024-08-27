import React from 'react';
import '../styles/Notification.css';

function Notification() {
    return (
        <div className="notification">
            <h4>Notifications & Updates</h4>
            <ul>
                <li>New Transaction Update</li>
                <li>Contract Status Change</li>
                <li>New Notifications</li>
            </ul>
        </div>
    );
}

export default Notification;
