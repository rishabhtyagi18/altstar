import React, { useEffect, useState } from "react";
import './Verification.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Toast from '../Toast/Toast';
import { verifyOtp, sendOtp, createProfile,saveAccountDetails} from "../../services/api";
import Profile from '../profile/Profile';
import { PulseLoader } from 'react-spinners';
import VerifyIdentity from '../verifyIdentity/VerifyIdentity';
import utils from '../../utils';
import BankDetails from './BankDetails';
import Esign from './Esign';
import AdvancePayment from './AdvancePayment';
import MultiStepProgressBar from '../multiStepProgressBar/MultiStepProgressBar';

const Verification = (props) => {
    const location = useLocation();
    const { count } = location.state || {};
    const sortedData = utils.getCountryFlag();
    const keyToPrioritize = 'preferred';
    const valueToPrioritize = !0;
    const flag = sortedData.sort((a, b) => {
      if (a[keyToPrioritize] === valueToPrioritize) return -1; // a comes first
      if (b[keyToPrioritize] === valueToPrioritize) return 1; // b comes first
      return 0; // maintain the current order
    });
    const steps = {
        KYC_VERIFICATION: 1,
        BANK_ACCOUNT_DETAILS: 2,
        E_SIGN_SCREEN: 3,
        ADVANCE_PAYMENT_SCREEN: 4,
        DOCUMENT_SIGN_SCREEN: 5,
        FULL_PAYMENT_SCREEN: 6
    };
    const navigate = useNavigate();
    const [step, setStep] = useState(steps.KYC_VERIFICATION);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [waiting, setWaiting] = useState(false);
    const [country, setCountry] = useState({name:"India",dial_code:"+91",code:"IN",preferred:!0,flag:"🇮🇳"});
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(30);
    const [otp, setOtp] = useState('');
    const [formData, setFormData] = useState({});
    const [bankFormData, setBankFormData] = useState({});
    const [kycFormData, setKycFormData] = useState(
        {
            panNo: '',
            aadharNo: ''
        }
    );
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });
    let resendOtpTimerInterval;

    function getOtpInputElement(index) {
        return document.getElementById(`otpInput${index}`);
    }

    function validatePAN(panNumber) {
      // PAN format regex pattern
      const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    
      // Check if PAN number matches the pattern
      if (!panPattern.test(panNumber)) {
        return false; // PAN number format is incorrect
      }
    
      // Check if the fifth character is an alphabetical letter
      const fifthChar = panNumber.charAt(4);
      if (!/[A-Z]/.test(fifthChar)) {
        return false; // Fifth character should be an alphabetical letter
      }
    
      // Check if the ninth character is an alphabetical letter
      const ninthChar = panNumber.charAt(9);
      if (!/[A-Z]/.test(ninthChar)) {
        return false; // Ninth character should be an alphabetical letter
      }
    
      // PAN number format is valid
      return true;
    }

    function validateAadhar(aadharNumber) {
      // Remove white spaces and hyphens
      aadharNumber = aadharNumber.replace(/\s/g, "").replace(/-/g, "");
    
      // Check if Aadhar number is 12 digits
      return /^\d{12}$/.test(aadharNumber);
    }
    
    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        
        setKycFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }))
    };

    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
          clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
          if (resendButtonDisabledTime <= 0) {
            clearInterval(resendOtpTimerInterval);
          } else {
            setResendButtonDisabledTime(resendButtonDisabledTime - 1);
          }
        }, 1000);
    };
  
    useEffect(() => {
        startResendOtpTimer();
    
        return () => {
          if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
          }
        };
    }, [resendButtonDisabledTime]);

    const sendOTP = (resend) => {
        if (!(kycFormData.panNo) || (kycFormData.panNo.trim() === '')) {
          setToastConfig({
            show: true,
            showTick: false,
            text: 'Enter PAN Number',
          });
          return ;
        } 
        if(isNaN(kycFormData.aadharNo) || (kycFormData.aadharNo.trim() === '')) {
            setToastConfig({
                show: true,
                showTick: false,
                text: 'Enter Aadhar Number',
            });
            return;
        } 
        if(!validatePAN(kycFormData.panNo)){
          setToastConfig({
            show: true,
            showTick: false,
            text: 'Enter a valid PAN',
          });
          return ;
        }
        if(!validateAadhar(kycFormData.aadharNo)){
          setToastConfig({
            show: true,
            showTick: false,
            text: 'Enter a valid Aadhar',
          });
          return ;
        }
        setStep(steps.BANK_ACCOUNT_DETAILS);
    };

    const submitButtonHandler = () => {
          sendOTP();
    };

    const bankAccountButtonHandler = (form) => {
        setStep(steps.E_SIGN_SCREEN);
        // console.log('setBankFormData',form);
        setBankFormData({...form});
    }

    const esignButtonHandler = (form) => {
        setStep(steps.ADVANCE_PAYMENT_SCREEN);
        // console.log('formData',form);
        // setFormData({...form});
    }

    const descriptionButtonHandler = (form) => {
        // console.log('formData',form);
        // setFormData({...formData, 'description':form});
        const data = {...formData,
         'panCard':kycFormData.panNo,
         'aadharCard' : kycFormData.panNo,
         'account_holder_name' : bankFormData.accName,
         'account_number' : bankFormData.accNo,
         'confirm_account_number' : bankFormData.reAccNo,
         'ifsc_code' : bankFormData.ifscCode,
         'phone' : localStorage.getItem('mobile') ? localStorage.getItem('mobile') : "8658334656",
         'investment_amount' : form.invAmt,
         'advanced_amount':  form.advAmt
        };
        console.log('descriptionButtonHandler========>',data)
        setWaiting(true);
        saveAccountDetails(data).then((res) => {
            if (res.status) {
              setWaiting(false);
            //   setStep(steps.REVIEW_SCREEN);
                // navigate('/')
              setToastConfig({
                show: true,
                text: 'Details save successfully! Payment Gateway Intigration Pending',
                showTick: true,
                time: 3000,
              });
              // if (afterLoggedIn) afterLoggedIn();
            } else {
              setWaiting(false);
              setToastConfig({
                show: true,
                text: 'Something went wrong',
                showTick: false,
                time: 1500,
              });
            }
          }, (err) => {
            setWaiting(false);
            setToastConfig({
              show: true,
              text: 'Something went wrong',
              showTick: false,
              time: 1500,
            });
          })
    }

return (
    <>  
    <div className="progress-bar desk-section-display">
        <MultiStepProgressBar step={step} steps={steps} />
    </div>
    <br></br>
    {(step === steps.KYC_VERIFICATION)  && (
        <div className="signup-root">
            <div className="signup-main-container">
                <div className="signup-mobile-txt">KYC Verification</div>

                <div className="signup-form-container">
                    <div className="profile-form-container">
                        <label>Enter PAN No.</label>
                        <input
                            type="text"
                            name="panNo"
                            // value=""
                            className='mobile-input'
                            placeholder="Enter PAN No"
                            onChange={handleInputChange}
                        />

                        <label>Enter Aadhar No.</label>
                        <input
                            type="tel"
                            name="aadharNo"
                            // value=""
                            className='mobile-input'
                            placeholder="Enter Aadhar No"
                            onChange={handleInputChange}
                        />

                        <div className="info-note-txt">Note: You will sign the documents and make the full payment after we have collected the full EOI.</div>

                        <button style={(((kycFormData.panNo.length < 1 || kycFormData.aadharNo.length < 1) && step === steps.KYC_VERIFICATION)) ? {opacity:  '0.4'} : {opacity : 'unset'}} className="signup-continue-btn" onClick={() => submitButtonHandler()}>
                            {waiting ? <PulseLoader color="#FFF" size={10} /> : 'Continue'} 
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
        )}

        {(step === steps.BANK_ACCOUNT_DETAILS)  && (
            <BankDetails 
                waiting={waiting} 
                bankAccountButtonHandler={bankAccountButtonHandler}
                step={step}
                steps={steps}
            />
        )}

        {(step === steps.E_SIGN_SCREEN)  && (
              <>
                <Esign 
                    waiting={waiting} 
                    esignButtonHandler={esignButtonHandler}
                    step={step}
                    steps={steps}
                />
              </>
        )}

        {(step === steps.ADVANCE_PAYMENT_SCREEN)  && (
              <>
                <AdvancePayment 
                    waiting={waiting} 
                    descriptionButtonHandler={descriptionButtonHandler}
                    step={step}
                    steps={steps}
                    count={count}
                />
              </>
        )}

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

export default Verification;