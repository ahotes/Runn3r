import React from "react";

import { CgProfile } from "react-icons/cg";
import { GoCalendar } from "react-icons/go";
import { FaWalking, FaAppleAlt } from "react-icons/fa";
import { BiCog } from "react-icons/bi";

const NavbarData = [
    {
        title: "Profile",
        path: "/profile",
        icon: <CgProfile/>,
        className: "navBarLink"
    },
    {
        title: "",
        path: "",
        icon: null,
        className: "navDivider"
    },
    {
        title: "Exercise",
        path: "/exercise",
        icon: <FaWalking/>,
        className: "navBarLink"
    },
    {
        title: "Food",
        path: "/food",
        icon: <FaAppleAlt/>,
        className: "navBarLink"
    },
    {
        title: "Calendar",
        path: "/calendar",
        icon: <GoCalendar/>,
        className: "navBarLink"
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <BiCog/>,
        className: "navBarLink"
    }
]

export default NavbarData;