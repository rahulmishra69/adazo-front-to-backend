import React from "react";
import Image from "next/image";

// Icon
import Phone from "../../../../../public/images/phone.svg";
// Image
import UserImage from "../../../../../public/images/userimage.png";

const Index = ({ setIsEdit }) => {
  return (
    <div onClick={() => setIsEdit(false)}>
      <div className="md:gap-x-12 items-center bg-gradient-to-b from-[#1e4b8966] pt-14 pb-28 px-8 rounded-lg">
        <div>
          <div className="flex items-center">
            <h3 className="dark:text-white text-black font-Exo text-[15px] w-28 text-left">
              User Image
            </h3>
            <div>
              <form class="flex items-center space-x-6">
                <div class="shrink-0">
                  <Image
                    className="h-20 w-20 object-cover rounded"
                    src={UserImage}
                    alt="Current profile photo"
                  />
                </div>
                <label class="block">
                  <span class="sr-only">Choose profile photo</span>
                  <div className="relative">
                    <input
                      type="file"
                      class="block w-[80px] overflow-hidden relative opacity-0"
                    />
                    <h3 className="absolute top-0 left-0 dark:text-[#0096E6] font-Exo text-[12px] font-normal">
                      Change Image
                    </h3>
                  </div>
                </label>
              </form>
            </div>
          </div>
          <div className="flex gap-7">
            <div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  First Name
                </h3>
                <div className="flex md:w-[137px] w-[137px] overflow-hidden">
                  <input
                    type="text"
                    className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    placeholder="Robert"
                  />
                </div>
              </div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Email Address
                </h3>
                <div className="flex md:w-[207px] w-[137px] overflow-hidden">
                  <input
                    type="email"
                    className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    placeholder="robertcook@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Last Name
                </h3>
                <div className="flex md:w-[137px] w-[137px] overflow-hidden">
                  <input
                    type="text"
                    className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                    placeholder="Cook"
                  />
                </div>
              </div>
              <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                  Forward Number
                </h3>
                <div className="flex md:w-[189px] overflow-hidden">
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
                    placeholder="+1245641231"
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
