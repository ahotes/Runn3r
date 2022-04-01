import React, { useState } from "react";
import "./Navbar.css";

import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GoCalendar } from "react-icons/go";
import { FaWalking, FaAppleAlt } from "react-icons/fa";
import { BiCog } from "react-icons/bi";


function Nav() {
  return (
    <>
      <IconContext.Provider value={{ className: "navbar-icons" }}>
        <ul className="navbar">
          <li className="navbar-item">
            <NavLink to="/profile" className="navbar-link"><CgProfile/></NavLink>
          </li>
          <div className="divider"></div>
          <li className="navbar-item">
            <NavLink to="/exercise" className="navbar-link"><FaWalking/></NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/food" className="navbar-link"><FaAppleAlt/></NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/planner" className="navbar-link"><GoCalendar/></NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/settings" className="navbar-link"><BiCog/></NavLink>
          </li>
        </ul>
      </IconContext.Provider>
    </>
  );
}

export default Nav;
