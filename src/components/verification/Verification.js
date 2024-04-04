import React, { useEffect, useState } from "react";
import './Verification.css';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/Toast';
import { verifyOtp, sendOtp, createProfile} from "../../services/api";
import Profile from '../profile/Profile';
import { PulseLoader } from 'react-spinners';
import VerifyIdentity from '../verifyIdentity/VerifyIdentity';
import utils from '../../utils';
import BankDetails from './BankDetails';
import Esign from './Esign';
import AdvancePayment from './AdvancePayment';
import MultiStepProgressBar from '../multiStepProgressBar/MultiStepProgressBar';

const Verification = (props) => {
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

    const clearOTP = () => {
        const inputElem1 = getOtpInputElement(1);
        const inputElem2 = getOtpInputElement(2);
        const inputElem3 = getOtpInputElement(3);
        const inputElem4 = getOtpInputElement(4);
        // const inputElem5 = getOtpInputElement(5);
        // const inputElem6 = getOtpInputElement(6);
        if (inputElem1 && inputElem2 && inputElem3 && inputElem4) {
          inputElem1.value = '';
          inputElem2.value = '';
          inputElem3.value = '';
          inputElem4.value = '';
        //   inputElem5.value = '';
        //   inputElem6.value = '';
          setOtp('');
        }
      };

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

    const onKeyUpEvent = (index, event) => {
        const eventCode = event.which || event.keyCode;
        if (getOtpInputElement(index).value.length === 1) {
        if (index !== 6) {
            getOtpInputElement(index + 1).focus();
        } else {
            getOtpInputElement(index).blur();
        }
        }
        if (getOtpInputElement(index).value.length > 1) {
        getOtpInputElement(index).value = getOtpInputElement(index).value.slice(0, 1);
        }
        if (eventCode === 8 && index !== 1) {
        getOtpInputElement(index - 1).focus();
        }
        const input1 = getOtpInputElement(1).value;
        const input2 = getOtpInputElement(2).value;
        const input3 = getOtpInputElement(3).value;
        const input4 = getOtpInputElement(4).value;
        // const input5 = getOtpInputElement(5).value;
        // const input6 = getOtpInputElement(6).value;
        if (input1 && input2 && input3 && input4 
            // && input5 && input6
            ) {
        const otpValue = `${input1}${input2}${input3}${input4}`;
        setOtp(otpValue);
        } else {
        setOtp('');
        }
    };

    const onFocusEvent = (index) => {
        for (let item = 1; item < index; item += 1) {
        const currentElement = getOtpInputElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
        }
    };

    const onOTPBoxValueChange = (event) => {
        const inputEl = event.target;
        if (inputEl.value.length > 1) {
        inputEl.value = inputEl.value.slice(0, 1);
        }
    };

    const handleCountryVerify = (ele) => {
        setCountry(ele);
    }

    const sendOTP = (resend) => {
        if (!(kycFormData.panNo) || (kycFormData.panNo.trim() === '')) {
          setToastConfig({
            show: true,
            showTick: false,
            text: 'Enter a valid PAN',
          });
          return ;
        } 
        else if(isNaN(kycFormData.aadharNo) || (kycFormData.aadharNo.trim() === '')) {
            setToastConfig({
                show: true,
                showTick: false,
                text: 'Enter a valid Aadhar',
            });
            return;
        } 
        {
        //   const code = country.dial_code.replace('+','');
        //   setWaiting(true);
        //   sendOtp({
        //     phone_number: kycFormData.aadharNo,
        //     source: "altstar_customer_dashboard",
        //   })  .then((res) => {
        //       if (res.status) {
        //         setWaiting(false);
                setStep(steps.BANK_ACCOUNT_DETAILS);
        //         setToastConfig({
        //           show: true,
        //           text: `Success`,
        //           showTick: true,
        //           time: 1500,
        //         });
        //         setResendButtonDisabledTime(30);
        //       } else {
        //         setToastConfig({
        //           show: true,
        //           text: res.message || 'Error in sending OTP',
        //           showTick: true,
        //           time: 1500,
        //         });
        //         setWaiting(false);
        //       }
        //     }, (err) => {
        //       setToastConfig({
        //         show: true,
        //         text: err.message || 'Error in sending OTP',
        //         showTick: true,
        //         time: 1500,
        //       });
        //       setWaiting(false);
        //     },
        //   );
        }
    };

    const submitButtonHandler = () => {
        // if (step === steps.KYC_VERIFICATION) {
          sendOTP();
        // } 
        // else if (step === steps.BANK_ACCOUNT_DETAILS) {
        //     console.log("bank form dsta h hdhdjhdjd", bankFormData);
        //   if (isNaN(bankFormData.accName) || (bankFormData.accName.trim() === '')) {
        //     setToastConfig({
        //       show: true,
        //       showTick: false,
        //       text: 'Enter a Account Name',
        //     });
        //   } else {
        //     setWaiting(true);
        //     verifyOtp({
        //       phone_number: phoneNumber,
        //       otp: otp,
        //       source : "altstar_customer_dashboard",
        //     }).then((res) => {
        //         setWaiting(false);
                
        //         if (res.status) {
        //           localStorage.setItem("accessToken", res.data.access_token.token);
        //           localStorage.setItem("is_loggedIn", true);
        //           localStorage.setItem("mobile", phoneNumber);

        //           if(res && res.data && res.data.email){
        //               localStorage.setItem("email", res.data.email);
        //               localStorage.setItem("name", res.data.name);
        //               localStorage.setItem("first_name", res.data.first_name);
        //               navigate('/')
        //           }else{
        //             setStep(steps.E_SIGN_SCREEN);
        //           }
        //           setToastConfig({
        //             show: true,
        //             text: 'Logged In',
        //             showTick: true,
        //             time: 1500,
        //           });
        //         } else {
        //           clearOTP();
        //           setToastConfig({
        //             show: true,
        //             text: res.message || 'Wrong OTP',
        //             showTick: false,
        //             time: 1500,
        //           });
        //         }
        //       }, (err) => {
        //         setWaiting(false);
        //         clearOTP();
        //         setToastConfig({
        //           show: true,
        //           text: err.response.message || 'Verification Failed!',
        //           showTick: false,
        //           time: 1500,
        //         });
        //       },
        //     );
        //   }
        // }
    };

    const bankAccountButtonHandler = (form) => {
        setStep(steps.E_SIGN_SCREEN);
        // console.log('setBankFormData',form);
        setBankFormData({...form});
    }

    const esignButtonHandler = (form) => {
        setStep(steps.ADVANCE_PAYMENT_SCREEN);
        // console.log('formData',form);
        setFormData({...form});
    }

    const descriptionButtonHandler = (form) => {
        // console.log('formData',form);
        // setFormData({...formData, 'description':form});
        const data = {...formData, 'description':form};
        setWaiting(true);
        createProfile(data).then((res) => {
            if (res.status) {
              setWaiting(false);
            //   setStep(steps.REVIEW_SCREEN);
                navigate('/')
              setToastConfig({
                show: true,
                text: 'Profile created successfully',
                showTick: true,
                time: 1500,
              });
              // if (afterLoggedIn) afterLoggedIn();
            } else {
              setWaiting(false);
              setToastConfig({
                show: true,
                text: res.message || 'Something went wrong',
                showTick: false,
                time: 1500,
              });
            }
          }, (err) => {
            setWaiting(false);
            setToastConfig({
              show: true,
              text: err.response.message || 'Something went wrong',
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