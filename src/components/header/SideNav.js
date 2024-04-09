import React, { useEffect, useState } from "react";
import './Header.css';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const SideNav = (props) => {
    const navigate = useNavigate();
    // const location = useLocation();
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        window.location.href = "https://altstarcapital.com";
        props.hide()
    }
    function openProfileNav() {
        if (toggle) {
          setToggle(false)
        } else {
          setToggle(true)
        }
    }

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      };

    return (
        <>
            <div id="mySidenav" className="sidenav">
                <div>
                    <div className="mobAltstarLogo" 
                    style={{ boxShadow: "none" }}
                    >
                    {props.loggedIn ?
                        <div className="text-container">
                            <span className="mob-text" style={{ paddingLeft: "1.5rem" }}>
                            Hello,{" "}
                            <span style={{ fontWeight: "bold" }}>
                                {localStorage.getItem("first_name")
                                ? localStorage.getItem("first_name")
                                : "User"}
                            </span>
                            </span>
                            <p className="ph-number">
                            <span style={{ fontSize: "14px", color: "#666666"}}>
                                {localStorage.getItem("mobile")}
                            </span>
                            </p>
                        </div>
                        :
                        <div className="sidenav-cta-container">
                            <div className="sidenav-header-cta-connect">
                                <a href="/login" className="sidenav-header-cta-connect-atag">LOG IN/SIGN UP</a>
                            </div>

                            {/* <div className="sidenav-header-cta-connect">
                                <a href="/login" className="sidenav-header-cta-connect-signup">SIGN UP</a>
                            </div> */}
                        </div>
                    }
                    <img
                        style={{ marginRight: "1em", width: "1em", height: "1em"}}
                        alt="img"
                        onClick={props.hide}
                        src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/SideBar/Cross.png"
                    />
                    </div>
                    <div>
                        <div className='sidePanelAnchor' onClick={() => { handleClick();}}>
                            About Us
                        </div>
                        <a href="/about" style={{textDecoration : 'none'}}>
                            <div className='sidePanelAnchor' onClick={() => {props.hide()}}>
                                Opportunities
                            </div>
                        </a>
                        {/* <div className='sidePanelAnchor' onClick={() => {navigate('/'); props.hide()}}>
                            How it works
                        </div> */}
                        <div className='sidePanelAnchorDropdown' onClick={() => openProfileNav()}>
                            <span style={{ whiteSpace: "nowrap", color: "#1a1a1a" }}>Resources</span>
                            <div className={toggle ? "dropUp" : "dropdown"}>
                                <img
                                    alt="img"
                                    src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/SideBar/down-arrow.png"
                                    className="arrowIcons-resources"
                                    style={toggle ? { marginRight: "6em" } : { marginLeft: "6em" }}
                                />
                            </div>
                        </div>

                        <div className={toggle ? "profileNav" : "block1"}>
                        <div className='proflink' onClick={() => {scrollToBottom(); props.hide()}} style={{ color: "#1a1a1a", padding:"6px 8px 12px 16px" }}>Contact Us</div>
                         </div>
                        {/* <a href="/" style={{'textDecoration':'none'}}> */}
                        {props.loggedIn && <div className='sidePanelAnchor' 
                            onClick={() => props.logout()}
                        >
                            Logout
                        </div>}
                        {/* </a> */}
                    </div>
                </div>
                <div className='sidePanelBottom'>
                        2024 Altstar Private Limited
                    </div>
                
            </div>
      </>
    )
}

export default SideNav;
