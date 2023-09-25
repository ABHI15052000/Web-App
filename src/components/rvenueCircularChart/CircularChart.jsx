import React from "react";
import "./circularChart.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { data01 } from "../../data";
import { data02 } from "../../data";

const CircularChart = () => {
  return (
    <div className="circularChart">
      <div className="total-header">
        <span className="heading">TOTAL REVENUE</span>
        <BsThreeDotsVertical />
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart width={200} height={200}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="footer-text">
        <span className="text-1">Total Income made today</span>
        <span className="text-2">$1.2L</span>
      </div>
    </div>
  );
};

export default CircularChart;
