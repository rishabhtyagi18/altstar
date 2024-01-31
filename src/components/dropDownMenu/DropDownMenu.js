import React from 'react';
import './DropDownMenu.css';

const DropDownMenu = (props) => {

    return (
    <>
      <div className="container">
        <div className="item" style={{ ...props.style }}>
          {props.parentString}
        </div>
        <div className="dropDown">
          <div className="triangle" />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
