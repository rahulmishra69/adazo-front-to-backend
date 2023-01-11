import React, { useLayoutEffect, useRef, useState } from "react";
import Select from "react-select";
import Image from "next/image";

// icon
import Penicon from "../../../../public/images/pencilSimple.svg";
import Penicondark from "../../../../public/images/pencilSimpledark.svg";
import { AiOutlineClose } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";

// Image
import userimage from "../../../../public/images/user_ellipse.png";

const people = [
  {
    index: 1,
    url: userimage,
    FirstName: "Robert",
    LastName: "Cook",
    EmailAddress: "robertcook123@ gmail.com",
    Status: "Accepted",
    Role: "Admin",
  },
  {
    index: 2,
    url: userimage,
    FirstName: "Robert",
    LastName: "Cook",
    EmailAddress: "robertcook123@ gmail.com",
    Status: "Accepted",
    Role: "Member",
  },
];

const Index = () => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [search, setSearch] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

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
    { value: "Accepted", label: "Accepted" },
    { value: "Invited", label: "Invited" },
  ];

  const RoleOptions = [
    { value: "Accepted", label: "Accepted" },
    { value: "Invited", label: "Invited" },
  ];

  return (
    <div className="w-full rounded-3xl my-5">
      <div className="flex items-center gap-5 md:mt-0 mt-5 z-20 justify-between md:w-auto w-full flex-wrap lg:pr-8 pr-0">
        <div className="flex items-center flex-wrap lg:gap-x-[87px] md:gap-3 md:justify-start justify-between md:w-auto w-full gap-0 z-[33]">
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
                  options={statusOptions}
                  onChange={setStatus1}
                  value={Status1}
                  placeholder="All"
                />
              </div>
            </div>
            <div className="flex items-center lg:gap-5 md:gap-3 md:justify-start justify-between md:w-auto w-full gap-0 z-[32]  md:ml-8 ml-0 md:mt-0 mt-5">
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
                  options={RoleOptions}
                  onChange={setStatus}
                  value={Status}
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
                  <thead className="bg-white dark:bg-[#062D57] h-[45px]">
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
                        className="py-3.5 pr-3 text-left text-sm font-bold dark:text-white text-black w-[76px]"
                      >
                        User Image
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Email Address
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black "
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-transparent">
                    {people
                      .filter((asd) =>
                        asd.FirstName.toLowerCase().includes(search)
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
                            <div className="h-10 w-10 rounded-full">
                              <Image
                                src={person.url}
                                alt="userimage"
                                width={40}
                                height={40}
                              />
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.FirstName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.LastName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.EmailAddress}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            <h3 className="border-2 rounded-lg border-[#45DE26] dark:text-[#45DE26] px-3 py-1 w-[90px] text-center">
                              {person.Status}
                            </h3>
                          </td>
                          <td
                            className={`whitespace-nowrap px-3 py-4 text-sm text-black pl-8`}
                          >
                            <h3
                              className={`${
                                person.Role == "Admin"
                                  ? "dark:text-[#45DE26]"
                                  : "text-white"
                              }`}
                            >
                              {person.Role}
                            </h3>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            <div className="flex gap-2">
                              <button
                                disabled={person.Role === "Admin"}
                                type="button"
                                className={`flex justify-center  items-center rounded-[4px] border border-transparent bg-[#27AE60] hover:bg-[#0F8842] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm 
                                ${person.Role === "Admin" ? "opacity-50" : null}
                                `}
                              >
                                <IoPaperPlaneOutline
                                  className={`text-xl font-bold `}
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#0096E6] hover:bg-[#0D3E72] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm"
                              >
                                <div className="p-2 dark:block hidden">
                                  <Image src={Penicon} alt="" className="" />
                                </div>
                                <div className="p-2 dark:hidden block">
                                  <Image
                                    src={Penicondark}
                                    alt=""
                                    className=""
                                  />
                                </div>
                              </button>
                              <button
                                type="button"
                                // onClick={() => setShow(true)}
                                className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#F52727] hover:bg-[#980B0B] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm"
                              >
                                <AiOutlineClose
                                  className="text-xl font-bold"
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                // onClick={() => setShow(true)}
                                className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#FF770D] hover:bg-[#954100] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm"
                              >
                                <IoKeyOutline
                                  className="text-xl font-bold"
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                // onClick={() => setShow(true)}
                                className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#9B51E0] hover:bg-[#6B1DB4] h-[29px] w-[40px] font-medium leading-4 dark:text-white text-black shadow-sm"
                              >
                                <MdOutlineNotificationsNone
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
    </div>
  );
};

export default Index;
