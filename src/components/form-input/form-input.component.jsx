import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input onChange={handleChange} className="form-input" {...otherProps} />
    <label
      className={`${otherProps.value.length ? "shrink" : ""}form-input-label`}
    >
      {label}
    </label>
  </div>
);

export default FormInput;
