import React, { useEffect, useState } from "react";
import './AboutUs.css';
import { useNavigate, useLocation } from 'react-router-dom';
import DeskFilter from '../filters/DeskFilter';
import MobFilter from '../filters/MobFilter';

const AboutUs = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedFilter, setSelectedFilter] = useState([]);
    const [filters, setFilters] = useState(false);
    const [filterState, setFilterState] = useState(() => {
        const queryParams = new URLSearchParams(location.search);
        const filters = {
            investment_type: queryParams.getAll('investment_type'),
            min_investment: queryParams.getAll('min_investment'),
            property_type: queryParams.getAll('property_type'),
            region: queryParams.getAll('region'),
            medium: queryParams.getAll('medium'),
        };
        const selected = Object.keys(filters).filter((key) => filters[key].length > 0);
        setSelectedFilter(selected);
        return filters;
    });

    useEffect(() => {
        // Update selectedFilters based on filterState
        const newlySelectedFilters = Object.keys(filterState).filter(
            (key) => filterState[key].length > 0
        );
        setSelectedFilter(newlySelectedFilters);
    }, [filterState]);

    const handleIndividualCheckboxChange = (filterType, filterValue) => {
        setFilterState((prevState) => {
            const updatedFilters = { ...prevState };
            const index = updatedFilters[filterType].indexOf(filterValue);

            if (index === -1) {
                updatedFilters[filterType] = [...updatedFilters[filterType], filterValue];
            } else {
                updatedFilters[filterType] = [
                    ...updatedFilters[filterType].slice(0, index),
                    ...updatedFilters[filterType].slice(index + 1),
                ];
            }

            updateURL(updatedFilters);

            return updatedFilters;
        });
    };

    const updateURL = (filters) => {
        const queryParams = Object.entries(filters)
            .filter(([_, values]) => values.length > 0)
            .map(([filterType, values]) => `${filterType}=${values.join(',')}`)
            .join('&');

        navigate({
            pathname: location.pathname,
            search: queryParams ? `?${queryParams}` : '',
        });
    };

    const clearAllFilters = () => {
        setFilterState({
            investment_type: [],
            min_investment: [],
            property_type: [],
            region: [],
            medium: [],
        });

        // Update the URL without query parameters
        updateURL({});
        // Clear the selected filter type
        setSelectedFilter([]);
    };

    const investmentType = [
        {
            name: "Funds",
            id: "funds"
        },
        {
            name: "Primary",
            id: "primary"
        },
        ,
        {
            name: "Secondary Market",
            id: "secondarymarket"
        }
    ]

    const minInvestment = [
        {
            name: "10k",
            id: "10k"
        },
        {
            name: "25k",
            id: "25k"
        },
        {
            name: "50k",
            id: "50k"
        },
        {
            name: "75k",
            id: "75k"
        }
    ]

    const propertyType = [
        {
            name: "Multifamily",
            id: "multifamily"
        },
        {
            name: "Office",
            id: "office"
        },
        {
            name: "Industrial",
            id: "industrial"
        },
        {
            name: "Hotel",
            id: "hotel"
        },
        {
            name: "Mixed Use",
            id: "mixeduse"
        },
        {
            name: "Various",
            id: "various"
        }
    ]

    const regionArr = [
        {
            name: "West",
            id: "west"
        },
        {
            name: "Central",
            id: "central"
        },
        {
            name: "South",
            id: "south"
        },
        {
            name: "Midwest",
            id: "midwest"
        },
        {
            name: "East",
            id: "east"
        }
    ]

return (
    <>  
        {filters &&
            <MobFilter 
                hide={() => {
                    setFilters(false);
                    const z = document.getElementsByTagName('body');
                    z[0].style.overflow = 'scroll';
                }}
                investmentType={investmentType}
                minInvestment={minInvestment}
                propertyType={propertyType}
                regionArr={regionArr}
                filterState={filterState}
                handleIndividualCheckboxChange={handleIndividualCheckboxChange}
            />
        }
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

            <div className="detail-filter-list-container">
                <div className="desk-section-display">
                    <DeskFilter 
                        investmentType={investmentType}
                        minInvestment={minInvestment}
                        propertyType={propertyType}
                        regionArr={regionArr}
                        filterState={filterState}
                        handleIndividualCheckboxChange={handleIndividualCheckboxChange}
                    />
                </div>

                <div>
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
                                    <img src="../assets/mask_group.png" alt="img" className="recommendations-img" />

                                    <div className="recommendations-property-container">
                                        <div className="recommendations-property-txt">PROPERTY ONE</div>
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
                                        <button onClick={() => navigate('/detail')} className="recommendations-learn-btn">Learn More</button>
                                    </div>
                                </div>

                                <div className="recommendations-content-internal-root">
                                    <img src="../assets/mask_group.png" alt="img" className="recommendations-img" />

                                    <div className="recommendations-property-container">
                                        <div className="recommendations-property-txt">PROPERTY TWO</div>
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
                                        <button onClick={() => navigate('/detail')} className="recommendations-learn-btn">Learn More</button>
                                    </div>
                                </div>

                                {/* <div className="arrow-recommendations-root">
                                    <img src="../assets/vector.png" alt="arrow" className="arrow-recommendations-right" />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="view-filter-section mob-section-display" onClick={() => setFilters(true)}>
                        <button type="button" className="view-filter-btn">View filters</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default AboutUs;