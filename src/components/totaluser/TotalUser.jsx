import React from "react";
import "./totaluser.scss";
import { GoPerson } from "react-icons/go";

const TotalUser = () => {
  return (
    <div className="totalUser">
      <div className="title">
        <GoPerson />
        <span className="title-font">TOTAL USERS</span>
      </div>
      <span className="total-sum">32,98,720</span>
    </div>
  );
};

export default TotalUser;
