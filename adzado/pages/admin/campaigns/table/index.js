// React
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Select from "react-select";
// Sections
import Delete from "../delete";
import Edit from "../edit";
import Image from "next/image";
// Icon
import Penicon from "../../../../public/images/pencilSimple.svg";
import Penicondark from "../../../../public/images/pencilSimpledark.svg";
import { AiOutlineClose } from "react-icons/ai";
// redux-toolkit
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../../../redux/action";

const Index = ({ query }) => {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const [editdata, setEditdata] = useState("");

  const keys = ["CompanyName", "Industry", "Product"];

  // redux-toolkit
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const hello = selector?.app?.post[0]?.message;

  useEffect(() => {
    dispatch(getData());
  }, []);

  const filterSearch = !query
  ? hello
  : hello.filter((item) =>
  item.companyname.toLowerCase().includes(query.toLowerCase())
  );

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : filterSearch);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < filterSearch?.length;
    setChecked(selectedPeople.length === filterSearch?.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  const [targetVertical, setTargetVertical] = useState(null);
  const [Status, setStatus] = useState(null);
  const [Status1, setStatus1] = useState(null);
  const [Status2, setStatus2] = useState(null);
  const [Status3, setStatus3] = useState(null);
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
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
    { value: "LifeInsurance", label: "LifeInsurance" },
    { value: "LifeInsurance1", label: "LifeInsurance1" },
    { value: "LifeInsurance2", label: "LifeInsurance2" },
    { value: "LifeInsurance3", label: "LifeInsurance3" },
  ];

  const statusOptions1 = [
    { value: "Final Expense", label: "Final Expense" },
    { value: "Final Expense1", label: "Final Expense1" },
    { value: "Final Expense2", label: "Final Expense2" },
    { value: "Final Expense3", label: "Final Expense3" },
  ];
  const statusOptions2 = [
    { value: "0", label: "0" },
    { value: "$20", label: "$20" },
    { value: "$40", label: "$40" },
    { value: "$80", label: "$80" },
  ];

  const statusOptions3 = [
    { value: "0", label: "0" },
    { value: "2", label: "2" },
    { value: "4", label: "4" },
    { value: "6", label: "6" },
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
              Industry
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
              Product
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
          <div className="flex items-center lg:gap-5 md:gap-3 md:justify-start justify-between md:w-auto w-full gap-0 md:mt-0 mt-5 z-[30]">
            <h2 className="text-black dark:text-white font-exo font-normal text-sm">
              Cost Per Lead
            </h2>
            <div className="relative campaigns font-Exo">
              <Select
                name="targetVertical"
                instanceId="targetVertical"
                className="relative z-20"
                isClearable={false}
                styles={colourStyles}
                classNamePrefix="select"
                options={statusOptions2}
                onChange={setStatus2}
                value={Status2}
                placeholder="$0-  $00"
              />
            </div>
          </div>
          <div className="flex items-center lg:gap-5 md:gap-3 md:justify-start justify-between md:w-auto w-full gap-0 md:mt-0 mt-5">
            <h2 className="text-black dark:text-white font-exo font-normal text-sm">
              Concurrence
            </h2>
            <div className="relative campaigns font-Exo">
              <Select
                name="targetVertical"
                instanceId="targetVertical"
                className="relative z-20"
                isClearable={false}
                styles={colourStyles}
                classNamePrefix="select"
                options={statusOptions3}
                onChange={setStatus3}
                value={Status3}
                placeholder="0-10"
              />
            </div>
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
                        Industry
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
                        CAP
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black "
                      >
                        Concurrence
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-bold dark:text-white text-black"
                      >
                        Cost Per Lead
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
                    {filterSearch&&filterSearch.length&&filterSearch?.map((person, index) => (
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
                                    : selectedPeople.filter((p) => p !== person)
                                )
                              }
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium">
                          {person.companyname}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                          {person.industry}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                          {person.product}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                          {person.cap}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black pl-8">
                          {person.concurrence}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                          ${person.costperlead}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm dark:text-white text-black">
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setIsEdit(true), setEditdata(person._id)
                              }}
                              className="flex justify-center  items-center rounded-[4px] border border-transparent bg-[#0096E6] hover:bg-[#0D3E72] h-[29px] w-[45px] font-medium leading-4 dark:text-white text-black shadow-sm"
                            >
                              <div className="p-2 dark:block hidden">
                                <Image src={Penicon} alt="" className="" />
                              </div>
                              <div className="p-2 dark:hidden block">
                                <Image src={Penicondark} alt="" className="" />
                              </div>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setShow(true), setDeleteData(person._id);
                              }}
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
          <Delete setShow={setShow} deleteDatas={deleteData} />
        </>
      )}
      {isEdit && (
        <>
          <Edit setIsEdit={setIsEdit} editdata={editdata} />
        </>
      )}
    </div>
  );
};

export default Index;

// .filter((data) => {
//   if (Status?.value === "LifeInsurance") {
//     return data;
//   } else if (Status1?.value === "Final Expense") {
//     return data;
//   } else if (Status2?.value === "$80") {
//     return data;
//   } else if (Status3?.value === "6") {
//     return data;
//   } else if (
//     Status?.value === undefined ||
//     Status1?.value === undefined ||
//     Status2?.value === undefined ||
//     Status3?.value === undefined
//   ) {
//     return data;
//   }
// })
// .filter((data) =>
//   keys.some((key) =>
//     data[key].toLowerCase().includes(query)
//   )
// )
