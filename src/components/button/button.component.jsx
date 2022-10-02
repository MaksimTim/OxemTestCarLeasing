import React from "react";
import "./button.styles.scss";

const Button = ({ ...props }) => {
  return (
    <button className="button-container" {...props}>
      <h2>Оставить заявку</h2>
    </button>
  );
};

export default Button;