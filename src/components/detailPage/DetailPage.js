import React, { useEffect, useState } from "react";
import './DetailPage.css';

const DetailPage = (props) => {

return (
    <>  
        <div className="detailPage-root">
           
            <div className="detailPage-section-background aboutUs-desk-root">
                <img src="../assets/Altstar-Banner.png" alt="banner" />
                <div className="detailPage-story-content detailPage-text-first">
                    <p className="detailPage-investment-text">Empowering Investment Journeys</p>
                    <p className="detailPage-story-text">Every Size, Every Goal.</p>
                    <button className="detailPage-learn-btn">LEARN MORE</button>
                </div>
            </div>

            <div className="detailPage-top-content-wrapper">
                <div className="investment-main-root">
                    <div className="detailpage-html-section">
                        <img src="../assets/overview.png" alt="overview" className="overview-img" />
                        <div className="overview-main-text">Overview</div>
                    </div>

                    <div className="detailpage-html-section">
                        <img src="../assets/models.png" alt="Models" className="overview-img" />
                        <div className="overview-main-text">Models</div>
                    </div>

                    <div className="detailpage-html-section">
                        <img src="../assets/price.png" alt="Pricing" className="overview-img" />
                        <div className="overview-main-text">Pricing</div>
                    </div>

                    <div className="detailpage-html-section">
                        <img src="../assets/about.png" alt="About" className="overview-img" />
                        <div className="overview-main-text">About</div>
                    </div>
                </div>
            </div>

            <div className="detailPage-content-wrapper">
                <div className="appreciation-main-root">
                    <div className="appreciation-details-container">
                        <img src="../assets/sean-pollock.png" alt="banner" className="appreciation-details-img" />
                        <div className="appreciation-details-subcontainer">
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                        </div>
                    </div>

                    <div className="sqs-layout sqs-art-desk-gallery">
                        <h2>Prestige Tech Platina</h2>
                        <p className="sqsrte-large-heading">Outer Ring Road, Banglore</p>
                        {/* <br></br> */}
                        <p className="sqsrte-large">Over the past 20 years, private real estate’s risk adjusted returns have been comparable to both equitiews and public REITs with the benefits.</p>

                        <div className="appreciation-investment-root">
                            <div className="appreciation-investment-mainroot">
                                <div className="appreciation-investment-container">
                                    <div className="appreciation-investment-sub-container">
                                        <div className="appreciation-invest-img-container"><img src="../assets/yield.png" alt="yield" className="appreciation-invest-img" /></div>
                                        <div className="appreciation-invest-rental-text">10.00%</div>
                                        <span className="appreciation-invest-rental-sub-text">High Rental Yield</span>
                                    </div>

                                    <div className="appreciation-investment-sub-container">
                                        <div className="appreciation-invest-img-container"><img src="../assets/return-of-investment.png" alt="return-of-investment" className="appreciation-invest-img" /></div>
                                        <div className="appreciation-invest-rental-text">17.50%</div>
                                        <span className="appreciation-invest-rental-sub-text">High Return</span>
                                    </div>

                                    <div className="appreciation-investment-sub-container">
                                        <div className="appreciation-invest-img-container"><img src="../assets/rupee.png" alt="rupee" className="appreciation-invest-img" /></div>
                                        <div className="appreciation-invest-rental-text">10,600psf</div>
                                        <span className="appreciation-invest-rental-sub-text">Attractive Price</span>
                                    </div>

                                    <div className="appreciation-investment-sub-container">
                                        <div className="appreciation-invest-img-container"><img src="../assets/location.png" alt="location" className="appreciation-invest-img" /></div>
                                        <div className="appreciation-invest-rental-text">Outer Ring Road</div>
                                        <span className="appreciation-invest-rental-sub-text">Location</span>
                                    </div>
                                </div>

                                <div className="appreciation-unit-purchase-root">
                                    <div className="appreciation-unit-purchase-text">Unit Purchased</div>
                                    <div className="appreciation-unit-qunatity-root">
                                        <div className="appreciation-unit-qunatity-text">-</div>
                                        <div className="appreciation-unit-qunatity-text">1</div>
                                        <div className="appreciation-unit-qunatity-text">+</div>
                                    </div>
                                </div>
                            </div>

                            <button className="appreciation-investment-now-btn">Invest Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detailPage-content-wrapper">
                <div className="capital-appreciation-main-root">
                    <table className="capital-appreciation-table">
                        <tr>
                            <th></th>
                            <th>Year 0</th>
                            <th>Year 1</th>
                            <th>Year 2</th>
                            <th>Year 3</th>
                            <th>Year 4</th>
                            <th>Year 5</th>
                        </tr>
                        <tr>
                            <td className="appreciation-table-strong">Investment Value</td>
                            <td>(10,00,000)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="appreciation-table-strong">Yields</td>
                            <td></td>
                            <td>80,000</td>
                            <td>80,000</td>
                            <td>80,000</td>
                            <td>80,000</td>
                            <td>80,000</td>
                        </tr>
                        <tr>
                            <td className="appreciation-table-strong">Additional Yields</td>
                            <td>10,000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="appreciation-table-strong">Liquidated Value</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>12,76,281</td>
                        </tr>
                        <tr>
                            <td className="appreciation-table-strong">Total Cash Flow</td>
                            <td>(10,00,000)</td>
                            <td>80,000</td>
                            <td>80,000</td>
                            <td>80,000</td>
                            <td>80,000</td>
                            <td>13,56,281</td>
                        </tr>
                        <tr>
                            <td className="appreciation-table-strong">Net IRR</td>
                            <td>13%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className="invest-now-btn-wrapper">
                <button className="invest-now-btn-root">Invest Now</button>
            </div>
            
            <div className="detailPage-content-wrapper">
                <div className="detailPage-attachement-list-root">
                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Total Issue:</div>
                        <div className="detailPage-attachement-list-subtext">10,00,00,000</div>
                    </div>

                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Type:</div>
                        <div className="detailPage-attachement-list-subtext">Invoice Discounting</div>
                    </div>
                    
                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Minimum Investment:</div>
                        <div className="detailPage-attachement-list-subtext">10,00,000</div>
                    </div>

                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Vendor:</div>
                        <div className="detailPage-attachement-list-subtext">JSW</div>
                    </div>

                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Pre Tax IRR:</div>
                        <div className="detailPage-attachement-list-subtext">17%</div>
                    </div>
                </div>

                <div className="details-group">Include the details of the group</div>
            </div>

            <div className="download-attachement-content-wrapper">
                <button className="download-attachement-root">
                    <img src="../assets/download.png" alt="download" className="download-img" />
                    Attachments
                </button>
            </div>

        </div>
    </>
)}

export default DetailPage;