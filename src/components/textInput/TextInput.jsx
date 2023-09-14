import React from "react";
import "./textInput.scss";

const TextInput = (props) => {
  return (
    <div className="textInput">
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className="my-input"
      />
    </div>
  );
};

export default TextInput;
