import React, { useEffect, useState } from "react";
import './Verification.css';
import Toast from '../Toast/Toast';
import { PulseLoader } from 'react-spinners';
import PDFViewer from './PDFViewer';

const Esign = (props) => {
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });
    const [bankFormData, setBankFormData] = useState(
        {
            accName: '',
            accNo: '',
            reAccNo: '',
            ifscCode: ''
        }
    );

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        
        setBankFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }))
    };

    const bankDetailsSubmit = () => {
        // if (!bankFormData.accName || bankFormData.accName.trim() === '') {
        //   setToastConfig({ ...toastConfig, show: true, text: 'Please Enter Account Name' });
        // } 
        // else if(!bankFormData.accNo || bankFormData.accNo.trim() === '') {
        //     setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Account No' });
        // }
        // else if(!bankFormData.reAccNo || bankFormData.reAccNo.trim() === '') {
        //     setToastConfig({ ...toastConfig, show: true, text: 'Please Re-Enter a Account No' });
        // }
        // else if (!bankFormData.ifscCode || bankFormData.ifscCode.trim() === '') {
        //   setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a IFSC Code' });
        // } else {
            props.esignButtonHandler(bankFormData);

        // }
    }

return (
    <>  
        <div className="signup-root">
            <div className="signup-main-container">
                <div className="signup-mobile-txt">E-Sign Screen</div>

                <div className="signup-form-container">
                    <div className="profile-form-container">
                        <PDFViewer url="https://css4.pub/2015/usenix/example.pdf" />

                        <div className="info-note-txt">Note: You will sign the documents and make the full payment after we have collected the full EOI.</div>

                        <button 
                            // style={(((bankFormData.accName.length < 1 || bankFormData.accNo.length < 1 || bankFormData.reAccNo.length < 1 || bankFormData.ifscCode.length < 1) && props.step === props.steps.E_SIGN_SCREEN)) ? {opacity:  '0.4'} : {opacity : 'unset'}} 
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

export default Esign;