import React, { useState } from "react";
// Layout
import Image from "next/image";
// Image
import funeraledit from "../../../../public/images/funeraledit.svg";

// icon
import Penicon from "../../../../public/images/pencilSimple.svg";
import Penicondark from "../../../../public/images/pencilSimpledark.svg";
import Adduser from "../../../../public/images/addmember.svg";

// sections
import Edit from "../edit";
import AffiliateManagers from "./affiliate-managers";

const Editoffer = () => {
  const [detail, setDetail] = useState(false);
  const [popup, setPopup] = useState(false);
  const people = [
    {
      id: 1,
      url: funeraledit,
      Vertical: "Medicare Insurance",
      OfferName: "Medicare | Inbounds | Spanish",
      SkillLevel: "Intermediate",
      Payout: "$30",
      Buffer: "120 Sec",
      Publishers: "",
      Type: "Phone Call",
      Status: "Active",
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 bg-[#F8F8F8] dark:dark radial md:px-10 md:py-10 px-4 py-10 h-[calc(100vh-120px)] overflow-y-auto">
        <div className="md:col-span-2 w-full">
          <div className="bg-[#031D48] py-9 px-6 rounded-lg h-fit">
            {people.map((data, index) => (
              <div key={index} className="flex gap-5 md:flex-nowrap flex-wrap">
                <div className="lg:mx-0 mx-auto">
                  <Image src={data.url} alt="funeraledit" />
                </div>
                <div className="flex justify-between w-full items-center flex-wrap">
                  <div>
                    <h3 className="text-white font-Exo font-medium text-[26px]">
                      {data.Vertical}
                    </h3>
                    <h2 className="dark:text-[#0096E6] text-[18px] font-Exo font-medium">
                      {data.OfferName}
                    </h2>
                  </div>
                  <div className="flex gap-5 items-center">
                    <h3
                      className={`border-2 rounded-lg py-1 text-center w-fit px-[10px] text-[11.48px] 
                            ${
                              data.SkillLevel == "Intermediate"
                                ? "border-[#F2C94C] dark:text-[#F2C94C]"
                                : null || data.SkillLevel == "Beginner"
                                ? " border-[#45DE26] dark:text-[#45DE26]"
                                : null
                            }
                            
                            `}
                    >
                      {data.SkillLevel}
                    </h3>
                    <h3 className="border-2 rounded-lg border-[#45DE26] dark:text-[#45DE26] text-[11.px] w-fit px-[10px] py-1 text-center">
                      {data.Status}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDetail(true)}
                    className="flex gap-1 justify-center items-center rounded-[4px] border border-transparent bg-[#0096E6] hover:bg-[#0D3E72] font-bold text-sm leading-4 dark:text-white text-black shadow-sm px-2 py-2"
                  >
                    <div className="w-[21px] h-[21px] dark:block hidden">
                      <Image src={Penicon} alt="" className="" />
                    </div>
                    <div className="w-[18px] h-[18px] dark:hidden block">
                      <Image src={Penicondark} alt="" className="" />
                    </div>
                    Edit
                  </button>
                </div>
              </div>
            ))}
            <div className="pt-8">
              <div className="bg-[#082657]  px-4 pb-5 pt-[23px]">
                <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-lg text-left pb-3">
                  Offer Details
                </h3>
                <p className="dark:text-white text-black font-normal text-sm font-Exo 2xl:w-[673px] w-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  sed pharetra aliquam euismod sed lectus sed ac. Aliquet magna
                  ante tellus pulvinar lacus viverra in. Commodo consequat diam
                  id velit sed tempus placerat.
                </p>
              </div>
              <div className="bg-[#082657]  px-4 pb-5 pt-[23px] mt-3">
                <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-lg text-left pb-3">
                  Disclaimers
                </h3>
                <p className="dark:text-white text-black font-normal text-sm font-Exo 2xl:w-[675px] w-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  sed pharetra aliquam euismod sed lectus sed ac. Aliquet magna
                  ante tellus pulvinar lacus viverra in. Commodo consequat diam
                  id velit sed tempus placerat.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 flex gap-x-5 flex-wrap">
            <div className="bg-[#031D48] py-6 rounded-lg px-7 md:w-[48.5%] w-full">
              <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-lg text-left">
                Payout Settings
              </h3>
              <div className="flex gap-[75px] items-center w-full mt-6 2xl:flex-nowrap flex-wrap">
                <div className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-white font-Exo font-normal text-base">
                      Type:
                    </h3>
                    <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                      Phone Call
                    </h4>
                  </div>
                  <div className="flex justify-between items-center w-full mt-3">
                    <h3 className="text-white font-Exo font-normal text-base">
                      Method:
                    </h3>
                    <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                      Flat Rate
                    </h4>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-white font-Exo font-normal text-base">
                      Amount:
                    </h3>
                    <h4 className="text-[#45DE26] dark:text-[#45DE26] font-exo font-medium text-base text-left">
                      $25
                    </h4>
                  </div>
                  <div className="flex justify-between items-center w-full mt-3">
                    <h3 className="text-white font-Exo font-normal text-base">
                      Buffer:
                    </h3>
                    <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                      60sec
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#031D48] py-6 rounded-lg px-7 md:w-[48.5%] w-full lg:mt-0 mt-4">
              <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-lg text-left">
                Location Coverage
              </h3>
              <div className="flex gap-[75px] items-center w-full mt-6 2xl:flex-nowrap flex-wrap">
                <div className="w-full">
                  <div className="flex gap-[22px] items-center w-full">
                    <h3 className="text-white font-Exo font-normal text-base">
                      Method:
                    </h3>
                    <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                      State
                    </h4>
                  </div>
                  <div className="flex gap-[22px] items-center w-full mt-3">
                    <h3 className="text-white font-Exo font-normal text-base">
                      Coverage:
                    </h3>
                    <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                      View
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 bg-[#031D48] px-7 py-6 rounded-lg">
            <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-lg text-left pb-6">
              Accepted Traffic Source(s)
            </h3>
            <div className="flex gap-x-40 flex-wrap">
              <div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Social:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Search:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    SMS:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Email:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
              </div>
              <div className="lg:mt-0 mt-4">
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Native:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Co-Reg:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Display:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Print:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
              </div>
              <div className="xl:mt-0 mt-4">
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Marketplace:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    No
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Onshare Call Center:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    No
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Nearshare Call Center:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
                <div className="flex gap-x-[22px]">
                  <h3 className="text-white font-Exo font-normal text-base">
                    Offshare Call Center:
                  </h3>
                  <h4 className="text-black dark:text-[#4889B8] font-exo font-medium text-base text-left">
                    Yes
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-[#031D48] lg:w-[90%] w-auto h-[110px] px-6 py-10 rounded-lg flex items-center justify-between">
            <h2 className="text-lg dark:text-white text-black font-medium font-Exo">
              Affiliate Managers
            </h2>
            <button
              type="button"
              onClick={() => setPopup(!popup)}
              className="inline-flex items-center rounded-md border border-transparent bg-[#27AE60] hover:bg-[#0F8842] w-[86px] px-4 py-[8px] text-[15px] font-semibold font-Exo text-white shadow-sm focus:outline-none"
            >
              <Image
                src={Adduser}
                alt="Adduser"
                className="mr-1 h-5 w-[19px]"
              />
              Add
            </button>
          </div>
          <div className="bg-[#031D48] px-6 py-6 rounded-lg mt-4 lg:w-full w-auto">
            <h3 className="text-black dark:text-[#4889B8] font-exo font-semibold text-lg text-left">
              Schedule
            </h3>
            <div className="flex gap-x-11 border-b border-[#163262] pb-3">
              <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-xs text-left mt-6">
                Availablity
              </h3>
              <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-6">
                Custom
              </h3>
            </div>
            <div className="flex gap-x-11 border-b border-[#163262] pb-3">
              <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-xs text-left mt-6">
                Time Zone
              </h3>
              <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-6">
                UTC - 08:00 Pacific Time(US & Canada)
              </h3>
            </div>
            <div className="flex gap-x-11 pb-3">
              <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-xs text-left mt-6">
                Schedule
              </h3>
              <div>
                <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-4">
                  Monday - 09am to 6:00pm
                </h3>
                <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-1">
                  Tuesday - 09am to 6:00pm
                </h3>
                <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-1">
                  Wednesday - 09am to 6:00pm
                </h3>
                <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-1">
                  Thursday - 09am to 6:00pm
                </h3>
                <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-1">
                  Friday - 09am to 6:00pm
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-[#031D48] lg:w-[90%] w-auto px-6 py-10 rounded-lg mt-4">
            <h3 className="text-black dark:text-[#4889B8] font-exo font-semibold text-lg text-left">
              Requirement
            </h3>
            <div className="flex gap-x-11 pb-3">
              <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-6 w-[183px]">
                Ad Creative Submission:
              </h3>
              <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-xs text-left mt-6">
                Yes
              </h3>
            </div>
            <div className="flex gap-x-11 pb-3">
              <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left w-[183px]">
                Facebook Connection via leadsie.io:
              </h3>
              <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-xs text-left">
                No
              </h3>
            </div>
          </div>
          <div className="bg-[#031D48] lg:w-[90%] w-auto px-6 py-10 rounded-lg mt-4">
            <h3 className="text-black dark:text-[#4889B8] font-exo font-semibold text-lg text-left">
              Additional Stat
            </h3>
            <div className="flex gap-x-11 pb-3">
              <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left mt-6 w-[183px]">
                Recommended Daily Ad Spend:
              </h3>
              <h3 className="text-[#45DE26] dark:text-[#45DE26] font-exo font-medium text-[16PX] text-left mt-6">
                $100
              </h3>
            </div>
            <div className="flex gap-x-11 pb-3">
              <h3 className="text-black dark:text-white font-exo font-medium text-xs text-left w-[183px]">
                Projected Cost Per Call:
              </h3>
              <h3 className="text-[#45DE26] dark:text-[#45DE26] font-exo font-medium text-[16PX] text-left">
                $12.5
              </h3>
            </div>
          </div>
        </div>
      </div>
      {detail && <Edit setIsEdit={setDetail} />}
      {popup && <AffiliateManagers setPopup={setPopup}/>}
    </>
  );
};

export default Editoffer;
