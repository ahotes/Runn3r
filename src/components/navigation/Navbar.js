import React, { useState } from "react";
import NavbarData from "./NavbarData";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { GoCalendar } from "react-icons/go";
import { FaWalking, FaAppleAlt } from "react-icons/fa";
import { BiCog } from "react-icons/bi";

function Navbar() {
  return (
    <nav>
      <IconContext.Provider value={{ className: "navBarIcons" }}>
        <ul className="navBar">
          <li className="navBarItem">
            <NavLink to="/profile" className="navBarLink"><CgProfile/></NavLink>
          </li>
          <div className="navDivider"></div>
          <li className="navBarItem">
            <NavLink to="/exercise" className="navBarLink"><FaWalking/></NavLink>
          </li>
          <li className="navBarItem">
            <NavLink to="/food" className="navBarLink"><FaAppleAlt/></NavLink>
          </li>
          <li className="navBarItem">
            <NavLink to="/planner" className="navBarLink"><GoCalendar/></NavLink>
          </li>
          <li className="navBarItem">
            <NavLink to="/settings" className="navBarLink"><BiCog/></NavLink>
          </li>
        </ul>
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
