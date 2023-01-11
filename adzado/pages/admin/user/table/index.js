import React, { useLayoutEffect, useRef, useState } from "react";
import Select from "react-select";
import Delete from "../delete";
import Edit from "../edit";
import Image from "next/image";
// Icon
import Penicon from "../../../../public/images/pencilSimple.svg";
import Penicondark from "../../../../public/images/pencilSimpledark.svg";
import { AiOutlineClose } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
const people = [
  {
    index: 1,
    Company: "LeadGENX",
    Status: "Active",
    BillingContact: "Robert Cook",
    BillingEmail: "robertcook@gmail.com",
    BillingPhone: "+924545465454",
    Type: "Client",
    Role: "Admin",
  },
  {
    index: 2,
    Company: "LeadGENX",
    Status: "Archived",
    BillingContact: "Robert Cook",
    BillingEmail: "robertcook@gmail.com",
    BillingPhone: "+924545465454",
    Type: "Client",
    Role: "Member",
  },
  {
    index: 3,
    Company: "LeadGENX",
    Status: "Suspended",
    BillingContact: "Robert Cook",
    BillingEmail: "robertcook@gmail.com",
    BillingPhone: "+924545465454",
    Type: "Client",
    Role: "Member",
  },
  {
    index: 4,
    Company: "LeadGENX",
    Status: "Locked",
    BillingContact: "Robert Cook",
    BillingEmail: "robertcook@gmail.com",
    BillingPhone: "+924545465454",
    Type: "Client",
    Role: "Member",
  },
];

const Index = () => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");
  const keys = ["Company", "BillingContact"];

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
  const [Status, setStatus] = useState(null);
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
  const statusOptions = [
    { value: "Member", label: "Member" },
    { value: "Admin", label: "Admin" },
  ];

  const statusOptions1 = [
    { value: "Active", label: "Active" },
    { value: "Archived", label: "Archived" },
    { value: "Suspended", label: "Suspended" },
    { value: "Locked", label: "Locked" },
  ];

  return (
    <div className="w-full rounded-3xl my-5">
      <div className="flex items-center gap-5 md:mt-0 mt-5 z-20 justify-between md:w-auto w-full flex-wrap lg:pr-8 pr-0">
        <div className="flex items-center lg:gap-5 md:gap-3 md:justify-start justify-between md:w-auto w-full gap-0 z-[33]">
          <h6 className="text-medium-dark-gray">Row count</h6>
          <div className="relative campaigns">
            <Select
              name="targetVertical"
              instanceId="targetVertical"
              className="relative z-20 "
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
        <div className="flex flex-wrap lg:gap-5 md:gap-3 justify-between items-baseline">
          <div className="flex items-center lg:gap-5 justify-center md:justify-start gap-0 md:w-auto w-full">
            <h2 className="text-black dark:text-white font-exo font-bold text-sm">
              Filters
            </h2>
          </div>
          <div className="flex items-center lg:gap-5 md:gap-3 md:justify-start justify-between md:w-auto w-full gap-0 z-[32] mt-5">
            <h2 className="text-black dark:text-white font-exo font-normal text-sm">
              Role
            </h2>
            <div className="relative campaigns font-Exo">
              <Select
                name="targetVertical"
                instanceId="targetVertical"
                className="relative z-20"
                isClearable={false}
                styles={colourStyles}
                classNamePrefix="select"
                options={statusOptions}
                onChange={setStatus}
                value={Status}
                placeholder="All"
              />
            </div>
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
        <div className="relative md:mt-0 mt-9">
          <input
            type="search"
            name="search"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="bg-[#D8DADE] dark:bg-adzadobg  px-5 pl-8 py-2 rounded-2xl dark:rounded-md text-sm md:w-72 w-auto focus:outline-none"
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
                        Company
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
                        Billing Contact
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Billing Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black "
                      >
                        Billing Phone
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Role
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
                          data?.Role?.toLowerCase().includes(
                            Status?.value?.toLowerCase()
                          )
                        ) {
                          return data;
                        } else if (Status1?.value === "All") {
                          return data;
                        } else if (
                          data?.Status?.toLowerCase().includes(
                            Status1?.value?.toLowerCase()
                          )
                        ) {
                          return data;
                        } else if (
                          Status?.value === undefined ||
                          Status1?.value === undefined
                        ) {
                          return data;
                        }
                      })
                      .filter((asd) =>
                        asd.Company.toLowerCase().includes(search)
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
                            {person.Company}
                          </td>
                          <td className="whitespace-nowrap">
                            <h3
                              className={`px-3 py-1 rounded text-sm font-Exo dark:text-white text-black bg-opacity-40 w-max 
                            
                                 ${
                                   person.Status == "Active"
                                     ? "bg-[#45DE26] text-white"
                                     : null || person.Status == "Archived"
                                     ? " bg-[#E0E0E0] text-white"
                                     : null || person.Status == "Suspended"
                                     ? "bg-[#F52727] text-white"
                                     : null || person.Status == "Locked"
                                     ? "bg-[#FF770D] text-white"
                                     : null
                                 }

                            `}
                            >
                              {person.Status}
                            </h3>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.BillingContact}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.BillingEmail}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black pl-8">
                            {person.BillingPhone}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.Type}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <h3
                              className={` ${
                                person.Role == "Admin"
                                  ? "dark:text-[#45DE26] text-green-600"
                                  : null || person.Role == "Member"
                                  ? " dark:text-white "
                                  : null
                              }`}
                            >
                              {person.Role}
                            </h3>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => setShow(true)}
                                className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#FF770D] hover:bg-[#954100] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm"
                              >
                                <TbUsers
                                  className="text-xl font-bold"
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#0096E6] hover:bg-[#0D3E72] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm"
                                onClick={() => setIsEdit(true)}
                              >
                                <div className="p-2 dark:block hidden">
                                  <Image src={Penicon} alt="" className="" />
                                </div>
                                <div className="p-2 dark:hidden block">
                                  <Image
                                    src={Penicondark}
                                    alt=""
                                    className="p-2 hidden dark:block"
                                  />
                                </div>
                              </button>
                              <button
                                type="button"
                                onClick={() => setShow(true)}
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
      {show && (
        <>
          <Delete setShow={setShow} />
        </>
      )}
      {isEdit && (
        <>
          <Edit setIsEdit={setIsEdit} />
        </>
      )}
    </div>
  );
};

export default Index;
