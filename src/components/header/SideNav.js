import React, { useEffect, useState } from "react";
import './Header.css';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const SideNav = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [toggle, setToggle] = useState(false)
    function openProfileNav() {
        if (toggle) {
          setToggle(false)
        } else {
          setToggle(true)
        }
    }

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
                        <div className='sidePanelAnchor' onClick={() => {navigate('/about'); props.hide()}}>
                            About Us
                        </div>
                        <div className='sidePanelAnchor' onClick={() => {navigate('/detail'); props.hide()}}>
                            Opportunities
                        </div>
                        <div className='sidePanelAnchor' onClick={() => {navigate('/detail'); props.hide()}}>
                            How it works
                        </div>
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
                            <Link className='proflink' to="/my-profile" style={{ color: "#1a1a1a", padding:"6px 8px 12px 16px" }}>Profile Details</Link>
                            <Link className='proflink' to="/manage-addresses" style={{ color: "#1a1a1a", padding: "6px 8px 12px 16px" }}>Manage Addresses</Link>
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
