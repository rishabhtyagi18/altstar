import React from "react";
import './Footer.css';

const Footer = (props) => {

    return (
        <div className="content-wrapper" style={{paddingTop: "calc(40vmax / 10)",paddingBottom: "calc(40vmax / 10)"}}>
            <div className="content">
                <div className="footer-main-container">
                    <div className="">
                        <img src="../assets/logo.png" alt="logo" className="footer-logo" />
                    </div>

                    <div className="footer-links-container">
                        <h3 className="footer-h3-container-txt">Quick Links</h3>
                        <div className="footer-root-link-txt">Home</div>
                        <div className="footer-root-link-txt">Opportunities</div>
                        <div className="footer-root-link-txt">About Us</div>
                        <div className="footer-root-link-txt">How it works</div>
                        <div className="footer-root-link-txt">Resources</div>
                        <div className="footer-root-link-txt">FAQs</div>
                    </div>

                    <div className="footer-links-container">
                        <div>
                            <h3 className="footer-h3-container-txt">Contact Details</h3>
                            <div className="footer-root-link-txt">dolor sit amet, dolor sit</div>
                            <div className="footer-root-link-txt">dolor sit amet</div>
                        </div>

                        <div>
                            <h3>Social Media</h3>
                            <div className="align-footer-item">
                                <div className="footer-social-boxes"></div>
                                <div className="footer-social-boxes"></div>
                                <div className="footer-social-boxes"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="disclaimer-txt">
                    <span style={{fontWeight: "600"}}>Legal Disclaimer:</span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse consequat, vel illum dolore 
                </p>
            </div>
        </div>
    )
}

export default Footer;