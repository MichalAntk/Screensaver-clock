import React from "react";
import "./CustomButton.css";

const CustomButton = ({ onClick, children, variant = "primary", size = "medium"}) => {
    return (
        <button className = {`custom-button ${variant} ${size}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default CustomButton;