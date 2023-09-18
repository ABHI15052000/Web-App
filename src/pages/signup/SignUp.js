import React from "react";
import "./signup.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";
import texts from "../../texts";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="mainContainer">
        <form>
          <div className="innerContainer">
            <div className="welcome">
              <h1>{texts.login.heading}</h1>
              <span>{texts.signUp.subHeading}</span>
            </div>
            <div className="name">
              <span>{texts.name}</span>
              <TextInput type="text" />
            </div>

            <div className="email">
              <span>{texts.email}</span>
              <TextInput type="text" />
            </div>
            <div className="password">
              <span>{texts.password}</span>
              <TextInput type="password" />
            </div>
            <div className="password">
              <span>{texts.signUp.confirmPassword}</span>
              <TextInput type="password" />
            </div>

            <Link to="/login" className="forgot-password">
              {texts.signUp.message}
            </Link>
            <Button text="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
