// React
import React, { useState } from "react";
import Select from "react-select";
const people = [
  {
    Customer: "Clayton White",
    Status: "New User",
    OrderNumber: "#001232121",
    Amount: "$454",
  },
  {
    Customer: "Robert Cook",
    Status: "Signed Up",
    OrderNumber: "#001232121",
    Amount: "$767",
  },
  {
    Customer: "Danny Madison",
    Status: "Signed Up",
    OrderNumber: "#001232121",
    Amount: "$43",
  },
  {
    Customer: "Henry Gayle",
    Status: "New User",
    OrderNumber: "#001232121",
    Amount: "$56",
  },
];

const Index = () => {
  const [targetVertical, setTargetVertical] = useState(null);
  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,

        color: "black",
      };
    },
  };
  const colourOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
  return (
    <div className="md:w-full table-auto rounded-3xl my-5 lg:py-10 lg:pl-10 lg:pr-0 px-0 py-5">
      <div className="flex flex-wrap items-center sm:justify-between lg:pr-8 justify-center">
        <h2 className="text-white dark:text-[#4889B8] font-exo font-normal text-2xl sm:mb-0 mb-5">
          Recent Activity
        </h2>
        <div className="flex items-center gap-2">
          <h6 className="text-medium-dark-gray">Last</h6>
          <div className="relative">
            <Select
              name="targetVertical"
              instanceId="targetVertical"
              className="relative z-20 dropdown"
              isClearable={false}
              classNamePrefix="select"
              styles={colourStyles}
              options={colourOptions}
              onChange={setTargetVertical}
              value={targetVertical || ""}
              placeholder="24 Hours"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col px-4">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-4 lg:px-4">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-white dark:bg-[#062D57] border-b-2 dark:border-primary-blue text-medium-dark-gray ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-medium-dark-gray dark:text-white sm:pl-6"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-medium-dark-gray dark:text-white"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-medium-dark-gray dark:text-white"
                    >
                      Order Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-medium-dark-gray dark:text-white"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent">
                  {people.map((person, index) => (
                    <tr
                      key={index}
                      className="border-b-2 dark:border-primary-blue text-medium-dark-gray "
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium font-Exo pt-7 text-medium-dark-gray dark:text-white sm:pl-6">
                        {person.Customer}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-medium-dark-gray dark:text-white font-Exo pt-7 font-normal flex gap-3">
                        <div
                          className={`h-4 w-4 ${
                            person.Status === "New User"
                              ? "bg-[#00D1FF]"
                              : null || person.Status === "Signed Up"
                              ? "bg-[#45DE26]"
                              : null
                          }`}
                        ></div>
                        {person.Status}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-medium-dark-gray dark:text-white font-Exo pt-7 font-normal">
                        {person.OrderNumber}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-medium-dark-gray dark:text-white font-Exo pt-7 font-normal">
                        {person.Amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
