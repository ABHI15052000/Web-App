import React from "react";
import "./totalBooking.scss";
import { GrDocumentText } from "react-icons/gr";

const TotalBooking = () => {
  return (
    <div className="totalBooking">
      <div className="title">
        <GrDocumentText />
        <span className="title-font">TOTAL BOOKING</span>
      </div>
      <span className="total-sum">32,98,720</span>
    </div>
  );
};

export default TotalBooking;
