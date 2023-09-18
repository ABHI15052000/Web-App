import React from "react";
import "./home.scss";
import texts from "../../texts";
const Home = () => {
  return (
    <div className="home">
      <h1>{texts.home.heading}</h1>
    </div>
  );
};

export default Home;
