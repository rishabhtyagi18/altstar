import React, { useEffect, useState } from "react";
import './DeskFilter.css';
import { useNavigate, useLocation } from 'react-router-dom';

const DeskFilter = (props) => {
    const location = useLocation();
    const navigate = useNavigate();


return (
    <>  
        <div className="filter-root-container">
            <div className="filter-inner-subcontainer">
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
            </div>
        </div>
    </>
)}

export default DeskFilter;