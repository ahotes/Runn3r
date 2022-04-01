import React from "react";

import { CgProfile } from "react-icons/cg";
import { GoCalendar } from "react-icons/go";
import { FaWalking, FaAppleAlt } from "react-icons/fa";
import { BiCog } from "react-icons/bi";

export const NavbarData = [
    {
        title: "Profile",
        path: "/profile",
        icon: <CgProfile/>,
        className: "navbar-link"
    },
    {
        title: "Exercise",
        path: "/exercise",
        icon: <FaWalking/>,
        className: "navbar-link"
    },
    {
        title: "Food",
        path: "/food",
        icon: <FaAppleAlt/>,
        className: "navbar-link"
    },
    {
        title: "Calendar",
        path: "/calendar",
        icon: <GoCalendar/>,
        className: "navbar-link"
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <BiCog/>,
        className: "navbar-link"
    }
]