// React
import React, { useState, useEffect } from "react";
// Next-theme
import { useTheme } from "next-themes";
// Images
import Image from "next/image";
import Overviewicon from "../../../../public/images/overview.svg";
import Overviewicondark from "../../../../public/images/overviewicondark.svg";
import Disputes from "../../../../public/images/usergroup.svg";
import Disputesdark from "../../../../public/images/disputedark.svg";
import Campaigns from "../../../../public/images/campaign.svg";
import Campaignsdark from "../../../../public/images/campaigndark.svg";
import Offers from "../../../../public/images/offer.svg";
import Offersdark from "../../../../public/images/offerdark.svg";
import Setting from "../../../../public/images/setting.svg";
import Settingdark from "../../../../public/images/settingdark.svg";
import ActiveLink from "./activelink";

const Sidebar = ({ showSideBar, SetSideBar }) => {
  const [mode, setMode] = useState();
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setMode("dark");
    } else {
      setTheme("light");
      setMode("light");
    }
  };

  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode) {
      setTheme(mode);
      setMode(mode);
    } else {
      setTheme("dark");
      setMode("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <>
        <div className="fixed md:inset-y-0 lg:flex xl:w-64 w-auto h-screen overflow-y-auto md:flex-col hidden z-[9999999]">
          <div className="xl:w-64 w-auto dark:bg-adzadobg bg-white h-screen overflow-y-auto py-5 pt-7 flex justify-center px-4">
            <div>
              <div className="logo">
                <Image
                  src="/logo.svg"
                  className="block dark:hidden mx-auto"
                  alt="logo"
                  width={125}
                  height={86}
                />
                <Image
                  src="/Logo_1.svg"
                  className="hidden dark:block mx-auto"
                  alt="logo"
                  width={125}
                  height={86}
                />
              </div>
              <div className="mt-14">
                <ul>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8]"
                      href="/admin/dashboard"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image
                          src={Overviewicon}
                          alt=""
                          className="dark:block hidden"
                        />
                        <Image
                          src={Overviewicondark}
                          alt=""
                          className="dark:hidden block"
                        />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Overview
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8]"
                      href="/admin/disputes"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image
                          src={Disputes}
                          alt=""
                          className="hidden dark:block"
                        />
                        <Image
                          src={Disputesdark}
                          alt=""
                          className="dark:hidden block"
                        />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Disputes
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8]"
                      href="/admin/campaigns"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image
                          src={Campaigns}
                          alt=""
                          className="hidden dark:block"
                        />
                        <Image
                          src={Campaignsdark}
                          alt=""
                          className="dark:hidden block"
                        />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Campaigns
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8]"
                      href="/admin/offers"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image
                          src={Offers}
                          alt=""
                          className="hidden dark:block"
                        />
                        <Image
                          src={Offersdark}
                          alt=""
                          className="dark:hidden block"
                        />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Offers
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8]"
                      href="/admin/user"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image
                          src={Setting}
                          alt=""
                          className="hidden dark:block"
                        />
                        <Image
                          src={Settingdark}
                          alt=""
                          className="dark:hidden block"
                        />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Users
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8]"
                      href="/admin/billing"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image
                          src={Setting}
                          alt=""
                          className="hidden dark:block"
                        />
                        <Image
                          src={Settingdark}
                          alt=""
                          className="dark:hidden block"
                        />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Billing
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8]"
                      href="/admin/team"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image
                          src={Setting}
                          alt=""
                          className="hidden dark:block"
                        />
                        <Image
                          src={Settingdark}
                          alt=""
                          className="dark:hidden block"
                        />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Team
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/setting"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image
                          src={Setting}
                          alt=""
                          className="hidden dark:block"
                        />
                        <Image
                          src={Settingdark}
                          alt=""
                          className="dark:hidden block"
                        />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Settings
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] py-3 px-3 rounded-lg mb-5">
                    <div className="flex gap-2 items-center">
                      <div>
                        {mode === "light" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 transform -rotate-90"
                          >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                          </svg>
                        )}
                      </div>
                      <div className="d-flex align-items-center darkmde">
                        <label
                          htmlFor="toggle-checked"
                          className="relative flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            id="toggle-checked"
                            className="sr-only peer"
                            onClick={changeTheme}
                            defaultChecked
                          />
                          <div className="w-16 bg-gray-200 border-2 border-gray-200 rounded-full toggle-bg h-7" />
                          <p className="absolute hidden text-lg dark:text-white text-medium-dark-gray uppercase right-2 top-[1px] peer-checked:block">
                            On
                          </p>
                          <p className="absolute block text-lg dark:text-white text-medium-dark-gray uppercase right-7 peer-checked:hidden">
                            Off
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {showSideBar && (
          <div className="fixed md:inset-y-0 block z-10 lg:flex-col xl:w-64 w-auto dark:bg-adzadobg bg-white h-screen py-5 px-4 lg:hidden ">
            <div className="flex items-center justify-between">
              <div className="logo">
                <Image
                  src="/logo.svg"
                  className="block dark:hidden"
                  alt="logo"
                  width={125}
                  height={86}
                />
                <Image
                  src="/Logo_1.svg"
                  className="hidden dark:block"
                  alt="logo"
                  width={125}
                  height={86}
                />
              </div>
              <div className="pl-4 pr-3">
                <div
                  className="ml-auto text-white rounded-full cursor-pointer w-7 h-7"
                  onClick={() => SetSideBar(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-black dark:stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="mt-6">
                <ul>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/dashboard"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image src={Overviewicon} alt="" className="" />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Overview
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/disputes"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image src={Disputes} alt="" />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Disputes
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/campaigns"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image src={Campaigns} alt="" />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Campaigns
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/offers"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image src={Offers} alt="" />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Offers
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/user"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image src={Setting} alt="" />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Users
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/billing"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image src={Setting} alt="" />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Billing
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/team"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image src={Setting} alt="" />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Team
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] mb-5 hover:bg-lightblue hover:rounded-lg">
                    <ActiveLink
                      activeClassName="dark:bg-lightblue bg-[#F8F8F8] "
                      href="/admin/setting"
                    >
                      <div className="flex gap-2 p-4 rounded-lg">
                        <Image src={Setting} alt="" />
                        <p className="dark:text-white text-medium-dark-gray text-[17px] font-medium font-Exo">
                          Settings
                        </p>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="w-[12.688rem] py-3 px-3 rounded-lg mb-5">
                    <div className="flex gap-2 items-center">
                      <div>
                        {mode === "light" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 transform -rotate-90"
                          >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                          </svg>
                        )}
                      </div>
                      <div className="d-flex align-items-center darkmde">
                        <label
                          htmlFor="toggle-checked"
                          className="relative flex items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            id="toggle-checked"
                            className="sr-only peer"
                            onClick={changeTheme}
                            defaultChecked
                          />
                          <div className="w-16 bg-gray-200 border-2 border-gray-200 rounded-full toggle-bg h-7" />
                          <p className="absolute hidden text-lg dark:text-white text-medium-dark-gray uppercase right-2 top-[1px] peer-checked:block">
                            On
                          </p>
                          <p className="absolute block text-lg dark:text-white text-medium-dark-gray uppercase right-7 peer-checked:hidden">
                            Off
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Sidebar;
