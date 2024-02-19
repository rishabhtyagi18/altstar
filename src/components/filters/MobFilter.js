import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './MobFilter.css';

const MobFilter = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Block background scroll when the pop-up is opened
        document.body.style.overflow = 'hidden';
    
        // Restore background scroll when the pop-up is closed
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, []);

return (
    <>  
       <div className="filters-overlay"/>
      <div className={`filters-box`}>
        <div className="mainContent">
            <div className="filter-inner-subroot-container">
                <div className="filter-heading">Investment Type</div>
                <div className="filter-inner-section-display">
                    {props.investmentType.map((ele, index) =>  
                        <div className="filter-checkbox-root">
                            <input
                                type="checkbox" 
                                // name="Investment Type"
                                id={ele.id}
                                name={ele.name}
                                checked={props.filterState.investment_type.includes(ele.name)}
                                onChange={() => props.handleIndividualCheckboxChange('investment_type', ele.name)}
                                // aria-checked="true" 
                                className="checkbox-input-type" 
                            />
                            <div className="filter-subType-txt">{ele.name}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="filter-inner-subroot-container">
                <div className="filter-heading">Minimum Investment</div>
                <div className="filter-inner-section-display">
                    {props.minInvestment.map((ele, index) =>  
                        <div className="filter-checkbox-root">
                            <input
                                type="checkbox" 
                                // name="Investment Type"
                                id={ele.id}
                                name={ele.name}
                                checked={props.filterState.min_investment.includes(ele.name)}
                                onChange={() => props.handleIndividualCheckboxChange('min_investment', ele.name)}
                                // aria-checked="true" 
                                className="checkbox-input-type" 
                            />
                            <div className="filter-subType-txt">${ele.name}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="filter-inner-subroot-container">
                <div className="filter-heading">Property Type</div>
                <div className="filter-inner-section-display">
                    {props.propertyType.map((ele, index) =>  
                        <div className="filter-checkbox-root">
                            <input
                                type="checkbox" 
                                // name="Investment Type"
                                id={ele.id}
                                name={ele.name}
                                checked={props.filterState.property_type.includes(ele.name)}
                                onChange={() => props.handleIndividualCheckboxChange('property_type', ele.name)}
                                // aria-checked="true" 
                                className="checkbox-input-type" 
                            />
                            <div className="filter-subType-txt">{ele.name}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="filter-inner-subroot-container">
                <div className="filter-heading">Region</div>
                <div className="filter-inner-section-display">
                    {props.regionArr.map((ele, index) =>  
                        <div className="filter-checkbox-root">
                            <input
                                type="checkbox" 
                                // name="Investment Type"
                                id={ele.id}
                                name={ele.name}
                                checked={props.filterState.region.includes(ele.name)}
                                onChange={() => props.handleIndividualCheckboxChange('region', ele.name)}
                                // aria-checked="true" 
                                className="checkbox-input-type" 
                            />
                            <div className="filter-subType-txt">{ele.name}</div>
                        </div>
                    )}
                </div>
            </div>

            <div className="close-filter-section" onClick={props.hide}>
                <button type="button" className="close-filter-btn">Close filters</button>
            </div>

        </div>
      </div>
    </>
)}

export default MobFilter;
