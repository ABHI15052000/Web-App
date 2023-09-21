import React from "react";
import "./home.scss";
import texts from "../../texts";
const Home = () => {
  return (
    <div className="home">
      <h1>{texts.home.heading}</h1>
      <div className="wrapper">
        <div className="box1 box">1</div>
        <div className="box2 box">2</div>
        <div className="box3 box">3</div>
        <div className="box4 box">4</div>
        <div className="box5 box">5</div>
        <div className="box6 box">6</div>
        <div className="box7 box">7</div>
      </div>
    </div>
  );
};

export default Home;
