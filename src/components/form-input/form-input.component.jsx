import React from "react";
import "./form-input.styles.scss";

const FormInput = ({...props}) => {
  return <>
    <input className="form-input-container" {...props} type='number'/>
    <input className="form-input-container1" {...props} type='range'/>
  </>

};

export default FormInput;
