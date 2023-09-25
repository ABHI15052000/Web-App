import React from "react";
import "./revenueAnalytics.scss";
import { barData } from "../../data";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip } from "@mui/material";

const RevenueAnalytics = () => {
  return (
    <div className="revenueAnalytics">
      <div className="heading">
        <span className="heading-text">REVENUE ANALITICS</span>
        <BsThreeDotsVertical />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={barData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueAnalytics;
