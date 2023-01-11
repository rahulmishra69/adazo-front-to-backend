// React
import React, { useLayoutEffect, useRef, useState } from "react";
import Select from "react-select";
import Image from "next/image";

// section
import Delete from "../delete";

// Icon
import Acccount from "../../../../public/images/acccount.svg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiEditLine } from "react-icons/ri";
import Deletes from "../../../../public/images/delete.svg";
import Funeral from "../../../../public/images/funeral.svg";
import Insuranceicon from "../../../../public/images/insuranceicon.svg";

const people = [
  {
    id: 1,
    url: Acccount,
    Vertical: "Medicare Insurance",
    OfferName: "Medicare | Inbounds | Spanish",
    SkillLevel: "Intermediate",
    Payout: "$30",
    Buffer: "120 Sec",
    Publishers: "",
    Type: "Phone Call",
    Status: "Active",
  },
  {
    id: 2,
    url: Funeral,
    Vertical: "Medicare Insurance",
    OfferName: "Medicare | Inbounds | Spanish",
    SkillLevel: "Beginner",
    Payout: "$30",
    Buffer: "120 Sec",
    Publishers: "",
    Type: "Phone Call",
    Status: "Inactive",
  },
  {
    id: 3,
    url: Insuranceicon,
    Vertical: "Medicare Insurance",
    OfferName: "Medicare | Inbounds | Spanish",
    SkillLevel: "Beginner",
    Payout: "$30",
    Buffer: "120 Sec",
    Publishers: "",
    Type: "Phone Call",
    Status: "Active",
  },
];

const Index = ({ setShow }) => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [isMatch, setIsmatch] = useState(true);
  const [Status, setStatus] = useState(null);

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
  const [state, setState] = useState("");
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
    { value: "All", label: "All" }, 
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  const clickHandler = (id) => {
    setIsmatch(!isMatch);
    setState(id);
  };

  const clickHandle = () => {
    setPopup(true);
    setIsmatch(!isMatch);
  };

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
                  options={statusOptions}
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
              <div className="relative md:overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg offertable">
                <table className="xl:w-full min-w-full table-fixed divide-y divide-gray-300">
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
                        className="py-3.5 pr-3 text-left pl-7 text-sm font-bold dark:text-white text-black"
                      >
                        Icon
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Vertical
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Offer Name
                      </th>
                      <th
                        scope="col"
                        className="px-0 py-3.5 text-left text-sm font-bold dark:text-white text-black md:pl-8 pl-2"
                      >
                        Skill Level
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black md:pl-7 pl-0"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Payout
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Buffer
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Publishers
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-transparent tablecontent">
                    {people
                      .filter((data) => {
                        if (Status?.value === "All") {
                          return data;
                        } else if (data?.Status?.includes(Status?.value)) {
                          return data;
                        } else if (Status?.value === undefined) {
                          return data;
                        }
                      })
                      .filter((asd) =>
                        asd.Vertical.toLowerCase().includes(search)
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
                            <div className="w-[80px] ml-1">
                              <Image src={person.url} alt="userimage" />
                            </div>
                          </td>
                          <td className="px-3 py-4 text-sm dark:text-white text-black w-[72px]">
                            {person.Vertical}
                          </td>
                          <td className="py-4 text-sm dark:text-white text-black w-[160px]">
                            {person.OfferName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black SkillLevel 2xl:pl-8 md:pl-2">
                            <h3
                              className={`border-2 rounded-lg px-0 py-1 text-center 
                            ${
                              person.SkillLevel == "Intermediate"
                                ? "border-[#F2C94C] dark:text-[#F2C94C]"
                                : null || person.SkillLevel == "Beginner"
                                ? " border-[#45DE26] dark:text-[#45DE26]"
                                : null
                            }
                            
                            `}
                            >
                              {person.SkillLevel}
                            </h3>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black md:pl-7 pl-0">
                            {person.Type}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.Payout}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.Buffer}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            {person.Publishers}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            <h3
                              className={`border-2 rounded-lg px-3 py-1 w-[90px] text-center 
                            ${
                              person.Status === "Active"
                                ? "border-[#45DE26] dark:text-[#45DE26]"
                                : null || person.Status === "Inactive"
                                ? " border-[#989a98] dark:text-[#989a98]"
                                : null
                            }
                              `}
                            >
                              {person.Status}
                            </h3>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                            <div className="flex gap-2 relative">
                              <button
                                type="button"
                                onClick={() => clickHandler(person.id)}
                                className="flex justify-center relative items-center rounded-full border border-transparent bg-[#2C5F96] h-[38px] w-[38px] font-medium leading-4 dark:text-white text-black shadow-sm"
                              >
                                <BiDotsHorizontalRounded
                                  className="text-xl font-bold"
                                  aria-hidden="true"
                                />
                              </button>
                              {state == person.id && isMatch && (
                                <div className="h-24 w-24 absolute top-full 2xl:left-[15%] right-[15%] z-50 rounded-md actionbutton">
                                  <div>
                                    <button
                                      type="button"
                                      className="inline-flex items-center justify-center bg-[#073871] hover:bg-[#032C5B] h-12 w-24 rounded-t-md text-sm border-b border-[#234E98]"
                                      onClick={() => setShow(true)}
                                    >
                                      <RiEditLine
                                        className="mr-1 h-[21px] w-[21px] "
                                        aria-hidden="true"
                                      />
                                      Edit
                                    </button>
                                  </div>
                                  <div>
                                    <button
                                      type="button"
                                      onClick={clickHandle}
                                      className="inline-flex items-center justify-center bg-[#073871] hover:bg-[#032C5B] h-12 w-24 rounded-b-md text-sm text-[#F52727]"
                                    >
                                      <Image
                                        src={Deletes}
                                        alt="delete"
                                        className="w-[21px] h-[21px] mb-2"
                                      />
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              )}
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
      {popup && <Delete setPopup={setPopup} />}
    </div>
  );
};

export default Index;
