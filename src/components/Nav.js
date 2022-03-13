import React from "react";
import "./Nav.css";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { GoCalendar } from "react-icons/go";
import { FaWalking, FaAppleAlt } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import { Switch, Route, Link } from "react-router-dom";

const SideBarIcon = ({ icon }) => (
<div>{icon}</div>
);
  
function Nav() {
  return (
      <IconContext.Provider value={{ className: "navbar-icons" }}>
        <ul className="navbar">
          <li className="navbar-item"><CgProfile /></li>
          <div className="divider"></div>
          <li className="navbar-item"><a className="navbar-link" href="B"><FaWalking /></a></li>
          <li className="navbar-item"><a className="navbar-link" href="C"><FaAppleAlt /></a></li>
          <li className="navbar-item"><a className="navbar-link" href="D"><GoCalendar/></a></li>
          <li className="navbar-item"><a className="navbar-link" href="E"><BiCog /></a></li>
        </ul>
      </IconContext.Provider>
  );
}

export default Nav;