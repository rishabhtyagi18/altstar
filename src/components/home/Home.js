import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

    const navigate = useNavigate();

return (
    <>  
        <div className="home-root">
            <div className="home-section-background home-desk-root">
                    <img src="../assets/Altstar-Banner.png" alt="banner" />
                    <div className="home-story-content home-text-first">
                        {/* <p className="home-investment-text">Empowering Investment Journeys</p> */}
                        <p className="home-story-text">Smart investing in Real estate</p>
                        <button className="home-learn-btn">View Opportunities</button>
                    </div>
                </div>

            <div className="home-content-wrapper">
                <div className="sqs-layout-welcome sqs-art-desk-gallery">
                    <h2>Welcome to Altstar</h2>
                    <p className="sqsrte-large">We are on a mission to curate and offer the most attractive real estate investment opportunities traditionally accessible only to institutional investors to retail investors at a click enabling them to build a diversified real estate portfolio thereby enabling them to building a brighter financial future.</p>
                    {/* <p className="sqsrte-large">Altstar stands as a beacon of innovation, making institutional-quality <br></br> real estate investments accessible to everyone.</p> */}
                </div>
            </div>
            
            <div className="home-aboutus-wrapper home-wrapper-about-root">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">About us</button>
                </div>
            </div>

            <div className="home-content-choose-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <p className="choose-altstar-txt">WHY CHOOSE ALTSTAR?</p>
                    <h2>The Altstar difference</h2>
                    
                    <div className="altstar-diff-root">
                        <div className="altstar-diff-container">
                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Build a Diversified Real Estate Portfolio</div>
                                <br></br>
                                <div className="alstar-container-subheading">Our fractional ownership model enables investors to own a share of institutional quality real estate with lower minimum investments and build a diversified real estate portfolio not having to worry about managing the property.</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Proactive Asset Management</div>
                                <br></br>
                                <div className="alstar-container-subheading">Our team has end to end capabilities as developer, owner and operator of different real estate asset classes and have worked across several economic cycles. We utilize proprietary technology and systems that analyze market and property level data to make better, faster investment and asset management decisions.</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Experienced team with proven track</div>
                                <br></br>
                                <div className="alstar-container-subheading">
                                With over 40 years of combined experience, our team brings a wealth of knowledge and a track record of success in the real estate investing. Over USD 3 BN of Assets managed by the leadership team across multiple asset classes and cities. Led by Industry veterans – Our leadership team hails from top tier real estate firms such as Apollo, JP Morgan, Xander and VR.
                                </div>
                            </div>
                        </div>

                        <div className="altstar-diff-container">
                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Secondary market. Potential liquidity</div>
                                <br></br>
                                <div className="alstar-container-subheading">altstar’s secondary market matches buyers and sellers of private real estate. We offer the potential for liquidity every quarter, providing flexibility to our investors.</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Stringent selection criteria before listing</div>
                                <br></br>
                                <div className="alstar-container-subheading">
                                Each investment is subject to a rigorous vetting process and due diligence, ensuring only the highest quality opportunities are selected Extensive networks build over the last decade help is sourcing the most attractive investments
                                </div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Robust and secure platform</div>
                                <br></br>
                                <div className="alstar-container-subheading">State of the art technology to ensure the highest level of security for your investments, safeguarding both your financial and personal data.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-content-choose-wrapper">
                <div className="sqs-layout sqs-commitment-roots sqs-commitment-rating-root">
                    {/* <h2>Your Trust, Our Commitment</h2> */}
                    <div className="altstar-diff-container">
                        <div>
                            <div className="commitment-wrapper-heading commitment-wrapper-subroot">100+</div>
                            <div className="commitment-wrap-txt commitment-wrapper-subroot-text">Investors</div>
                        </div>

                        <div>
                            <div className="commitment-wrapper-heading">1500+</div>
                            <div className="commitment-wrap-txt">Real Estate Opportunities</div>
                        </div>

                        <div>
                            <div className="commitment-wrapper-heading">$1.2 Mn+</div>
                            <div className="commitment-wrap-txt">Profits</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="home-aboutus-wrapper-learn">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">Learn More</button>
                </div>
            </div>

            <div className="home-content-choose-wrapper">
                <div className="sqs-layout sqs-commitment-roots">
                    <p className="choose-altstar-txt">OUR PLATFORM</p>
                    {/* <h2>Discover Altstar's Tech Edge</h2> */}
                    <div className="altstar-choose-container-heading">Explore key features that drive Altstar's innovation</div>
                    <ul className="altstar-platform-container">
                        <li className="platform-list">Intuitive Interface</li>
                        <li className="platform-list">Secure Transactions</li>
                        <li className="platform-list">Personalised Insights</li>
                    </ul>

                    <div className="platform-graph-container">
                        <img src="../assets/graph.png" alt="graph" className="platform-graph-img" />
                    </div>
                </div>
            </div>

            <div className="home-aboutus-wrapper-process">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">See Our Process</button>
                </div>
            </div>

            <div className="home-content-recommendations-wrapper">
                <div className="sqs-layout sqs-commitment-roots">
                    <p className="choose-altstar-txt">OUR RECOMMENDATIONS</p>
                    <h2>Altstar's Live Deals</h2>
                    <div>Private real estate delivers consistent, comparable returns to equities <br></br> and REITs over the past two decades, with lower volatility</div>
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

            <div className="home-content-choose-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <p className="choose-altstar-txt">ALTSTAR RESOURCES</p>
                    <h2>Explore Our Latest Blogs and Insights</h2>
                    
                    <div className="altstar-diff-root">
                        <div className="altstar-diff-container">
                            <div className="altstar-diff-subcontainer">
                                <img src="../assets/mask_group.png" alt="img" className="resources-altstar-img" />
                                <div className="altstar-container-heading">Lorem ipsum</div>
                                <div className="alstar-container-subheading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="../assets/mask_group.png" alt="img" className="resources-altstar-img" />
                                <div className="altstar-container-heading">Lorem ipsum</div>
                                <div className="alstar-container-subheading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="../assets/mask_group.png" alt="img" className="resources-altstar-img" />
                                <div className="altstar-container-heading">Lorem ipsum</div>
                                <div className="alstar-container-subheading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="home-aboutus-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">Read Our Blog</button>
                </div>
            </div>

            <div className="home-faq-choose-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <h2>Frequently asked questions</h2>
                    
                    <div className="faq-layout-roots">
                        <div className="faq-layout-question">Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</div>
                        <div className="faq-layout-question-open">+</div>
                    </div>

                    <div className="faq-layout-roots">
                        <div className="faq-layout-question">Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</div>
                        <div className="faq-layout-question-open">+</div>
                    </div>

                    <div className="faq-layout-roots">
                        <div className="faq-layout-question">Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</div>
                        <div className="faq-layout-question-open">+</div>
                    </div>
                </div>
            </div>

            <div className="home-aboutus-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">More Questions</button>
                </div>
            </div>
        </div>
    </>
)}

export default Home;