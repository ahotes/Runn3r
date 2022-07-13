import React, { useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { GoCalendar } from "react-icons/go";
import { FaWalking, FaAppleAlt } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import Tippy, { tippy } from '@tippyjs/react';

function Navbar() {
  const genTooltip = (header, content) => {
    return <div><h4>{header}</h4><p className="tooltipContent">{content}</p></div>;
  };

  return (
    <nav>
      <IconContext.Provider value={{ className: "navBarIcons" }}>
        <ul className="navBar">
          <li className="navBarItem">
            <Tippy content={genTooltip("Profile", "All your configured info at a glance")} placement="right-start">
              <NavLink to="/profile" className="navBarLink">
                <CgProfile/>
              </NavLink>
            </Tippy>
          </li>
          <div className="navDivider"></div>
          <li className="navBarItem" id="item1">
            <Tippy content={genTooltip("Exercise", "Organize exercise plans")} placement="right-start"><NavLink to="/exercise" className="navBarLink"><FaWalking/></NavLink></Tippy>
          </li>
          <li className="navBarItem" id="item2">
            <Tippy content={genTooltip("Food", "Organize food plans & store recipes")} placement="right-start"><NavLink to="/food" className="navBarLink"><FaAppleAlt/></NavLink></Tippy>
          </li>
          <li className="navBarItem" id="item3">
            <Tippy content={genTooltip("Calendar", "View exercise/food plans")} placement="right-start"><NavLink to="/planner" className="navBarLink"><GoCalendar/></NavLink></Tippy>
          </li>
          <li className="navBarItem" id="item4">
            <Tippy content={genTooltip("Settings", "Customize app settings")} placement="right-start"><NavLink to="/settings" className="navBarLink"><BiCog/></NavLink></Tippy>
          </li>
        </ul>
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;
