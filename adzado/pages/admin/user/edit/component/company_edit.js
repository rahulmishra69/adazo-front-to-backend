import React from "react";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
// Icon
import Phone from "../../../../../public/images/phone.svg";

const Company_edit = ({ setIsEdit }) => {
  const [City, setCity] = useState(null);
  const [State, setState] = useState(null);

  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const rowOptions = [
    { value: "San Diego1", label: "San Diego1" },
    { value: "San Diego2", label: "San Diego2" },
    { value: "San Diego3", label: "San Diego3" },
  ];
  const StateOptions = [
    { value: "California 1", label: "California 1" },
    { value: "California 2", label: "California 2" },
    { value: "California 3", label: "California 3" },
  ];

  return (
    <div onClick={() => setIsEdit(false)}>
      <div className="h-auto w-full">
        <div className="items-center bg-gradient-to-b from-[#1e4b8966] pt-14 pb-12 px-8 rounded-lg w-[818px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
            <div>
              <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Company Name
                </h3>
                <div className="flex md:w-[137px] w-[137px] overflow-hidden rounded-md ml-2">
                  <input
                    type="text"
                    className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    defaultValue="LeadGenX"
                  />
                </div>
              </div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Email Address
                </h3>
                <div className="flex md:w-[204px] w-[137px] overflow-hidden rounded-md">
                  <input
                    type="email"
                    className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    defaultValue="robertcook@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-14 text-left">
                  Website
                </h3>
                <div className="flex md:w-[215px] overflow-hidden rounded-md">
                  <input
                    type="text"
                    className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    defaultValue="leadgenx.com"
                  />
                </div>
              </div>
              <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-14 text-left">
                  Phone
                </h3>
                <div className="flex md:w-[215px] overflow-hidden rounded-md">
                  <span className="inline-flex items-center px-2 rounded-l text-[#45DE26] bg-[#072457]">
                    <Image
                      src={Phone}
                      alt=""
                      className="dark:block hidden h-11 w-11"
                    />
                  </span>
                  <input
                    type="number"
                    className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    defaultValue={+124564541231}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Address
                </h3>
                <div className="flex overflow-hidden w-full rounded-md ml-9">
                  <textarea className="w-full h-12 placeholder-white rounded-r dark:bg-inputfild bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  City
                </h3>
                <div className="flex rounded-md ml-2 Company">
                  <Select
                    name="City"
                    instanceId="City"
                    className="relative z-20"
                    isClearable={false}
                    classNamePrefix="select"
                    styles={colourStyles}
                    options={rowOptions}
                    onChange={setCity}
                    value={City || ""}
                    placeholder="San Diego"
                  />
                </div>
              </div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Postal Code
                </h3>
                <div className="flex md:w-[88px] w-[137px] overflow-hidden rounded-md">
                  <input
                    type="number"
                    className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    defaultValue={22602}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-14 text-left">
                  State
                </h3>
                <div className="flex rounded-md ml-2 Company">
                  <Select
                    name="State"
                    instanceId="State"
                    className="relative z-20"
                    isClearable={false}
                    classNamePrefix="select"
                    styles={colourStyles}
                    options={StateOptions}
                    onChange={setState}
                    value={State || ""}
                    placeholder="California"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="dark:text-[#0096E6] font-Exo text-[15px] font-normal text-left my-10">
              Billing Contact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
              <div>
                <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                  <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                    Company Name
                  </h3>
                  <div className="flex md:w-[137px] w-[137px] overflow-hidden rounded-md ml-2">
                    <input
                      type="text"
                      className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                      defaultValue="LeadGenX"
                    />
                  </div>
                </div>
                <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                  <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                    Email Address
                  </h3>
                  <div className="flex md:w-[204px] w-[137px] overflow-hidden rounded-md">
                    <input
                      type="email"
                      className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                      defaultValue="robertcook@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                  <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-14 text-left">
                    Website
                  </h3>
                  <div className="flex md:w-[215px] overflow-hidden rounded-md">
                    <input
                      type="text"
                      className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                      defaultValue="leadgenx.com"
                    />
                  </div>
                </div>
                <div className="flex md:gap-x-6 items-center mt-4 md:justify-start justify-between">
                  <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-14 text-left">
                    Phone
                  </h3>
                  <div className="flex md:w-[215px] overflow-hidden rounded-md">
                    <span className="inline-flex items-center px-2 rounded-l text-[#45DE26] bg-[#072457]">
                      <Image
                        src={Phone}
                        alt=""
                        className="dark:block hidden h-11 w-11"
                      />
                    </span>
                    <input
                      type="number"
                      className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                      defaultValue={+124564541231}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company_edit;
