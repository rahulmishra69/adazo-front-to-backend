import React, { useState } from "react";
// Layout
import AdminLayout from "../../../components/@core/layouts/admin-layout";
// icon
import { AiOutlinePlus } from "react-icons/ai";

import Editeoffer from "./edit/editoffer";

// section
import Table from "./table";
import ProtectRoute from "../../context/protect";

const Index = () => {
  const [show, setShow] = useState(false);

  return (
    <ProtectRoute>
      <AdminLayout>
        <>
          {show && <Editeoffer />}
          {show === false && (
            <div className="bg-[#F8F8F8] dark:dark radial md:px-10 md:py-10 px-4 py-10 h-[calc(100vh-120px)] overflow-y-auto">
              <h1 className="font-exo font-normal text-[37px] dark:text-white text-black">
                Offers
              </h1>
              <div>
                <div className="md:pr-8 pr-0 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-transparent bg-[#27AE60] hover:bg-[#0F8842] px-5 py-3 text-[14px] font-bold font-Exo text-white shadow-sm focus:outline-none"
                  >
                    <AiOutlinePlus
                      className="text-xl font-bold"
                      aria-hidden="true"
                    />
                    Add Offer
                  </button>
                </div>
              </div>
              <Table setShow={setShow} />
            </div>
          )}
        </>
      </AdminLayout>
    </ProtectRoute>
  );
};

export default Index;
