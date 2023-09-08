import React, { useState } from "react";
import "./login.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="mainContainer">
        <div className="inputContainer">
          <div className="innerContainer">
            <div className="welcome">
              <h1>Welcome</h1>
              <span>Login into your account</span>
            </div>
            <div className="email">
              <span>E-mail</span>
              <TextInput type="text" />
            </div>
            <div className="password">
              <span>Password</span>
              <TextInput type="password" />
            </div>
            <span className="forgot-password">forgot password?</span>
            <Button text="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
