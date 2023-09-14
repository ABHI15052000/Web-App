import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <AiFillHome />
        <span>Home</span>
      </Link>
      <Link to="/products">
        <FaBeer />
        <span>Products</span>
      </Link>
      <Link to="/users">
        <FaUser />
        <span>Users</span>
      </Link>
      <Link to="/users">
        <FaUser />
        <span>OPtions</span>
      </Link>
      <Link to="/users">
        <FaUser />
        <span>Users</span>
      </Link>
    </div>
  );
};

export default Menu;
