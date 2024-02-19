import React, { useEffect, useState } from "react";
import './VerifyIdentity.css';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/Toast';
import { PulseLoader } from 'react-spinners';

const VerifyIdentity = (props) => {
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });

    const [expand, setExpand] = useState(false);

    const onSubmit = () => {
        props.descriptionButtonHandler();
    }

return (
    <>  
        <div className="signup-root">
            <div className="signup-main-container">
                <div className="signup-mobile-txt">Helps verify your identity</div>

                <div className="verify-mobile-txt">we're asking or this information to help us now it's you when you log in and to keep your profile safe</div>

                <div className="verify-form-containerroot">
                    <div className="verify-form-container">
                        <label>Citizenship</label>

                        <div className="verify-identity-country-root">
                            <div className="flag-container" onClick={() => setExpand(!expand)}>
                                <div className="selected-flag">
                                    <div className="flag-name-root-container">
                                        <div className="iti__flag iti__in">{props.country.flag}</div>
                                        <div className="iti__selected-dial-code">{props.country.name}</div>
                                    </div>
                                    <div className={`iti__arrow ${expand ? 'iti__arrow--up' : ''}`}></div>
                                </div>
                            </div>

                            <ul className="country-list" style={expand ? {display: 'block'} :{display: 'none'}}>
                                {
                                    props.flag.map((ele, index) => {
                                        return(
                                        <li className="iti__country" onClick={()=> {props.handleCountryVerify(ele);
                                        setExpand(!expand)
                                        }}>
                                            <div className="iti__flag-box">{ele.flag}</div>
                                            <div className="iti__country-name">{`(${ele.code})`} </div>
                                            <div className="iti__dial-code">{ele.dial_code}</div>
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <button className="signup-continue-btn" onClick={() => onSubmit()}>
                            {props.waiting ? <PulseLoader color="#FFF" size={10} /> : 'Continue'}
                        </button>
                    </div>
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

        {toastConfig.show ? (
			<Toast
				hideHandler={setToastConfig}
				time={toastConfig.time}
				tickIcon={toastConfig.showTick}
				text={toastConfig.text}
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					width: 'fit-content',
					justifyContent: 'center',
				}}
			/>
		) : null}
    </>
)}

export default VerifyIdentity;