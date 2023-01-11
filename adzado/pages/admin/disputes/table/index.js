// React
import React, { useLayoutEffect, useRef, useState } from "react";
import Select from "react-select";
// Icons
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

// sections
import Approve from "../approve";
import Decline from "../decline";
import Recording from "../redcording";

const people = [
  {
    CompanyName: "Lead Interactive",
    Product: "Final Expense",
    Phone: "7046525032",
    Status: "Pending",
    Reason: "Loreum ipsum de clariio insd sdfk lkj",
  },
  {
    CompanyName: "Lead Interactive",
    Product: "Final Expense",
    Phone: "7046292419",
    Status: "Declined",
    Reason: "Loreum ipsum de clariio insd sdfk lkj",
  },
  {
    CompanyName: "Lead Interactive",
    Product: "Final Expense",
    Phone: "+1 5454654654",
    Status: "Approved",
    Reason: "Loreum ipsum de clariio insd sdfk lkj",
  },
];

const Index = ({ query }) => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [Status, setStatus] = useState(null);
  const [approve, setApprove] = useState(false);
  const [decline, setDecline] = useState(false);
  const [recording, setRecording] = useState(false);
  const keys = ["CompanyName", "Product", "Phone", "Status"];

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
  }, [selectedPeople]);

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
  const statusOptions = [
    { value: "All", label: "All" },
    { value: "Pending", label: "Pending" },
    { value: "Approved", label: "Approved" },
    { value: "Declined", label: "Declined" },
  ];

  return (
    <div className="w-full rounded-3xl my-5">
      <div className="flex flex-wrap items-center justify-between lg:pr-8 pr-0">
        <div className="flex items-center gap-10 lg:gap-5 md:gap-3">
          <h2 className="text-black dark:text-white font-exo font-bold text-sm">
            Filters
          </h2>
          <div className="flex items-center gap-10 lg:gap-5 md:gap-3">
            <h2 className="text-black dark:text-white font-exo font-normal text-sm">
              Status
            </h2>
            <div className="relative disputs font-Exo">
              <Select
                name="targetVertical"
                instanceId="targetVertical"
                className="relative z-30"
                isClearable={false}
                styles={colourStyles}
                classNamePrefix="select"
                options={statusOptions}
                onChange={setStatus}
                value={Status}
                placeholder="Pending, Approved, Delined"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 md:mt-0 mt-5">
          <h6 className="text-medium-dark-gray">Row count</h6>
          <div className="relative disputs">
            <Select
              name="targetVertical"
              instanceId="targetVertical"
              className="relative z-20 "
              isClearable={false}
              classNamePrefix="select"
              styles={colourStyles}
              options={colourOptions}
              onChange={setTargetVertical}
              value={targetVertical || ""}
              placeholder="100"
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
                        className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Company Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black "
                      >
                        Recording
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Reason
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-transparent">
                    {people
                      .filter((data) => {
                        if (Status?.value === "All") {
                          return data;
                        } else if (
                          data?.Status?.toLowerCase().includes(
                            Status?.value?.toLowerCase()
                          )
                        ) {
                          return data;
                        } else if (Status?.value === undefined) {
                          return data;
                        }
                      })
                      .filter((data) =>
                        keys.some((key) =>
                          data[key].toLowerCase().includes(query)
                        )
                      )
                      .map((person, index) => (
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
                            {person.CompanyName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.Product}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.Phone}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black pl-8">
                            <button
                              className=""
                              onClick={() => setRecording(!recording)}
                            >
                              <BsFillPlayCircleFill className="text-[#45DE26] text-2xl" />
                            </button>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            <span
                              className={` flex justify-center items-center font-font-Exo h-[31px] w-[61px] rounded text-center text-xs font-medium 
                            ${
                              person.Status == "Pending"
                                ? "bg-[#dec12633] text-[orange]"
                                : null || person.Status == "Declined"
                                ? " bg-[#ad1e1e33] text-[#FF1818]"
                                : null || person.Status == "Approved"
                                ? "bg-[#45de2633] text-[#45DE26]"
                                : null
                            }
                            `}
                            >
                              {person.Status}
                            </span>
                          </td>
                          <td className="px-3 py-4 text-sm dark:text-white text-black">
                            <div className="md:w-[173px] w-auto md:whitespace-pre-line whitespace-pre">
                              {person.Reason}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => setApprove(!approve)}
                                className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#27AE60] hover:bg-[#219653] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm"
                              >
                                <AiOutlineCheck
                                  className="text-xl font-bold"
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                onClick={() => setDecline(!decline)}
                                className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#F52727] hover:bg-[#980B0B] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm"
                              >
                                <AiOutlineClose
                                  className="text-xl font-bold"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
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
      {approve && <Approve setApprove={setApprove} />}
      {decline && <Decline setDecline={setDecline} />}
      {recording && <Recording setRecording={setRecording} />}
    </div>
  );
};

export default Index;
