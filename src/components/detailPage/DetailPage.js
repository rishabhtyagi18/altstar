import React, { useEffect, useState } from "react";
import './DetailPage.css';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

const DetailPage = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { propertyInfo } = location.state || {};
    const { mainData } = location.state || {};
    const [currentImg, setCurrentImg] = useState("");

    // console.log("propertyInfo ========= ",propertyInfo);

    useEffect(() => {
        // Redirect to / if propertyInfo doesn't exist
        if (!propertyInfo) {
            navigate('/');
        }
    }, [propertyInfo, navigate]);
    
    const [count, setCount] = useState(1);

    const IncrementUnit = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    }

    const DecrementUnit =  () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const borrowerJson = {
        graphType: "donut",
        title: "Delinquent Loans",
        series: [44, 55, 13, 33, 15],
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        color: ["#9795ca", "#5c5a7f", "#5c5a7f", "#625f98", "#bbbadb"]
      }

    const donutChart = {
        // series: [44, 55, 13, 33, 23],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          labels: borrowerJson.labels,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                show: true
              },
            }
          }],
          plotOptions: {
            pie: {
              startAngle: 0,
              endAngle: 360,
              expandOnClick: true,
              offsetX: 0,
              offsetY: 0,
              customScale: 1,
              dataLabels: {
                  offset: 0,
                  minAngleToShowLabel: 10
              }, 
              donut: {
                size: '90%',
            }}},
          legend: {
            show: true
          },
          colors: borrowerJson.color,
        }
    };

return (
    <>  
        <div className="detailPage-root">
           
            <div className="detailPage-section-background aboutUs-desk-root">
                <img src="../assets/Altstar-Banner.png" alt="banner" />
                <div className="detailPage-story-content detailPage-text-first">
                    <p className="detailPage-story-text">Smart investing in Real estate</p>
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
                        <img src={currentImg ? currentImg : mainData.main_image ? mainData.main_image : ""} alt="banner" className="appreciation-details-img" />
                        <div className="appreciation-details-subcontainer desk-section-img-display">
                            {
                                mainData && mainData.images && mainData.images.length > 0 && mainData.images.map((img, index) =>{
                                    return(
                                        <img key={index} src={img} alt="banner" className="appreciation-details-small-img" onClick={() => {setCurrentImg(img)}}/>
                                    )
                                })
                            }
                            {/* <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" />
                            <img src="../assets/sean-pollockunsplash.png" alt="banner" className="appreciation-details-small-img" /> */}
                        </div>
                    </div>

                    <div className="sqs-layout sqs-art-desk-gallery">
                        <h2>{propertyInfo?.name}</h2>
                        <p className="sqsrte-large-heading">{propertyInfo?.location}</p>
                        {/* <br></br> */}
                        <p className="sqsrte-large">{propertyInfo?.description}</p>

                        <div className="appreciation-investment-root">
                            <div className="appreciation-investment-mainroot">
                                <div className="appreciation-investment-container">
                                    {propertyInfo?.return_desc.map((ele, i) => (
                                        <div className="appreciation-investment-sub-container" key={ele.type}>
                                            <div className="appreciation-invest-img-container"><img src={ele.icon} alt="yield" className="appreciation-invest-img" /></div>
                                            <div className="appreciation-invest-rental-text">{ele.value}</div>
                                            <span className="appreciation-invest-rental-sub-text">{ele.text}</span>
                                        </div>
                                     ))}
                                </div>

                                <div className="appreciation-unit-purchase-root">
                                    <div className="appreciation-unit-purchase-text">Unit Purchased</div>
                                    <div className="appreciation-unit-qunatity-root">
                                        <div className="appreciation-unit-qunatity-text" onClick={() => DecrementUnit()}>-</div>
                                        <div className="appreciation-unit-qunatity-text">{count}</div>
                                        <div className="appreciation-unit-qunatity-text" onClick={() => IncrementUnit()}>+</div>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => navigate('/verification', {state : {count}})} className="appreciation-investment-now-btn">Invest Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detailPage-content-wrapper">
                <div className="capital-appreciation-main-root">
                    <table className="capital-appreciation-table">
                        <tr>
                            <th></th>
                            <th>Investment Value</th>
                            <th>Yields</th>
                            <th>Additional Yields</th>
                            <th>Liquidated Value</th>
                            <th>Total Cash Flow</th>
                            <th>Net IRR</th>
                        </tr>
                        {propertyInfo?.investment_return.map((ele, index) => {
                            const newKey = ['Investment Value', 'Yields', 'Additional Yields', 'Liquidated Value', 'Total Cash Flow', 'Net IRR'];
                            const item  = newKey[index];
                            return (
                            <tr key={index}>
                                <td className="appreciation-table-strong">{`Year ${index + 1}`}</td>
                                <td>{ele.investment_value}</td>
                                <td>{ele.yield}</td>
                                <td>{ele.additional_yield}</td>
                                <td>{ele.liquidated_value}</td>
                                <td>{ele.total_cash_flow}</td>
                                <td>{ele.net_irr}</td>
                            </tr>
                        )})}
                    </table>
                </div>
            </div>

            <div className="detailPage-content-wrapper">
                <h2 className="chart-heading">Prestige Tech Platina</h2>
                <div className="donut-chart-root">
                    <ReactApexChart options={donutChart.options} series={borrowerJson.series} type={borrowerJson.graphType} height={300} />
                </div>
            </div>

            <div className="detailPage-content-wrapper">
                <h2 className="chart-heading">Location Highlights</h2>
                <div>
                    <p>Prestige Tech Platina is a LEED Platinum building on the main Outer Ring Road, the largest office corridor in Bangalore.</p>
                    <img src="../assets/location_ss.png" className="graph-detail-img" alt="graph" />
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
                        <div className="detailPage-attachement-list-subtext">{propertyInfo?.current_report?.total_issue}</div>
                    </div>

                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Type:</div>
                        <div className="detailPage-attachement-list-subtext">{propertyInfo?.current_report?.type}</div>
                    </div>
                    
                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Minimum Investment:</div>
                        <div className="detailPage-attachement-list-subtext">{propertyInfo?.current_report?.min_investment}</div>
                    </div>

                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Vendor:</div>
                        <div className="detailPage-attachement-list-subtext">{propertyInfo?.current_report?.vendor}</div>
                    </div>

                    <div className="detailPage-attachement-list-box">
                        <img src="../assets/vector.png" alt="vector" className="attachement-vector-img" />
                        <div className="detailPage-attachement-list-strong">Pre Tax IRR:</div>
                        <div className="detailPage-attachement-list-subtext">{propertyInfo?.current_report?.pre_tax_irr}</div>
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