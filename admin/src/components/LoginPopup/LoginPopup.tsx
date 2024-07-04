import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

function LoginPopup({ setShowLogin }) {
    const [currState, setCurrState] = useState('Login');

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Register your business" && (
                        <>
                            <input type="text" placeholder='Your name' required />
                            <input type="text" placeholder='Business name' required />
                            <input type="text" placeholder='Business address' required />
                            <input type="tel" placeholder='Business phone number' required />
                        </>
                    )}
                    <input type="email" placeholder='Username or email' required />
                    <input type="password" placeholder='Password' required />
                    {currState === "Register your business" && (
                        <input type="password" placeholder='Confirm Password' required />
                    )}
                </div>
                <button>{currState === "Register your business" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms and conditions.</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Register your business")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
}

export default LoginPopup;


