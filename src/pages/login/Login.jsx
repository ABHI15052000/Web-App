import React, { useState } from "react";
import "./login.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.length === 0 || !email.match(emailPattern)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must contain at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (!emailError && !passwordError) {
      console.log("Successful");
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="login">
      <div className="mainContainer">
        <form onSubmit={() => handleSubmit}>
          <div className="innerContainer">
            <div className="welcome">
              <h1>Welcome</h1>
              <span>Login into your account</span>
            </div>
            <div className="email">
              <span>E-mail</span>
              <TextInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              <span className="error">{emailError}</span>
            </div>
            <div className="password">
              <span>Password</span>
              <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              <span className="error">{passwordError}</span>
            </div>
            <span className="forgot-password">Forgot password?</span>
            <Button text="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
