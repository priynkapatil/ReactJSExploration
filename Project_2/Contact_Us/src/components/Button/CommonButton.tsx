import React from 'react';
import './CommonButton.css';

const CommonButton = (props) => {
  const { logo, label, width } = props; // Correctly destructure props

  return (
    <button
      className="btnSty"
      style={width ? { width: width } : undefined} // Conditionally apply width
    >
      <span className="icons">{logo}</span>
      <p>{label}</p>
    </button>
  );
};

export default CommonButton;
