import React, { useEffect, useState } from "react";
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = (props) => {

return (
    <>  
        <div className="about-us-root">
           
            <div className="aboutUs-section-background aboutUs-desk-root">
                <img src="../assets/Altstar-Banner.png" alt="banner" />
                <div className="aboutUs-story-content aboutUs-text-first">
                    {/* <p className="aboutUs-investment-text">Empowering Investment Journeys</p> */}
                    {/* <p className="aboutUs-story-text">Every Size, Every Goal.</p> */}
                    <p className="aboutUs-story-text">Smart investing in Real estate</p>
                    <button className="aboutUs-learn-btn">LEARN MORE</button>
                </div>
            </div>

            <div className="home-content-wrapper">
                <div className="investment-main-root">
                    <div className="investment-brands-main-active">Corporate Bonds (6)</div>
                    <div className="investment-brands-main">Securitized Debt Inst. (4)</div>
                    <div className="investment-brands-main">Startup Equity (0)</div>
                    <div className="investment-brands-main">Commercial Property (0)</div>
                </div>
            </div>

            <div className="home-content-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <h2>Commercial Real Estate</h2>
                    <p className="sqsrte-large">Commercial real estate (CRE) is property used exclusively for business-related purposes or to provide a workspace rather than a living space, which would instead constitute residential real estate.</p>

                    <div className="recommendations-content-root">
                        {/* <div className="arrow-recommendations-root-left"><img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-left" /></div> */}
                        <div className="recommendations-content-internal-root">
                            <div className="recommendations-property-txt">PROPERTY ONE</div>
                            <img src="../assets/mask_group.png" alt="img" className="recommendations-img" />

                            <div className="recommendations-property-container">
                                <div className="recommendations-property-heading">Introducing Altstar Direct Access Fund II</div>
                                <div className="recommendations-property-subhead">Capture the value of market dislocations in our newest value-add funds.</div>

                                <div className="property-subcontainer-root">
                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment Strategy</div>
                                        <div className="recommendations-strategy-subtxt">Value add</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Fund Size</div>
                                        <div className="recommendations-strategy-subtxt">$400 mm</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Property Types</div>
                                        <div className="recommendations-strategy-subtxt">Various property types</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment minimum</div>
                                        <div className="recommendations-strategy-subtxt">50K</div>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="recommendations-learn-btn">Learn More</button>
                        </div>

                        <div className="recommendations-content-internal-root">
                            <div className="recommendations-property-txt">PROPERTY TWO</div>
                            <img src="../assets/mask_group.png" alt="img" className="recommendations-img" />

                            <div className="recommendations-property-container">
                                <div className="recommendations-property-heading">Introducing Altstar Direct Access Fund II</div>
                                <div className="recommendations-property-subhead">Capture the value of market dislocations in our newest value-add funds.</div>
                                
                                <div className="property-subcontainer-root">
                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment Strategy</div>
                                        <div className="recommendations-strategy-subtxt">Value add</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Fund Size</div>
                                        <div className="recommendations-strategy-subtxt">$400 mm</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Property Types</div>
                                        <div className="recommendations-strategy-subtxt">Various property types</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment minimum</div>
                                        <div className="recommendations-strategy-subtxt">50K</div>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="recommendations-learn-btn">Learn More</button>
                        </div>

                        {/* <div className="arrow-recommendations-root">
                            <img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-right" />
                        </div> */}
                    </div>

                    <div className="recommendations-content-root">
                        {/* <div className="arrow-recommendations-root-left"><img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-left" /></div> */}
                        <div className="recommendations-content-internal-root">
                            <div className="recommendations-property-txt">PROPERTY ONE</div>
                            <img src="../assets/mask_group.png" alt="img" className="recommendations-img" />

                            <div className="recommendations-property-container">
                                <div className="recommendations-property-heading">Introducing Altstar Direct Access Fund II</div>
                                <div className="recommendations-property-subhead">Capture the value of market dislocations in our newest value-add funds.</div>

                                <div className="property-subcontainer-root">
                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment Strategy</div>
                                        <div className="recommendations-strategy-subtxt">Value add</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Fund Size</div>
                                        <div className="recommendations-strategy-subtxt">$400 mm</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Property Types</div>
                                        <div className="recommendations-strategy-subtxt">Various property types</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment minimum</div>
                                        <div className="recommendations-strategy-subtxt">50K</div>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="recommendations-learn-btn">Learn More</button>
                        </div>

                        <div className="recommendations-content-internal-root">
                            <div className="recommendations-property-txt">PROPERTY TWO</div>
                            <img src="../assets/mask_group.png" alt="img" className="recommendations-img" />

                            <div className="recommendations-property-container">
                                <div className="recommendations-property-heading">Introducing Altstar Direct Access Fund II</div>
                                <div className="recommendations-property-subhead">Capture the value of market dislocations in our newest value-add funds.</div>
                                
                                <div className="property-subcontainer-root">
                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment Strategy</div>
                                        <div className="recommendations-strategy-subtxt">Value add</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Fund Size</div>
                                        <div className="recommendations-strategy-subtxt">$400 mm</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Property Types</div>
                                        <div className="recommendations-strategy-subtxt">Various property types</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment minimum</div>
                                        <div className="recommendations-strategy-subtxt">50K</div>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="recommendations-learn-btn">Learn More</button>
                        </div>

                        {/* <div className="arrow-recommendations-root">
                            <img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-right" />
                        </div> */}
                    </div>

                    <div className="recommendations-content-root">
                        {/* <div className="arrow-recommendations-root-left"><img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-left" /></div> */}
                        <div className="recommendations-content-internal-root">
                            <div className="recommendations-property-txt">PROPERTY ONE</div>
                            <img src="../assets/mask_group.png" alt="img" className="recommendations-img" />

                            <div className="recommendations-property-container">
                                <div className="recommendations-property-heading">Introducing Altstar Direct Access Fund II</div>
                                <div className="recommendations-property-subhead">Capture the value of market dislocations in our newest value-add funds.</div>

                                <div className="property-subcontainer-root">
                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment Strategy</div>
                                        <div className="recommendations-strategy-subtxt">Value add</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Fund Size</div>
                                        <div className="recommendations-strategy-subtxt">$400 mm</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Property Types</div>
                                        <div className="recommendations-strategy-subtxt">Various property types</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment minimum</div>
                                        <div className="recommendations-strategy-subtxt">50K</div>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="recommendations-learn-btn">Learn More</button>
                        </div>

                        <div className="recommendations-content-internal-root">
                            <div className="recommendations-property-txt">PROPERTY TWO</div>
                            <img src="../assets/mask_group.png" alt="img" className="recommendations-img" />

                            <div className="recommendations-property-container">
                                <div className="recommendations-property-heading">Introducing Altstar Direct Access Fund II</div>
                                <div className="recommendations-property-subhead">Capture the value of market dislocations in our newest value-add funds.</div>
                                
                                <div className="property-subcontainer-root">
                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment Strategy</div>
                                        <div className="recommendations-strategy-subtxt">Value add</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Fund Size</div>
                                        <div className="recommendations-strategy-subtxt">$400 mm</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Target Property Types</div>
                                        <div className="recommendations-strategy-subtxt">Various property types</div>
                                    </div>

                                    <div className="recommendations-strategy-container">
                                        <div className="recommendations-strategy-text">Investment minimum</div>
                                        <div className="recommendations-strategy-subtxt">50K</div>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="recommendations-learn-btn">Learn More</button>
                        </div>

                        {/* <div className="arrow-recommendations-root">
                            <img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-right" />
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    </>
)}

export default AboutUs;