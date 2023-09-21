import React from "react";
import "./forgetPassword.scss";
import Button from "../../components/button/Button";
import texts from "../../texts";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const ForgetPassword = () => {
  return (
    <div className="change-password">
      <div className="mainContainer">
        <form>
          <div className="innerContainer">
            <div className="welcome">
              <h1>{texts.changePassword.heading}</h1>
              <span>{texts.changePassword.subHeading}</span>
            </div>
            <div className="password">
              <span>{texts.changePassword.newPassoword}</span>
              <PasswordInput />
            </div>
            <div className="password">
              <span>{texts.changePassword.confirmPassword}</span>
              <PasswordInput />
            </div>
            <Button text="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
