import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";

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
        <span>Options</span>
      </Link>
      <Link to="/users">
        <FaUser />
        <span>Users</span>
      </Link>
      <Link to="/changepassword">
        <MdPassword />
        <span>Change Password</span>
      </Link>
    </div>
  );
};

export default Menu;
