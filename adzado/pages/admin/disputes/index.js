import React, { useState } from "react";
// Next
import Image from "next/image";

// Layout
import AdminLayout from "../../../components/@core/layouts/admin-layout";

// Sections
import Table from "./table";
import ProtectRoute from "../../context/protect";

export default function Disputes() {
  const [query, setQuery] = useState("");

  return (
    <ProtectRoute>
      <AdminLayout>
        <>
          <div className="bg-[#F8F8F8] dark:dark radial md:px-10 md:py-10 px-4 py-10 h-screen overflow-y-auto">
            <h1 className="font-exo font-normal text-[37px] dark:text-white text-black">
              Disputes
            </h1>
            <div>
              <div className="relative md:mt-0 mt-9">
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
          </div>
        </>
      </AdminLayout>
    </ProtectRoute>
  );
}
