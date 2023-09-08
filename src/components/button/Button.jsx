import React from "react";
import "./button.scss";
const Button = (props) => {
  return (
    <div className="btnContainer">
      <button className="button">{props.text}</button>
    </div>
  );
};

export default Button;
