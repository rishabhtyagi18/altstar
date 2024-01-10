import React, { useEffect, useState } from "react";
import './Header.css';

const Header = (props) => {

    return (
        <>
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
                    <div>
                        <a href="/" className="altstar-home-anchor">
                            <div className="altstar-anchor-txt">Altstar</div>
                        </a>
                    </div>

                    <div className="header-display-desktop">
                        <div className="header-display-desktop-subroot">
                            <div className="header-element">
                                <a href="/about" aria-current={window.location.pathname === "/" ? "page" : undefined}>
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
                                <a>
                                    <div className="header-element-item-active">Resources</div>
                                </a>
                            </div>

                            <div className="header-element">
                                <a>
                                    <div className="header-element-item-active">Legal compliance</div>
                                </a>
                            </div>

                            <div className="header-element">
                                <a>
                                    <div className="header-element-item-active">Contact us</div>
                                </a>
                            </div>
                        </div>

                        <div className="header-cta-connect">
                            <a href="/sign-up" className="header-cta-connect-signup">SIGN UP</a>
                        </div>

                        <div className="header-cta-connect">
                            <a className="header-cta-connect-atag">LOG IN</a>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}

export default Header;