import React from "react";
import "./totalParking.scss";
import { LuParkingSquare } from "react-icons/lu";

const TotalParking = () => {
  return (
    <div className="totalParking">
      <div className="title">
        <LuParkingSquare />
        <span className="title-font">TOTAL PARKING</span>
      </div>
      <span className="total-sum">2,08,680</span>
    </div>
  );
};

export default TotalParking;
