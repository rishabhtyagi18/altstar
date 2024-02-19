import React, { useEffect, useState } from "react";
import './Verification.css';
import Toast from '../Toast/Toast';
import { PulseLoader } from 'react-spinners';

const AdvancePayment = (props) => {
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });
    const [advancePaymentFormData, setAdvancePaymentFormData] = useState(
        {
            invAmt: '',
            advAmt: ''
        }
    );

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        
        setAdvancePaymentFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }))
    };

    const bankDetailsSubmit = () => {
        if (!advancePaymentFormData.invAmt || advancePaymentFormData.invAmt.trim() === '') {
          setToastConfig({ ...toastConfig, show: true, text: 'Please Enter Investment Amount' });
        } 
        else if(!advancePaymentFormData.advAmt || advancePaymentFormData.advAmt.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter Advance Payment' });
        } else {
            props.descriptionButtonHandler(advancePaymentFormData);
        }
    }

return (
    <>  
        <div className="signup-root">
            <div className="signup-main-container">
                <div className="signup-mobile-txt">Advance Payment</div>

                <div className="signup-form-container">
                    <div className="profile-form-container">
                        <label>Investment Amount</label>
                        <input
                            type="text"
                            name="invAmt"
                            // value=""
                            className='mobile-input'
                            placeholder="Enter Investment Amount"
                            onChange={handleInputChange}
                        />

                        <label>Advance Payment</label>
                        <input
                            type="tel"
                            name="advAmt"
                            // value=""
                            className='mobile-input'
                            placeholder="Enter Advance Payment"
                            onChange={handleInputChange}
                        />

                        <div className="info-note-txt">Note: You will redirected to the payment page</div>

                        <button 
                            style={(((advancePaymentFormData.invAmt.length < 1 || advancePaymentFormData.advAmt.length < 1) && props.step === props.steps.ADVANCE_PAYMENT_SCREEN)) ? {opacity:  '0.4'} : {opacity : 'unset'}} 
                            className="signup-continue-btn" 
                                onClick={() => bankDetailsSubmit()}
                            >
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
                verifyStyle
			/>
		) : null}
    </>
)}

export default AdvancePayment;