import React from "react";
// Next
import Image from "next/image";
// Layout
import AdminLayout from "../../../components/@core/layouts/admin-layout";
// icon
import Exporticon from "../../../public/images/exporticon.svg";

// section
import Table from "./table";
import { ExportToCsv } from "export-to-csv";
import ProtectRoute from "../../context/protect";

const people = [
  {
    index: 1,
    Company: "Lead GenX Inc.",
    Date: "21 May 2022",
    TransactionID: "#231321654654321",
    Amount: "$350",
    Status: "Successful",
  },
  {
    index: 2,
    Company: "Lead GenX Inc.",
    Date: "21 May 2022",
    TransactionID: "#231321654654321",
    Amount: "$350",
    Status: "Open",
  },
  {
    index: 3,
    Company: "Lead GenX Inc.",
    Date: "21 May 2022",
    TransactionID: "#231321654654321",
    Amount: "$350",
    Status: "Failed",
  },
];

const Index = () => {
  const csvFile = () => {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: true,
      title: "My Awesome CSV",
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(people);
  };

  return (
    <ProtectRoute>
      <AdminLayout>
        <>
          <div className="bg-[#F8F8F8] dark:dark radial md:px-10 md:py-10 px-4 py-10 h-[calc(100vh-120px)] overflow-y-auto">
            <h1 className="font-exo font-normal text-[37px] dark:text-white text-black">
              Billing
            </h1>
            <div>
              <div className="relative  mt-9 mb-9 flex justify-between w-full">
                <h1 className="font-exo font-normal text-[20px] dark:text-white text-black">
                  Transaction History
                </h1>
                <div className="md:pr-8 pr-0">
                  <button
                    type="button"
                    onClick={() => csvFile()}
                    className="inline-flex items-center rounded-md border border-transparent bg-[#0096E6] hover:bg-[#0C6AAE] px-3 py-[9px] text-[15px] font-semibold font-Exo text-white shadow-sm focus:outline-none"
                  >
                    <Image src={Exporticon} alt="Exporticon" className="mr-1" />
                    Export
                  </button>
                </div>
              </div>
            </div>
            <Table people={people} />
          </div>
        </>
      </AdminLayout>
    </ProtectRoute>
  );
};

export default Index;
