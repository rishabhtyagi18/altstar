import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

    const navigate = useNavigate();

    const diffArr = [
        {
            icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg",
            title: "Build a Diversified Real Estate Portfolio",
            subTitle: "Our fractional ownership model enables investors to own a share of institutional quality real estate with lower minimum investments and build a diversified real estate portfolio not having to worry about managing the property."
        },
        {
            icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg",
            title: "Proactive Asset Management",
            subTitle: "Our team has end to end capabilities as developer, owner and operator of different real estate asset classes and have worked across several economic cycles. We utilize proprietary technology and systems that analyze market and property level data to make better, faster investment and asset management decisions."
        },
        {
            icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg",
            title: "Experienced team with proven track",
            subTitle: "With over 40 years of combined experience, our team brings a wealth of knowledge and a track record of success in the real estate investing. Over USD 3 BN of Assets managed by the leadership team across multiple asset classes and cities. Led by Industry veterans – Our leadership team hails from top tier real estate firms such as Apollo, JP Morgan, Xander and VR."
        },
        {
            icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg",
            title: "Secondary market. Potential liquidity",
            subTitle: "Altstar’s secondary market matches buyers and sellers of private real estate. We offer the potential for liquidity every quarter, providing flexibility to our investors."
        },
        {
            icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg",
            title: "Stringent selection criteria before listing",
            subTitle: "Each investment is subject to a rigorous vetting process and due diligence, ensuring only the highest quality opportunities are selected Extensive networks build over the last decade help is sourcing the most attractive investments"
        },
        {
            icon: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/carEnquiry/Best-Prices.svg",
            title: "Robust and secure platform",
            subTitle: "State of the art technology to ensure the highest level of security for your investments, safeguarding both your financial and personal data."
        }
    ]

    const recommendationsArr = [
        {
            name: "PROPERTY ONE",
            img: "../assets/mask_group.png",
            heading: "Introducing Altstar Direct Access Fund II",
            subHeading: "Capture the value of market dislocations in our newest value-add funds.",
            strategy: "Investment Strategy",
            valueStrategy: "Value add",
            fundSize: "Target Fund Size",
            fundValue: "$400 mm",
            propertyType: "Target Property Types",
            propertyTypeValue: "Various property types",
            minInvestment: "Investment minimum",
            minInvestmentValue: "50K",
            btnText: "Learn More"
        },
        {
            name: "PROPERTY TWO",
            img: "../assets/mask_group.png",
            heading: "Introducing Altstar Direct Access Fund II",
            subHeading: "Capture the value of market dislocations in our newest value-add funds.",
            strategy: "Investment Strategy",
            valueStrategy: "Value add",
            fundSize: "Target Fund Size",
            fundValue: "$400 mm",
            propertyType: "Target Property Types",
            propertyTypeValue: "Various property types",
            minInvestment: "Investment minimum",
            minInvestmentValue: "50K",
            btnText: "Learn More"
        }
    ]

    const resourcesArr = [
        {
            img: "../assets/mask_group.png",
            heading: "Lorem ipsum",
            subHeading: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"
        },
        {
            img: "../assets/mask_group.png",
            heading: "Lorem ipsum",
            subHeading: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"
        },
        {
            img: "../assets/mask_group.png",
            heading: "Lorem ipsum",
            subHeading: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam"
        }
    ]

return (
    <>  
        <div className="home-root">
            <div className="home-section-background home-desk-root">
                <img src="../assets/Altstar-Banner.png" alt="banner" />
                <div className="home-story-content home-text-first">
                    <p className="home-story-text">Smart investing in Real estate</p>
                    <a href="/about">
                    <button className="home-learn-btn">View Opportunities</button>
                    </a>
                </div>
            </div>

            <div className="home-section-background home-mob-root">
                <img src="../assets/Altstar-Banner.png" alt="banner" />
                <div className="home-story-content home-text-first">
                    <p className="home-story-text">Smart investing in Real estate</p>
                    <a href="/about">
                    <button className="home-learn-btn">View Opportunities</button>
                    </a>
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
                <a href="https://altstarcapital.com" target="_blank" className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn" >About us</button>
                </a>
            </div>

            <div className="home-content-choose-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <p className="choose-altstar-txt">WHY CHOOSE ALTSTAR?</p>
                    <h2>The Altstar difference</h2>
                    
                    <div className="altstar-diff-root home-desk-root">
                        <div className="altstar-diff-container">
                            {diffArr.map((ele, index) =>  
                                <div className="altstar-diff-subcontainer" key={index}>
                                    <img src={ele.icon} alt="img" className="choose-altstar-img" />
                                    <div className="altstar-container-heading">{ele.title}</div>
                                    <br></br>
                                    <div className="alstar-container-subheading">{ele.subTitle}</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="altstar-diff-root home-mob-root">
                        <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showIndicators={true} showStatus={false} emulateTouch={false} swipeable={false}>
                            {diffArr.map((ele, index) => (
                                <div className="altstar-diff-subcontainer" key={index}>
                                    <img src={ele.icon} alt="img" className="choose-altstar-img" />
                                    <div className="altstar-container-heading">{ele.title}</div>
                                    <br></br>
                                    <div className="alstar-container-subheading">{ele.subTitle}</div>
                                </div>
                            ))}
                        </Carousel>
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
                    <button className="home-about-btn" onClick={() => { navigate('/about')}}>Learn More</button>
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

            {/* <div className="home-aboutus-wrapper-process">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">See Our Process</button>
                </div>
            </div> */}

            <div className="home-content-recommendations-wrapper">
                <div className="sqs-layout sqs-commitment-roots">
                    <p className="choose-altstar-txt">OUR RECOMMENDATIONS</p>
                    <h2>Altstar's Live Deals</h2>
                    <div>Private real estate delivers consistent, comparable returns to equities <br></br> and REITs over the past two decades, with lower volatility</div>

                    <div className="home-recommendations-desk-root">
                        <div className="recommendations-content-root">
                            {/* <div className="arrow-recommendations-root-left"><img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-left" /></div> */}
                            {recommendationsArr.map((ele, index) => 
                                <div className="recommendations-content-internal-root" key={index}>
                                    <div className="recommendations-property-txt">{ele.name}</div>
                                    <img src={ele.img} alt="img" className="recommendations-img" />

                                    <div className="recommendations-property-container">
                                        <div className="recommendations-property-heading">{ele.heading}</div>
                                        <div className="recommendations-property-subhead">{ele.subHeading}</div>

                                        <div className="property-subcontainer-root">
                                            <div className="recommendations-strategy-container">
                                                <div className="recommendations-strategy-text">{ele.strategy}</div>
                                                <div className="recommendations-strategy-subtxt">{ele.valueStrategy}</div>
                                            </div>

                                            <div className="recommendations-strategy-container">
                                                <div className="recommendations-strategy-text">{ele.fundSize}</div>
                                                <div className="recommendations-strategy-subtxt">{ele.fundValue}</div>
                                            </div>

                                            <div className="recommendations-strategy-container">
                                                <div className="recommendations-strategy-text">{ele.propertyType}</div>
                                                <div className="recommendations-strategy-subtxt">{ele.propertyTypeValue}</div>
                                            </div>

                                            <div className="recommendations-strategy-container">
                                                <div className="recommendations-strategy-text">{ele.minInvestment}</div>
                                                <div className="recommendations-strategy-subtxt">{ele.minInvestmentValue}</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="recommendations-learn-btn">{ele.btnText}</button>
                                </div>
                            )}

                            {/* <div className="arrow-recommendations-root">
                                <img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-right" />
                            </div> */}
                        </div>
                    </div>

                    <div className="recommendations-content-root home-mob-root">
                        <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={4000} showThumbs={false} showIndicators={true} showStatus={false} emulateTouch={false} swipeable={false}>
                            {recommendationsArr.map((ele, index) => 
                                <div className="recommendations-content-internal-root" key={index}>
                                    <div className="recommendations-property-txt">{ele.name}</div>
                                    <img src={ele.img} alt="img" 
                                        // className="recommendations-img" 
                                    />

                                    <div className="recommendations-property-container">
                                        <div className="recommendations-property-heading">{ele.heading}</div>
                                        <div className="recommendations-property-subhead">{ele.subHeading}</div>

                                        <div className="property-subcontainer-root">
                                            <div className="recommendations-strategy-container">
                                                <div className="recommendations-strategy-text">{ele.strategy}</div>
                                                <div className="recommendations-strategy-subtxt">{ele.valueStrategy}</div>
                                            </div>

                                            <div className="recommendations-strategy-container">
                                                <div className="recommendations-strategy-text">{ele.fundSize}</div>
                                                <div className="recommendations-strategy-subtxt">{ele.fundValue}</div>
                                            </div>

                                            <div className="recommendations-strategy-container">
                                                <div className="recommendations-strategy-text">{ele.propertyType}</div>
                                                <div className="recommendations-strategy-subtxt">{ele.propertyTypeValue}</div>
                                            </div>

                                            <div className="recommendations-strategy-container">
                                                <div className="recommendations-strategy-text">{ele.minInvestment}</div>
                                                <div className="recommendations-strategy-subtxt">{ele.minInvestmentValue}</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="recommendations-learn-btn">{ele.btnText}</button>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* <div className="home-content-choose-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <p className="choose-altstar-txt">ALTSTAR RESOURCES</p>
                    <h2>Explore Our Latest Blogs and Insights</h2>
                    
                    <div className="altstar-diff-root home-recommendations-desk-root">
                        <div className="altstar-diff-container">
                            {resourcesArr.map((ele, index) => 
                                <div className="altstar-diff-subcontainer">
                                    <img src={ele.img} alt="img" className="resources-altstar-img" />
                                    <div className="altstar-container-heading">{ele.heading}</div>
                                    <div className="alstar-container-subheading">{ele.subHeading}</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="altstar-diff-root home-mob-root">
                        <div className="altstar-diff-container">
                            <Carousel showArrows={false} autoPlay={false} infiniteLoop={true} interval={3000} showThumbs={false} showIndicators={true} showStatus={false} emulateTouch={false} swipeable={false}>
                                {resourcesArr.map((ele, index) => 
                                    <div className="altstar-diff-subcontainer">
                                        <img src={ele.img} alt="img" className="resources-altstar-img" />
                                        <div className="altstar-container-heading">{ele.heading}</div>
                                        <div className="alstar-container-subheading">{ele.subHeading}</div>
                                    </div>
                                )}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="home-aboutus-wrapper">
                {/* <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">Read Our Blog</button>
                </div> */}
            </div>

            {/* <div className="home-faq-choose-wrapper">
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
            </div> */}

            {/* <div className="home-aboutus-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <button className="home-about-btn">More Questions</button>
                </div>
            </div> */}
        </div>
    </>
)}

export default Home;