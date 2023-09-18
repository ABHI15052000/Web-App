import React from "react";
import "./changePassword.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";
import texts from "../../texts";

const ChangePassword = () => {
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
              <span>{texts.changePassword.oldPassword}</span>
              <TextInput type="password" />
            </div>
            <div className="password">
              <span>{texts.changePassword.newPassoword}</span>
              <TextInput type="password" />
            </div>
            <div className="password">
              <span>{texts.changePassword.confirmPassword}</span>
              <TextInput type="password" />
            </div>

            <Button text="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
