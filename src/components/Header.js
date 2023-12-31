import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import { RiRadioButtonLine } from "react-icons/ri";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onlineStatus = useOnlineStatus();

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const navigationPages = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav className="bg-orange-400 shadow-lg border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <Link to={"/"} className="flex items-center">
            <img
              src={LOGO_URL}
              className="h-24 mr-3 sm:h-9 w-40"
              alt="Flowbite Logo"
            />
          </Link>
          <ul className="flex p-1 md:hidden mt-4 border border-gray-100 rounded-lg bg-gray-50  dark:bg-gray-800 dark:border-gray-700 items-center">
            <li className="block md:hidden p-2 mr-2 text-white bg-blue-600 rounded dark:text-white">
              <BsCart4 />
            </li>
            <li
              className="block md:hidden p-2 text-white bg-blue-600 rounded dark:text-white"
              style={{ color: onlineStatus ? "green" : "red" }}>
              <RiRadioButtonLine style={{ top: "3px", position: "relative" }} />
            </li>
          </ul>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
              {navigationPages.map((item) => {
                return (
                  <li>
                    <Link
                      to={item.to}
                      className="block py-2 pl-3 pr-4 mb-2 md:mb-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li className="md:block py-2 pl-3 hidden pr-4 mb-2 md:mb-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                <BsCart4 />
              </li>
              <li className="block py-2 pl-3 mb-2 md:mb-0 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
              </li>
              <li
                className="md:block py-2 pl-3 hidden md:mb-0 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                style={{ color: onlineStatus ? "green" : "red" }}>
                <RiRadioButtonLine
                  style={{ top: "3px", position: "relative" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
