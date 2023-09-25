import React from "react";
import "./home.scss";
import texts from "../../texts";
import TotalUser from "../../components/totaluser/TotalUser";
import TotalParking from "../../components/totalParking/TotalParking";
import TotalRevenue from "../../components/totalRevenue/TotalRevenue";
import TotalBooking from "../../components/totalBooking/TotalBooking";
import CircularChart from "../../components/rvenueCircularChart/CircularChart";
import RevenueAnalytics from "../../components/revenueAnalytics/RevenueAnalytics";
import ParkingList from "../../components/parkingsList/ParkingList";
import UsersList from "../../components/usersList/UsersList";
const Home = () => {
  return (
    <div className="home">
      <h1>{texts.home.heading}</h1>
      <div className="wrapper">
        <div className="box1 box">
          <TotalUser />
        </div>
        <div className="box2 box">
          <TotalParking />
        </div>
        <div className="box3 box">
          <TotalRevenue />
        </div>
        <div className="box4 box">
          <TotalBooking />
        </div>
        <div className="box5 box">
          <CircularChart />
        </div>
        <div className="box6 box">
          <RevenueAnalytics />
        </div>
        <div className="box7 box">
          <ParkingList />
        </div>
        <div className="box8 box">
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default Home;
