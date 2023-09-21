import React from "react";
import "./login.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";
import texts from "../../texts";
import { Link } from "react-router-dom";
import stylesData from "./styles.json";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const Login = () => {
  const containerStyle = {
    backgroundImage: `url(${stylesData.styles.backgroundImg})`,
  };

  return (
    <div className="login">
      <div className="mainContainer" style={containerStyle}>
        <form>
          <div className="innerContainer">
            <div className="welcome">
              <h1>{texts.login.heading}</h1>
              <span>{texts.login.subHeading}</span>
            </div>
            <div className="email">
              <span>{texts.email}</span>
              <TextInput type="text" />
            </div>
            <div className="password">
              <span>{texts.password}</span>
              <PasswordInput />
            </div>
            <Link to="/forgetpassword" className="forgot-password">
              {texts.login.forgetPassword}
            </Link>
            <Link to="/signup" className="forgot-password">
              {texts.login.message}
            </Link>
            <Link to="/">
              <Button text="Submit" type="submit" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
