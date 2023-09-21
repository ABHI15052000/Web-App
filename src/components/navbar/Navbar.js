import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCog,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import texts from "../../texts";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="ham">
        <IoReorderThreeOutline />
      </div>
      <div className="logo">
        <img src="logo.svg" alt="Logo" />
        <span>{texts.title}</span>
      </div>
      <div className="nav-links">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faInfoCircle} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faCog} />
        <div className="nav-link-user">
          <FontAwesomeIcon icon={faUser} />
          <span>{texts.userName}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
