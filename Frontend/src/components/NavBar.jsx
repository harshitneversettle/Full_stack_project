import React, { useState } from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import { Link } from "react-router";
import {
  IconBrandGithub,
  IconBrandX,
  IconLogin2,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconFileDescription
} from "@tabler/icons-react";

const NavBar = () => {
  const [loggedin, setLoggedin] = useState(true);
  const [drop, setDrop] = useState(false);
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Services",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: "Login",
      icon: <IconLogin2 className=" text-neutral-500 dark:text-neutral-300" />,
      href: "/login-page",
    },

    {
      title: "About us",
      icon: <IconFileDescription className=" text-neutral-500 dark:text-neutral-300" />,
      href: "/about",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  function dropdown(e) {
    setDrop((prev) => !prev);
  }

  return (
    <div className="navbar flex justify-between bg-gray-900 text-white py-4 px-6 shadow-lg">
      {/* Left Component */}
      <div className="leftcomponents flex items-center">
        <div className="image">
          <img
            src="https://i.postimg.cc/qM1crthK/Screenshot-2024-07-25-155536.png"
            alt="H7 logo"
            className="rounded-full w-16 border-2 border-white"
          />
        </div>
        <div className="name text-3xl font-bold ml-4 tracking-wide">
          Seven Spices
        </div>
      </div>

      {/* Right Component */}
      <div className="mt-5">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default NavBar;
