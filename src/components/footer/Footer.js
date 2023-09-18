import texts from "../../texts";
import "./footer.scss";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span>{texts.title}</span>
      <span> {texts.footer.message} </span>
    </div>
  );
};

export default Footer;
