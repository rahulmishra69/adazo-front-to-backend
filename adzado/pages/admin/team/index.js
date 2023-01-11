import React, { useState } from "react";
// Next
import Image from "next/image";
// Layout
import AdminLayout from "../../../components/@core/layouts/admin-layout";
// icon
import Adduser from "../../../public/images/addmember.svg";

// section
import Table from "./table";
import ProtectRoute from "../../context/protect";

const Index = () => {
  return (
    <ProtectRoute>
      <AdminLayout>
        <>
          <div className="bg-[#F8F8F8] dark:dark radial md:px-10 md:py-10 px-4 py-10 h-[calc(100vh-120px)] overflow-y-auto">
            <h1 className="font-exo font-normal text-[37px] dark:text-white text-black">
              Team
            </h1>
            <div>
              <div className="relative  mt-9 mb-9 flex flex-wrap items-center gap-x-11 md:gap-y-0 gap-y-5">
                <h1 className="font-exo font-normal text-[20px] dark:text-white text-black">
                  Team Members List
                </h1>
                <div className="md:pr-8 pr-0">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-[#27AE60] hover:bg-[#0F8842] px-4 py-[8px] text-[15px] font-semibold font-Exo text-white shadow-sm focus:outline-none"
                  >
                    <Image
                      src={Adduser}
                      alt="Adduser"
                      className="mr-1 h-5 w-5"
                    />
                    Add User
                  </button>
                </div>
              </div>
            </div>
            <Table />
          </div>
        </>
      </AdminLayout>
    </ProtectRoute>
  );
};

export default Index;
