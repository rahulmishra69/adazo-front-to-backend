import React from "react";
import Image from "next/image";
import { useState } from "react";
import Profile from "./component/profile_edit";
import Company from "./component/company_edit";
import Notification from "./component/notification_edit";
import Link from "next/link";

// component
import AdminLayout from "../../../components/@core/layouts/admin-layout";
// Icon
import Adduser from "../../../public/images/singleusericon.svg";
import Integration from "../../../public/images/integration.svg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import ProtectRoute from "../../context/protect";

const Index = ({ setIsEdit }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <ProtectRoute>
    <>
      <AdminLayout>
        <div>
          <div className="bg-[#F8F8F8] dark:dark radial md:px-10 md:py-10 px-4 py-10 h-[calc(100vh-120px)] overflow-y-auto">
            <h1 className="font-exo font-normal text-[37px] dark:text-white text-black">
              Settings
            </h1>
            <div className="h-auto w-full mt-4">
              <div className="flex gap-x-[13px] flex-wrap md:mb-0 mb-5">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-[#07254e4d] w-[201px] h-[59px] justify-center text-base text-white shadow-sm focus:outline-none text-[22.32px] font-normal"
                >
                  <Link
                    className={
                      " " +
                      (openTab === 1
                        ? "border-[#0096E6] bg-[#07254E] border-b-4 w-[201px] h-[59px] justify-center items-center flex rounded-t-md pt-4"
                        : "bg-[#07254e4d] w-[201px] h-[59px] justify-center items-center flex rounded-t-md pt-4 border-b-4 border-transparent")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    // data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <div>
                      <Image src={Adduser} alt="Adduser" className="mr-2" />
                    </div>
                    Profile
                  </Link>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-[#07254e4d] w-[250px] h-[59px] justify-center text-base text-white shadow-sm focus:outline-none text-[22.32px] font-normal"
                >
                  <Link
                    className={
                      "" +
                      (openTab === 2
                        ? "border-[#0096E6] bg-[#07254E] border-b-4 w-[250px] h-[59px] justify-center items-center flex rounded-t-md pt-4"
                        : "bg-[#07254e4d]  w-[250px] h-[59px] justify-center items-center flex rounded-t-md pt-4 border-b-4 border-transparent")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <Image
                      src={Integration}
                      alt="Integrations"
                      className="mr-2"
                    />
                    Integrations
                  </Link>
                </button>
                <button
                  type="buttton"
                  className="inline-flex items-center rounded-md bg-[#07254e4d] w-[262px] h-[59px] justify-center text-base  text-white shadow-sm focus:outline-none text-[22.32px] font-normal"
                >
                  <Link
                    className={
                      " " +
                      (openTab === 3
                        ? "border-[#0096E6] bg-[#07254E] border-b-4 w-[262px] h-[59px] justify-center items-center flex rounded-t-md pt-4"
                        : "bg-[#07254e4d]  w-[262px] h-[59px] justify-center items-center flex rounded-t-md pt-4 border-b-4 border-transparent")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    <MdOutlineNotificationsNone className="text-[30px]" />
                    Notifications
                  </Link>
                </button>
                <div className="w-full">
                  <div>
                    <div>
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <Profile setIsEdit={setIsEdit} />
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <Company setIsEdit={setIsEdit} />
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <Notification />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4 px-[72px]">
              <button
                type="button"
                className="inline-flex justify-center rounded-[7px] py-2 px-7 items-center bg-[#0096E6] text-white  font-Exo font-semibold text-base"
                // onClick={() => setIsEdit(false)}
              >
                Save
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-[7px] py-2 px-6 items-center border-2 border-white text-white font-Exo font-semibold text-base"
                // onClick={() => setIsEdit(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </AdminLayout>
      </>
      </ProtectRoute>
  );
};

export default Index;
