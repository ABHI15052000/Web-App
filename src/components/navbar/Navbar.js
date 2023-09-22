import React, { useState } from "react";
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
import Menu from "../menu/Menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <div className="navbar">
      <div className="ham" onClick={() => toggleMenu()}>
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
      {openMenu && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Menu />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
