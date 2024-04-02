import React, { useEffect, useState } from "react";
import './Header.css';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import SideNav from './SideNav';
import { useNavigate, useLocation } from 'react-router-dom';
import utils from '../../utils';

const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [openNav, setOpenNav] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Handle body overflow when the navbar is open
        if (openNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openNav]);

    const logout = () =>{
        setLoggedIn(false);
        hideSideNav();
        localStorage.clear();
        navigate(`/`);
    }

    const hideSideNav = () => {
        setOpenNav(false);
        const z = document.getElementsByTagName('body');
        z[0].style.overflow = 'scroll';
    }

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      };

    useEffect(()=> {
        if(utils.isLoggedIn()){
            setLoggedIn(true);
        }
    },[location.pathname])


    return (
        <>
            {openNav && (
                <SideNav 
                    hide={hideSideNav}
                    logout={logout}
                    loggedIn={loggedIn}
                />
            )}
            <div 
                className={"mainBar" + " " + "mainBarRoot" + " " + "hideOnPcTab" + " " + " " + "header-announcement-bar-wrapper" + " "} 
                id="headerScroll" 
            >
                <div
                    className="header-border"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        width: "100%"
                    }}
                >
                    <div className="mob-root-display">
                        <img onClick={() => {setOpenNav(true);}} className='header-arrow-icon' src='/assets/menu.svg' alt="menu"/>
                        <a href="/" className="altstar-home-anchor">
                            <img src="../assets/Altstar-Logo-No-circle.png" className="altstar-anchor-txt" alt="logo" />
                        </a>
                    </div>

                    <div className="desk-root-display">
                        <a href="/" className="altstar-home-anchor">
                            <img src="../assets/Altstar-Logo-No-circle.png" className="altstar-anchor-txt" />
                        </a>
                    </div>

                    <div className="header-display-desktop">
                        <div className="header-display-desktop-subroot">
                            <div className="header-element">
                                <a href="/about">
                                    <div className="header-element-item-active">About Us</div>
                                </a>
                            </div>

                            <div className="header-element">
                                <a href="/detail">
                                    <div className="header-element-item-active">Opportunities</div>
                                </a>
                            </div>

                            <div className="header-element">
                                <a>
                                    <div className="header-element-item-active">How it works</div>
                                </a>
                            </div>

                            <div className="header-element">
                                {/* <a>
                                    <div className="header-element-item-active">Resources</div>
                                </a> */}
                                 <DropDownMenu parentString="Resources" style={props.logoShort ? { fontSize: '1rem' } : null}>
                                    {/* <a>
                                        <div className="dropdown-item-active itemNameBlack">FAQs</div>
                                    </a>
                                    <a>
                                        <div className="dropdown-item-active itemNameBlack">Knowledge Centre</div>
                                    </a> */}
                                    <a>
                                        <div className="dropdown-item-active itemNameBlack" onClick={scrollToBottom}>Contact Us</div>
                                    </a>
                                </DropDownMenu>
                            </div>

                            {/* <div className="header-element">
                                <a>
                                    <div className="header-element-item-active">Legal compliance</div>
                                </a>
                            </div>

                            <div className="header-element">
                                <a>
                                    <div className="header-element-item-active">Contact us</div>
                                </a>
                            </div> */}
                        </div>

                        {loggedIn ? 
                            <DropDownMenu 
                                parentString={localStorage.getItem("first_name") ? localStorage.getItem("first_name") : "User"}
                                style={{ fontWeight: "600" }}
                                dropDownStyle={{ minWidth: "100px", marginLeft: "17px" }}
                            >
                                <a onClick={() => logout()}>
                                    <div className="dropdown-item-active itemNameBlack">Logout</div>
                                </a>
                                {/* <a>
                                    <div className="dropdown-item-active itemNameBlack">Knowledge Centre</div>
                                </a>
                                <a>
                                    <div className="dropdown-item-active itemNameBlack">Contact Us</div>
                                </a> */}
                            </DropDownMenu>

                            // <div className="header-text-container">
                            //     <span className="mob-text" style={{ paddingLeft: "1.5rem" }}>
                            //         {/* Hello,{" "} */}
                            //         <span className="user-desk-name">
                                        // {localStorage.getItem("first_name")
                                        // ? localStorage.getItem("first_name")
                                        // : "User"}
                            //         </span>
                            //     </span>
                            //     {/* <p className="ph-number">
                            //         <span style={{ fontSize: "14px", color: "#666666"}}>
                            //             {localStorage.getItem("mobile")}
                            //         </span>
                            //     </p> */}
                            // </div>
                        :
                            <>
                                <div className="header-cta-connect">
                                    <a href="/login" className="header-cta-connect-atag">LOG IN/SIGN UP</a>
                                </div>

                                {/* <div className="header-cta-connect">
                                    <a href="/login" className="header-cta-connect-signup">SIGN UP</a>
                                </div> */}
                            </>
                        }
                    </div>
                </div>
            </div>
      </>
    )
}

export default Header;
