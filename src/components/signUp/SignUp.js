import React, { useEffect, useState } from "react";
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/Toast';
import { verifyOtp, sendOtp, createProfile} from "../../services/api";
import Profile from '../profile/Profile';
import { PulseLoader } from 'react-spinners';
import VerifyIdentity from '../verifyIdentity/VerifyIdentity';
import utils from '../../utils';

const SignUp = (props) => {
    const sortedData = utils.getCountryFlag();
    const keyToPrioritize = 'preferred';
    const valueToPrioritize = !0;
    const flag = sortedData.sort((a, b) => {
      if (a[keyToPrioritize] === valueToPrioritize) return -1; // a comes first
      if (b[keyToPrioritize] === valueToPrioritize) return 1; // b comes first
      return 0; // maintain the current order
    });
    const steps = {
        PHONE_NUMBER_SCREEN: 1,
        OTP_SCREEN: 2,
        PROFILE_SCREEN: 3,
        VERFIY_IDENTITY_SCREEN: 4,
        REVIEW_SCREEN: 5,
    };
    const navigate = useNavigate();
    const [step, setStep] = useState(steps.PHONE_NUMBER_SCREEN);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [waiting, setWaiting] = useState(false);
    const [country, setCountry] = useState({name:"India",dial_code:"+91",code:"IN",preferred:!0,flag:"🇮🇳"});
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(30);
    const [otp, setOtp] = useState('');
    const [formData, setFormData] = useState({});
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

    const mobileInputHandler = (event) => {
        const inputEl = event.target;
        if (inputEl.value.length > 10) inputEl.value = inputEl.value.slice(0, 10);
        setPhoneNumber(inputEl.value);
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
        if (isNaN(phoneNumber) || !(phoneNumber.length === 10)) {
          setToastConfig({
            show: true,
            showTick: false,
            text: 'Enter a valid mobile number.',
          });
          return ;
        } 
        {
        //   const code = country.dial_code.replace('+','');
          setWaiting(true);
          sendOtp({
            phone_number: phoneNumber,
            source: "trust43_website",
          })  .then((res) => {
              if (res.status) {
                setWaiting(false);
                setStep(steps.OTP_SCREEN);
                setToastConfig({
                  show: true,
                  text: `OTP sent to ${phoneNumber}`,
                  showTick: true,
                  time: 1500,
                });
                setResendButtonDisabledTime(30);
              } else {
                setToastConfig({
                  show: true,
                  text: res.message || 'Error in sending OTP',
                  showTick: true,
                  time: 1500,
                });
                setWaiting(false);
              }
            }, (err) => {
              setToastConfig({
                show: true,
                text: err.message || 'Error in sending OTP',
                showTick: true,
                time: 1500,
              });
              setWaiting(false);
            },
          );
        }
    };

    const submitButtonHandler = () => {
        if (step === steps.PHONE_NUMBER_SCREEN) {
          sendOTP();
        } else if (step === steps.OTP_SCREEN) {
          if (isNaN(otp) || otp.length !== 4) {
            setToastConfig({
              show: true,
              showTick: false,
              text: 'Invalid OTP',
            });
          } else {
            setWaiting(true);
            verifyOtp({
              phone_number: phoneNumber,
              otp: otp,
              source : "trust43_website",
            }).then((res) => {
                setWaiting(false);
                
                if (res.status) {
                  localStorage.setItem("accessToken", res.data.access_token.token);
                  localStorage.setItem("is_loggedIn", true);
                  localStorage.setItem("mobile", phoneNumber);

                //   if(res && res.data && res.data.email){
                //       localStorage.setItem("email", res.data.email);
                //       localStorage.setItem("name", res.data.name);
                //       localStorage.setItem("first_name", res.data.first_name);
                //       navigate('/')
                //   }else{
                    setStep(steps.PROFILE_SCREEN);
                //   }
                  setToastConfig({
                    show: true,
                    text: 'Logged In',
                    showTick: true,
                    time: 1500,
                  });
                } else {
                  clearOTP();
                  setToastConfig({
                    show: true,
                    text: res.message || 'Wrong OTP',
                    showTick: false,
                    time: 1500,
                  });
                }
              }, (err) => {
                setWaiting(false);
                clearOTP();
                setToastConfig({
                  show: true,
                  text: err.response.message || 'Verification Failed!',
                  showTick: false,
                  time: 1500,
                });
              },
            );
          }
        }
    };

    const profileButtonHandler = (form) => {
        setStep(steps.VERFIY_IDENTITY_SCREEN);
        console.log('formData',form);
        setFormData({...form});
    }

    const descriptionButtonHandler = (form) => {
        console.log('formData',form);
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
    {(step === steps.PHONE_NUMBER_SCREEN)  && (
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
                            onChange={mobileInputHandler}
                        />
                        </div>
                    </div>

                    <button style={((phoneNumber.length < 10 && step === steps.PHONE_NUMBER_SCREEN)) ? {opacity:  '0.4'} : {opacity : 'unset'}} className="signup-continue-btn" onClick={() => submitButtonHandler()}>
                        {waiting ? <PulseLoader color="#FFF" size={10} /> : 'Continue'} 
                    </button>
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

        {(step === steps.OTP_SCREEN)  && (
            <div className="signup-root">
                <div className="signup-main-container">
                    <div className="signup-mobile-txt">Enter PIN and Verify</div>

                    <div className="signup-form-container">
                        <div className="otp-mobile-txt">To help keep your profile safe, we have sent a text message with a verification pin to your device.</div>

                        {/* <div className="appLinkForm"> */}
                            <div className="otpInput">
                                    <input id="otpInput1" placeholder="_" type="tel" maxLength="1" onKeyUp={(e) => onKeyUpEvent(1, e)} onFocus={() => onFocusEvent(1)} onChange={onOTPBoxValueChange} />
                                    <input id="otpInput2" placeholder="_" type="tel" maxLength="1" onKeyUp={(e) => onKeyUpEvent(2, e)} onFocus={() => onFocusEvent(2)} onChange={onOTPBoxValueChange} />
                                    <input id="otpInput3" placeholder="_" type="tel" maxLength="1" onKeyUp={(e) => onKeyUpEvent(3, e)} onFocus={() => onFocusEvent(3)} onChange={onOTPBoxValueChange} />
                                    <input id="otpInput4" placeholder="_" type="tel" maxLength="1" onKeyUp={(e) => onKeyUpEvent(4, e)} onFocus={() => onFocusEvent(4)} onChange={onOTPBoxValueChange} />
                                    <input id="otpInput5" placeholder="_" type="tel" maxLength="1" onKeyUp={(e) => onKeyUpEvent(5, e)} onFocus={() => onFocusEvent(5)} onChange={onOTPBoxValueChange} />
                                    <input id="otpInput6" placeholder="_" type="tel" maxLength="1" onKeyUp={(e) => onKeyUpEvent(6, e)} onFocus={() => onFocusEvent(6)} onChange={onOTPBoxValueChange} />
                            </div>
                        {/* </div> */}

                        {!resendButtonDisabledTime ? (
                              <div className="resend-otp1"> 
                                <span 
                                    onClick={() => {
                                        sendOTP(true);
                                    }}
                                >
                                    Resend OTP
                                </span>
                                &nbsp;{phoneNumber}
                              </div>
                        ) : (
                              <div className='resend-otp'>{`Resend OTP in `}<span>{`${resendButtonDisabledTime} seconds`}</span></div>
                        )}

                        <button style={((otp.length !== 4 && step === steps.OTP_SCREEN)) ? {opacity:  '0.4'} : {opacity : 'unset'}} onClick={() => submitButtonHandler()} className="signup-continue-btn">
                            {waiting ? <PulseLoader color="#FFF" size={10} /> : 'Next'} 
                        </button>
                    </div>
                </div>
            </div>
        )}

        {(step === steps.PROFILE_SCREEN)  && (
              <>
                <Profile phoneNumber={phoneNumber} profileButtonHandler={profileButtonHandler} waiting={waiting}/>
              </>
        )}

        {(step === steps.VERFIY_IDENTITY_SCREEN)  && (
              <>
                <VerifyIdentity phoneNumber={phoneNumber} descriptionButtonHandler={descriptionButtonHandler} handleCountryVerify={handleCountryVerify} country={country} flag={flag}  waiting={waiting}/>
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
			/>
		) : null}
    </>
)}

export default SignUp;