import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";
// Image
import UserImage from "../../../../public/images/claytonuser.png";

const Index = ({}) => {
  const [Status, setStatus] = useState(null);

  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const RoleOptions = [
    { value: "Admin", label: "Admin" },
    { value: "Member", label: "Member" },
  ];
  const statuOptions=[
    { value:"Active", label:"Active"},
    { value:"Disable", label:"Disable"},
  ]

  const value = {
    data: "Admin",
  };

  return (
    <div>
      <div className="md:gap-x-12 items-center bg-gradient-to-b from-[#1e4b8966] pt-14 pb-16 px-[72px] rounded-lg w-[90%]">
        <div>
          <div className="flex items-center gap-x-8">
            <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
              User Image
            </h3>
            <div>
              <form className="flex items-center space-x-6">
                <div className="shrink-0">
                  <Image
                    className="h-20 w-20 object-cover rounded"
                    src={UserImage}
                    alt="Current profile photo"
                  />
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <div className="relative">
                    <input
                      type="file"
                      className="block w-[80px] overflow-hidden relative opacity-0"
                    />
                    <h3 className="absolute top-0 left-0 dark:text-[#0096E6] font-Exo text-[12px] font-normal">
                      Change Image
                    </h3>
                  </div>
                </label>
              </form>
            </div>
          </div>
          <div className="flex gap-x-[1.9375rem] mt-6">
            <div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  First Name
                </h3>
                <div className="flex md:w-[137px] w-[137px] overflow-hidden">
                  <input
                    type="text"
                    className="w-full h-12 placeholder-white rounded bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    // placeholder="Robert"
                    defaultValue={"Clayton"}
                  />
                </div>
              </div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Email Address
                </h3>
                <div className="flex md:w-[226px] w-[137px] overflow-hidden">
                  <input
                    type="email"
                    className="w-full h-12 placeholder-white rounded bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    // placeholder="robertcook@gmail.com"
                    defaultValue={"claytonwhite2@gmail.com"}
                  />
                </div>
              </div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Status
                </h3>
                <div className="relative campaigns font-Exo Setting">
                  <Select
                    name="targetVertical"
                    instanceId="targetVertical"
                    className="relative z-20"
                    isClearable={false}
                    styles={colourStyles}
                    classNamePrefix="select"
                    options={statuOptions}
                    onChange={setStatus}
                    value={statuOptions.value}
                    defaultValue={statuOptions[0]}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-fit text-left">
                  Last Name
                </h3>
                <div className="flex md:w-[137px] w-[137px] overflow-hidden">
                  <input
                    type="text"
                    className="w-full h-12 placeholder-white rounded bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    defaultValue={"Cook"}
                  />
                </div>
              </div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-[74px] text-right">
                  Role
                </h3>
                <div className="relative campaigns font-Exo Setting">
                  <Select
                    name="targetVertical"
                    instanceId="targetVertical"
                    className="relative z-20"
                    isClearable={false}
                    styles={colourStyles}
                    classNamePrefix="select"
                    options={RoleOptions}
                    onChange={setStatus}
                    value={RoleOptions.value}
                    defaultValue={RoleOptions[0]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
