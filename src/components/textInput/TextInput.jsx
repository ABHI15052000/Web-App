import React from "react";
import "./textInput.scss";

const TextInput = (props) => {
  return (
    <div className="textInput">
      <input
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className="my-input"
      />
    </div>
  );
};

export default TextInput;
