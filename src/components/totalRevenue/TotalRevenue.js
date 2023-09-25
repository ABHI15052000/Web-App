import React from "react";
import "./totalRevenue.scss";

import { LuIndianRupee } from "react-icons/lu";
const TotalRevenue = () => {
  return (
    <div className="totalRevenue">
      <div className="title">
        <LuIndianRupee />
        <span className="title-font">TOTAL REVENUE</span>
      </div>
      <span className="total-sum">7,32,98,720</span>
    </div>
  );
};

export default TotalRevenue;
