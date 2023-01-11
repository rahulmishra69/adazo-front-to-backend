import React, { useState } from "react";
// Next
import Image from "next/image";
// Layout
import AdminLayout from "../../../components/@core/layouts/admin-layout";

// section
import Table from "./table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectRoute from "../../context/protect";
// import { AuthContext } from "../../context/authContext";
// import { useContext } from "react";

const Index = () => {
  const [query, setQuery] = useState("");
  // const { user } = useContext(AuthContext);
  return (
    <ProtectRoute>
      <AdminLayout>
        <>
          <div className="bg-[#F8F8F8] dark:dark radial md:px-10 md:py-10 px-4 py-10 h-[calc(100vh-120px)] overflow-y-auto">
            <h1 className="font-exo font-normal text-[37px] dark:text-white text-black">
              Campaigns
            </h1>
            <div>
              <div className="relative  mt-9 mb-9">
                <input
                  type="search"
                  name="search"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  className="bg-[#D8DADE] dark:bg-adzadobg  px-5 pl-8 py-2 rounded-2xl dark:rounded-md text-sm w-[16.438rem] focus:outline-none"
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
            </div>
            <Table query={query} />
            <ToastContainer />
          </div>
        </>
      </AdminLayout>
    </ProtectRoute>
  );
};

export default Index;
// {user && ()}
