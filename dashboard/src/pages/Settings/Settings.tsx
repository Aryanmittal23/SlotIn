import React, { useState } from 'react';
import './Settings.css'
const Settings = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            fullName,
            email,
            phone,
            currentPassword,
            newPassword,
            confirmNewPassword,
        });
    };

    return (
        <div>
            <h1>Settings</h1>
        <div className="settings-section">
            <h2>Account Settings</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="full-name">Full Name</label>
                <input
                    type="text"
                    id="full-name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <label htmlFor="current-password">Current Password</label>
                <input
                    type="password"
                    id="current-password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />

                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <label htmlFor="confirm-new-password">Confirm New Password</label>
                <input
                    type="password"
                    id="confirm-new-password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                />

                <button type="submit">Save Changes</button>
            </form>
        </div>
        </div>
    );
};

export default Settings;
