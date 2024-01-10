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
                    <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598618438842-15KYYL4CRXDV05HZEHT7/banner.jpg?format=2500w" alt="banner" />
                    <div className="home-story-content home-text-first">
                        <p className="home-investment-text">Empowering Investment Journeys</p>
                        <p className="home-story-text">Every Size, Every Goal.</p>
                        <button className="home-learn-btn">LEARN MORE</button>
                    </div>
                </div>

            <div className="home-content-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <h2>Welcome to Altstar</h2>
                    <p className="sqsrte-large">We are on a mission to revolutionize real estate investment. <br></br> Our vision goes beyond traditional boundaries, unlocking a world <br></br> of opportunities for investors of all sizes.</p>
                    <p className="sqsrte-large">Altstar stands as a beacon of innovation, making institutional-quality <br></br> real estate investments accessible to everyone.</p>
                </div>
            </div>
            
            <div className="home-aboutus-wrapper">
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
                                <div className="altstar-container-heading">Unlock Exclusive Opportunities:</div>
                                <div className="alstar-container-subheading">Explore real estate investments with Altstar and unlock opportunities that cater to investors of every size. Our platform brings institutional-quality deals to your fingertips.</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Tailored for You:</div>
                                <div className="alstar-container-subheading">Altstar understands that every investor is unique. Our platform offers a personalized experience, aligning investments with your goals and preferences.</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Transparent, Frictionless, Secure:</div>
                                <div className="alstar-container-subheading">Invest with confidence on Altstar. Our platform is designed to be user-friendly, transparent, providing a frictionless and secure investmen experience from start to finish.</div>
                            </div>
                        </div>

                        <div className="altstar-diff-container">
                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Potential for Liquidity:</div>
                                <div className="alstar-container-subheading">Adaptability is key. Altstar not only guides you through curated investment opportunities but also provides potential liquidity options. Enjoy the flexibility to reshape your investment strategy as your financial landscape evolves.</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Excellence, Transparency, Returns:</div>
                                <div className="alstar-container-subheading">Altstar is committed to delivering excellence in every aspect. From transparent dealings to consistent returns, we stand by our promise and are committed to their financial success.</div>
                            </div>

                            <div className="altstar-diff-subcontainer">
                                <img src="https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg" alt="img" className="choose-altstar-img" />
                                <div className="altstar-container-heading">Your Gateway to a Seamless Future:</div>
                                <div className="alstar-container-subheading">Altstar isn't just a platform; it's your gateway to a future of seamless real estate investment. Join us in redefining the landscape, making real estate opportunities accessible to everyone.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-content-choose-wrapper">
                <div className="sqs-layout sqs-commitment-roots">
                    <h2>Your Trust, Our Commitment</h2>
                    <div className="altstar-diff-container">
                        <div>
                            <div className="commitment-wrapper-heading">100+</div>
                            <div className="commitment-wrap-txt">Investors</div>
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
            
            <div className="home-aboutus-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">Learn More</button>
                </div>
            </div>

            <div className="home-content-choose-wrapper">
                <div className="sqs-layout sqs-commitment-roots">
                    <p className="choose-altstar-txt">OUR PLATFORM</p>
                    <h2>Discover Altstar's Tech Edge</h2>
                    <div>Explore key features that drive Altstar's innovation:</div>
                    <ul className="altstar-platform-container">
                        <li className="platform-list">Intuitive Interface</li>
                        <li className="platform-list">Secure Transactions</li>
                        <li className="platform-list">Personalised Insights</li>
                    </ul>

                    <div>
                        <img src="../assets/graph.png" alt="graph" className="platform-graph-img" />
                    </div>
                </div>
            </div>

            <div className="home-aboutus-wrapper">
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