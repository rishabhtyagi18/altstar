import React, { useEffect, useState } from "react";
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {

return (
    <>  
        <div className="signup-root">
           
            <div className="signup-main-container">
                <div className="signup-mobile-txt">Enter Your Mobile No.</div>

                <div className="signup-form-container">
                    <div className="mobile-txt">Mobile Number</div>

                    <div className="appLinkForm">
                        <div className="mobileInputContainer">
                        <img
                            loading="lazy"
                            src="../assets/flag.png"
                            className="flag"
                            alt="Input"
                        />
                        +91
                        <input
                            // onChange={handleInputChange}
                            type="tel"
                            // value=""
                            className='mobileInput'
                            placeholder="Mobile Number"
                            maxLength={10}
                        />
                        </div>
                    </div>

                    <button className="signup-continue-btn">Continue</button>
                </div>
            </div>

            <div className="signup-footer-main-root">
                <div className="protected-main-root">
                    <img src="../assets/lock.png" alt="protected" className="protected-info" />
                    <div className="info-protected-txt">Your information is protected</div>
                </div>
                <div className="learn-more-txt">learn more</div>

                <div className="info-protected-txt">By continuing you agree to Altstar’s Non-Disclosure Agreement, Terms of Service, and Privacy Policy, and <br></br> acknowledge that you’ve read and understand our Form CRS and Regulation Best Interest Disclosure.</div>
            </div>

        </div>
    </>
)}

export default SignUp;