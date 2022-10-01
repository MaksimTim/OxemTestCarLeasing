import React from "react";
import './form-input-range.styles.scss'

const FormInputRange = ({...props}) => {
  return <input className="form-input-range" {...props} type="range" />;
};

export default FormInputRange;