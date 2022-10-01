import React from "react";
import "./form-input.styles.scss";

const FormInput = ({...props}) => {
  return <>
    <input className="form-input-container" {...props} type='number'/>
  </>

};

export default FormInput;
