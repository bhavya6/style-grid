import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`custom-button ${isGoogle ? "google-sign-in" : ""}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
