import React, { useEffect, useState } from "react";
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/Toast';

const Profile = (props) => {
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });
    const [buttonColor, setButtonColor] = useState(true);
    const [formData, setFormData] = useState(
        {
            email: '',
            firstName: '',
            lastName: '',
            dob: '',
            address: ''
        }
    );

    const profileSubmit = () => {
        if (!formData.email || formData.email.trim() === '') {
          setToastConfig({ ...toastConfig, show: true, text: 'Please Enter your Email' });
        } 
        else if(!formData.firstName || formData.firstName.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter your first Name' });
        }
        else if(!formData.lastName || formData.lastName.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter your last Name' });
        }
        else if (!formData.dob || formData.dob.trim() === '') {
          setToastConfig({ ...toastConfig, show: true, text: 'Please Enter your DOB' });
        }
        else if (!formData.address || formData.address.trim() === '') {
          setToastConfig({ ...toastConfig, show: true, text: 'Please Enter your address' });
        }
      
        props.profileButtonHandler(formData);
    }

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }))
    };

    useEffect(() =>{
        if(formData.email && formData.firstName && formData.lastName && formData.dob && formData.address){
          setButtonColor(false);
        }else{
          setButtonColor(true);
        }
    },[formData])

return (
    <>  
        <div className="signup-root">
            <div className="signup-main-container">
                <div className="signup-mobile-txt">Profile Information</div>

                <div className="profile-form-containerroot">
                    <div className="profile-form-container">
                        <label>Email</label>
                        <input
                            // onChange={handleInputChange}
                            type="text"
                            name="email"
                            // value=""
                            className='mobile-input'
                            placeholder="karansharma@example.com"
                            onChange={handleInputChange}
                        />

                        <div className="name-container-box">
                            <div>
                                <label className="mobile-input-label">Legal first name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    // value={inputs.mobile}
                                    placeholder="Legal first name"
                                    className='mobile-input-name'
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="mobile-input-label">Legal last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    // value={inputs.mobile}
                                    placeholder="Legal last name"
                                    className='mobile-input-name'
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            // defaultValue={utils.getCurrentDateInput()}
                            // value={inputs.mobile}
                            placeholder="DD/MM/YYYY"
                            className='profile-mobile-input profile-date-input'
                            onChange={handleInputChange}
                        />

                        <label>Address line 1</label>
                        <input
                            type="text"
                            name="address"
                            // value={inputs.mobile}
                            placeholder="Street Address or POX"
                            className='mobile-input'
                            onChange={handleInputChange}
                        />

                        <button 
                            style={buttonColor ? {opacity : '0.4'} : {opacity:  'unset'}} 
                            className="signup-continue-btn" 
                            onClick={() => profileSubmit()}
                            disabled={buttonColor}
                        >
                            Continue
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

export default Profile;