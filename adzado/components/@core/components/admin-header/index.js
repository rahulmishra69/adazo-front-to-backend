// React
import React from "react";
// Images
import Image from "next/image";
import union from "../../../../public/union.svg";
import avtar from "../../../../public/images/avtar.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import Router from "next/router";
// Section
import Sidebar from "../admin-sidebar";

const logOutUser = () => {
  window.localStorage.removeItem("userDetails");
  Router.push("/signin");
};
const userNavigation = [
  { name: "Your Profile", href: "/admin/setting" },
  { name: "Settings", href: "/admin/setting" },
  { name: "Sign out", onClick: logOutUser },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, SetSideBar] = useState(false);

  const closeMenu = (e) => {
    if (e.target.id === "smallDeviceBar") {
      setShowMenu(false);
    }
  };

  return (
    <>
      <div className="block lg:hidden z-40">
        <Sidebar showSideBar={showSideBar} SetSideBar={SetSideBar} />
      </div>
      <div className="bg-white dark:bg-signblue h-[120px] w-full md:px-12 px-4 flex items-center">
        <div className="flex justify-between sm:justify-start w-full items-center lg:gap-0 gap-3">
          <div
            onClick={() => SetSideBar(true)}
            className="block w-12 cursor-pointer h-110 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 sm:w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div
            id="smallDeviceBar"
            className={`lg:hidden z-40 fixed overflow-y-scroll w-screen h-screen transition-transform duration-700 ease-in-out transform inset-0 bg-black bg-opacity-40 ${
              !showMenu ? "translate-x-[-100%]" : ""
            }`}
            onClick={closeMenu}
          ></div>
          <div className="relative">
            <input
              type="search"
              name="search"
              className="bg-[#D8DADE] dark:bg-adzadobg  md:px-5 md:pl-8  py-2 rounded-2xl dark:rounded-md text-sm md:w-[23.438rem] w-[6.5rem] sm:w-full focus:outline-none"
            />
            <div className="absolute left-2.5 top-2.5 cursor-pointer">
              <Image
                src="/Magnifier.svg"
                alt="Plane"
                width={17.6}
                height={17.6}
              />
            </div>
          </div>
          <div className="flex lg:gap-8 gap-1 items-center ml-auto">
            <div>
              <button
                type="button"
                className="flex gap-1 items-center py-1 px-3 text-sm font-medium text-center text-white rounded-lg badge"
              >
                <Image src={union} alt="union" />
                <span
                  className="font-semibold text-base"
                  style={{ fontFamily: "Open Sans" }}
                >
                  15
                </span>
              </button>
            </div>
            <div className="w-[2px] h-6 bg-[#33A0DD4D]"></div>
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex items-center gap-2 rounded-full  text-sm focus:outline-none">
                  <Image
                    className="lg:h-[60px] lg:w-[60px] rounded-full"
                    src={avtar}
                    alt=""
                  />
                  <div className="sm:block hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-[#56CCF2]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md dark:bg-midnight-blue py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          onClick={item.onClick}
                          className={classNames(
                            active ? "dark:bg-primary-blue bg-black" : "",
                            "block px-4 py-2 text-sm hover:text-white"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
