// React
import React, { useLayoutEffect, useRef, useState } from "react";
import Select from "react-select";
// Next
import Image from "next/image";

const Index = ({ people }) => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [search, setSearch] = useState("");

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [people.length, selectedPeople]);

  const [targetVertical, setTargetVertical] = useState(null);
  const [Status1, setStatus1] = useState(null);
  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const rowOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  const statusOptions1 = [
    { value: "All", label: "All" },
    { value: "Successful", label: "Successful" },
    { value: "Open", label: "Open" },
    { value: "Failed", label: "Failed" },
  ];

  return (
    <div className="w-full rounded-3xl my-5">
      <div className="flex items-center gap-5 md:mt-0 mt-5 z-20 justify-between md:w-auto w-full flex-wrap lg:pr-8 pr-0">
        <div className="flex items-center flex-wrap lg:gap-[87px] md:gap-3 md:justify-start justify-between md:w-auto w-full gap-0 z-[33]">
          <div className="flex lg:gap-5 md:gap-3 gap-3 md:justify-start justify-between md:w-auto w-full">
            <h6 className="text-medium-dark-gray">Row count</h6>
            <div className="relative campaigns">
              <Select
                name="targetVertical"
                instanceId="targetVertical"
                className="relative z-50 "
                isClearable={false}
                classNamePrefix="select"
                styles={colourStyles}
                options={rowOptions}
                onChange={setTargetVertical}
                value={targetVertical || ""}
                placeholder="100"
              />
            </div>
          </div>
          <div className="flex flex-wrap lg:gap-5 md:gap-3 md:justify-start justify-between md:w-auto w-full items-baseline md:mt-0 mt-5">
            <div className="flex items-center lg:gap-5 justify-center md:justify-start gap-0 md:w-auto w-full">
              <h2 className="text-black dark:text-white font-exo font-bold text-sm">
                Filters
              </h2>
            </div>
            <div className="flex items-center lg:gap-5 md:gap-3 md:justify-start justify-between md:w-auto w-full gap-0 md:mt-0 mt-5 z-[31]">
              <h2 className="text-black dark:text-white font-exo font-normal text-sm">
                Status
              </h2>
              <div className="relative campaigns font-Exo">
                <Select
                  name="targetVertical"
                  instanceId="targetVertical"
                  className="relative z-20"
                  isClearable={false}
                  styles={colourStyles}
                  classNamePrefix="select"
                  options={statusOptions1}
                  onChange={setStatus1}
                  value={Status1}
                  placeholder="All"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:mt-0 mt-9">
          <input
            type="search"
            name="search"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="bg-[#D8DADE] dark:bg-adzadobg  px-5 pl-8 py-2 rounded-2xl dark:rounded-md text-sm xl:w-72 w-auto focus:outline-none"
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
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                  <thead className="bg-white dark:bg-[#062D57]">
                    <tr>
                      <th
                        scope="col"
                        className="relative w-12 px-6 sm:w-16 sm:px-8"
                      >
                        <input
                          type="checkbox"
                          className="table-checkbox  h-5 w-5 rounded accent-[#0096E6] text-[#0096E6] focus:outline-none"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pr-3 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Company Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Transaction ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black "
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-transparent">
                    {people
                      ?.filter((data) => {
                        if (Status1?.value === "All") {
                          return data;
                        } else if (
                          data?.Status?.toLowerCase().includes(
                            Status1?.value?.toLowerCase()
                          )
                        ) {
                          return data;
                        } else if (Status1?.value === undefined) {
                          return data;
                        }
                      })
                      ?.filter((asd) =>
                        asd.Company.toLowerCase().includes(search)
                      )
                      ?.map((person, index) => (
                        <tr
                          key={index}
                          className={
                            selectedPeople.includes(person) ? "" : undefined
                          }
                        >
                          <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                            {selectedPeople.includes(person) && (
                              <div className="absolute inset-y-0 left-0" />
                            )}
                            <div className="relative">
                              <input
                                type="checkbox"
                                className=" table-checkbox h-5 w-5  accent-[#0096E6] text-white dark:text-white  focus:outline-none"
                                value={person.email}
                                checked={selectedPeople.includes(person)}
                                onChange={(e) =>
                                  setSelectedPeople(
                                    e.target.checked
                                      ? [...selectedPeople, person]
                                      : selectedPeople.filter(
                                          (p) => p !== person
                                        )
                                  )
                                }
                              />
                            </div>
                          </td>
                          <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium">
                            {person.Company}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.Date}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.TransactionID}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.Amount}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm pl-8">
                            <h3
                              className={`${
                                person.Status == "Successful"
                                  ? "dark:text-[#45DE26] text-green-600"
                                  : null || person.Status == "Open"
                                  ? " dark:text-[#FF770D] text-[#FF770D]"
                                  : null || person.Status == "Failed"
                                  ? " dark:text-[#F52727] text-[#F52727]"
                                  : null
                              }
                            `}
                            >
                              {person.Status}
                            </h3>
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
    </div>
  );
};

export default Index;
