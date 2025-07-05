import React, { useState } from "react";
import MakeFoodCard from "./MakeFoodCard";
import { Link, useNavigate } from "react-router";
import { IconBrandGithub } from "@tabler/icons-react";
import { useEffect } from "react";
import axios from "axios";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconLogout2,
  IconSettings,
  IconUserBolt,
  IconShoppingCart,
  IconLanguage ,
  IconDashboardFilled,
  IconAdjustmentsHeart
} from "@tabler/icons-react";

const Menupage = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconDashboardFilled className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Select language",
      href:"",
      icon: (
        <IconLanguage className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Favourites",
      href: "/services/favourites",
      icon: (
        <IconAdjustmentsHeart className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "View Cart",
      href: "/services/cart",
      icon: (
        <IconShoppingCart className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconLogout2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const check_token = async () => {
      const response = await axios.get(
        "https://seven-spices.vercel.app/api/check-token",
        {
          withCredentials: true,
        }
      );
      if (response.data !== "Token is available") {
        window.alert("No token 😑 , go away intruder ");
        navigate("/login-page");
      }
    };
    check_token();
  }, []);
  const [downarrow, setDownArrow] = useState(true);
  const [dropdownfilter, setDropdownfilter] = useState(false);
  const [downarrowlanguage, setDownArrowlanguage] = useState(true);

  function handlefilter(e) {
    e.preventDefault();
    setDownArrow((prev) => !prev);
    setDropdownfilter((prev) => !prev);
  }
  function handlelanguage(e) {
    e.preventDefault();
    setDownArrowlanguage((prev) => !prev);
  }

  return (
    <>
      <div className="flex justify-between items-center h-20 px-6 bg-gray-200 shadow-md pr-23 ">
        <h1
          className="text-5xl font-bold text-gray-800 "
          style={{ fontFamily: "Peralta, sans-serif" }}
        >
          Our Servings
        </h1>
        <input
          type="search"
          className="bg-white p-2 text-xl h-10 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search"
        />
      </div>

      <div className="flex ">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open}
              <div className="mt-8 flex flex-col gap-2 ">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "Profile",
                  href: "#",
                  icon: (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uQC5ztV99O3I4gJ0FF98lJBDd70CZBiJi3QkIZpebfMt7ZiIV-4jilx_uY34cuBqo0s"
                      className="h-10 w-10 shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        <div className=" ml-20 py-6 bg-pink-100 w-screen">
          <MakeFoodCard />
        </div>
       {/*  <div className="w-1/4">
          <div className="fixed w-72 bg-gray-100 rounded-lg p-4 shadow-lg ">
            <div className="space-y-4">
              <div className="filter">
                <button
                  className="w-full bg-white px-4 py-2 text-lg rounded-lg flex items-center justify-between border border-gray-300 hover:bg-gray-200 transition"
                  onClick={handlefilter}
                >
                  Filter{" "}
                  {downarrow ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </button>
                {dropdownfilter && (
                  <div className="bg-white w-full p-2 border border-gray-300 rounded-md"></div>
                )}
              </div>

              <button className="w-full bg-white px-4 py-2 text-lg rounded-lg border border-gray-300 hover:bg-gray-200 transition flex items-center justify-between">
                <Link to="/services/favourites">Favourites</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>

              <button
                className="w-full bg-white px-4 py-2 text-lg rounded-lg border border-gray-300 hover:bg-gray-200 transition flex items-center justify-between"
                onClick={handlelanguage}
              >
                Select Language{" "}
                {downarrowlanguage ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                )}
              </button>

              <div className="flex">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400"
                />
                <button className="ml-2 bg-yellow-400 px-3 py-2 rounded-md">
                  Apply
                </button>
              </div>

              <button className="w-full bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition">
                Your Orders
              </button>

              <button className="w-full bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition flex items-center justify-between">
                <Link to="/services/cart">View Cart</Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>

              <button className="w-full bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition flex items-center justify-between">
                Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Menupage;
