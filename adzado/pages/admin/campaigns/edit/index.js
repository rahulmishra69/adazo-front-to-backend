// React
import React, { useEffect } from "react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Select from "react-select";
// Icon
import Penicon from "../../../../public/images/pencilSimple.svg";
import Penicondark from "../../../../public/images/pencilSimpledark.svg";
import Phone from "../../../../public/images/phone.svg";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getById, getData, updateData } from "../../../../redux/action";

const Index = ({ setIsEdit, editdata }) => {
  const [data, setData] = useState({
    companyname: "",
    industry: "",
    product: "",
    cap: "",
    concurrence: "",
    costperlead: "",
    leadtype: "",
    forwardnumber: "",
    status: "",
    _id: editdata,
  });
  console.log("🚀 ~ file: index.js:28 ~ Index ~ data", data);

  // redux-toolkit

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const helo = selector?.app?.post[0]?.message;

  useEffect(() => {
    dispatch(getById(editdata));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData(helo);
  }, [helo]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const changeSelectHandler = (e) => {
    const name = e.name;
    const value = e.value;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    await dispatch(updateData(data));
    dispatch(getData());
  };

  const [open, setOpen] = useState(true);
  const [Industry, setIndustry] = useState(null);
  const [Status, setStatus] = useState(null);
  const [Status3, setStatus3] = useState(null);
  const [schedule, setSchedule] = useState([
    { id: 1, day: "Sunday", isEnable: false },
    { id: 2, day: "Monday", isEnable: false },
    { id: 3, day: "Tuseday", isEnable: false },
    { id: 4, day: "Wednasday", isEnable: false },
    { id: 5, day: "Thursday", isEnable: false },
    { id: 6, day: "Friday", isEnable: false },
    { id: 7, day: "Saturday", isEnable: false },
  ]);

  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const IndustryOptions = [
    { value: "Insurance", label: "Insurance", name: "industry" },
    { value: "Insurance-2", label: "Insurance-2", name: "industry" },
    { value: "Insurance-3", label: "Insurance-3", name: "industry" },
    { value: "Insurance-4", label: "Insurance-4", name: "industry" },
  ];
  const StatusOptions = [
    { value: "Pending", label: "Pending", name: "status" },
    { value: "Declined", label: "Declined", name: "status" },
    { value: "Approved", label: "Approved", name: "status" },
  ];

  const StatusOptions1 = [
    { value: "Pending", label: "Pending", name: "product" },
    { value: "Declined", label: "Declined", name: "product" },
    { value: "Approved", label: "Approved", name: "product" },
  ];
  const StatusOptions2 = [
    { value: "Pending", label: "Pending", name: "leadtype" },
    { value: "Declined", label: "Declined", name: "leadtype" },
    { value: "Approved", label: "Approved", name: "leadtype" },
  ];
  const statusOptions3 = [
    { value: "0", label: "0" },
    { value: "2", label: "2" },
    { value: "4", label: "4" },
    { value: "6", label: "6" },
  ];
  const clickHandler = (id) => {
    setSchedule((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isEnable: !obj.isEnable };
        }
        return obj;
      })
    );
  };
  console.log(data, "datadatadatadata");
  return (
    <div onClick={() => setIsEdit(false)}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[999999999]" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform rounded-xl dark:dark linear bg-white md:w-[860px]">
                  <div className="mx-auto flex h-20 w-full items-center justify-center dark:bg-[#021132] bg-[#021132]  dark:bg-opacity-20 bg-opacity-20 border-b border-white border-opacity-20">
                    <Image src={Penicon} alt="" className="dark:block hidden" />
                    <Image
                      src={Penicondark}
                      alt=""
                      className="dark:hidden block"
                    />
                    <h2 className="dark:text-white text-black font-Exo font-medium text-xl ml-2">
                      Edit Campaign
                    </h2>
                  </div>
                  <div className="mt-9 md:mb-0  pl-14 pr-11 h-auto w-full">
                    <div className="flex justify-between flex-wrap">
                      <div>
                        <div className="flex md:gap-x-12 items-center">
                          <h3 className="dark:text-white text-black font-Exo text-[15px] w-28 text-left">
                            Name
                          </h3>
                          <input
                            type="text"
                            name="companyname"
                            defaultValue={helo?.companyname}
                            onChange={changeHandler}
                            placeholder="Life Insurance"
                            className="placeholder-white w-[137px] h-12 rounded bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                          />
                        </div>
                        <div className="flex md:gap-x-12 items-center mt-4">
                          <h3 className="dark:text-white text-black font-Exo text-[15px] w-28 text-left">
                            Industry
                          </h3>
                          <Select
                            name="industry"
                            instanceId="industry"
                            className="relative z-[24] edit"
                            isClearable={false}
                            styles={colourStyles}
                            classNamePrefix="select"
                            options={IndustryOptions}
                            onChange={changeSelectHandler}
                            // defaultValue={helo?.industry}
                            value={{
                              value: data?.industry,
                              label: data?.industry,
                            }}
                            placeholder="Insurance"
                          />
                        </div>
                        <div className="flex md:gap-x-12 items-center mt-4">
                          <h3 className="dark:text-white text-black font-Exo font-medium text-[17px] w-28 text-left">
                            Cost Per Lead
                          </h3>
                          <div className="flex max-w-[137px] overflow-hidden">
                            <span className="inline-flex items-center px-4 rounded-l text-[#45DE26] bg-[#072457]">
                              $
                            </span>
                            <input
                              type="number"
                              name="costperlead"
                              defaultValue={helo?.costperlead}
                              onChange={changeHandler}
                              className="h-12 w-full bg-inputfild pl-1 py-3 rounded-r focus:outline-none font-Exo text-[17.8px] text-white"
                            />
                          </div>
                        </div>
                        <div className="flex md:gap-x-12 items-center mt-4">
                          <h3 className="dark:text-white text-black font-Exo text-[15px] w-28 text-left">
                            Daily CAP
                          </h3>
                          <input
                            type="text"
                            name="cap"
                            defaultValue={helo?.cap}
                            onChange={changeHandler}
                            className="w-[108px] text-center placeholder-white h-12 rounded bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                            placeholder="10"
                          />
                        </div>
                        <div className="flex md:gap-x-12 items-center mt-4">
                          <h3 className="dark:text-white text-black font-Exo text-[15px] w-28 text-left">
                            Status
                          </h3>
                          <Select
                            name="status"
                            instanceId="status"
                            className="relative z-[23] edit"
                            isClearable={false}
                            styles={colourStyles}
                            classNamePrefix="select"
                            options={StatusOptions}
                            onChange={changeSelectHandler}
                            value={{
                              value: data?.status,
                              label: data?.status,
                            }}
                            placeholder="Active"
                          />
                        </div>
                      </div>
                      <div className="md:mt-0 mt-5">
                        <div className="flex md:gap-x-12 items-center mt-4">
                          <h3 className="dark:text-white text-black font-Exo text-[15px] w-28 text-left">
                            Lead Type
                          </h3>
                          <Select
                            name="leadtype"
                            instanceId="leadtype"
                            className="relative z-[22] edit"
                            isClearable={false}
                            styles={colourStyles}
                            defaultValue={helo?.leadtype}
                            classNamePrefix="select"
                            options={StatusOptions2}
                            onChange={changeSelectHandler}
                            value={{
                              value: data?.leadtype,
                              label: data?.leadtype,
                            }}
                            placeholder="Leads"
                          />
                        </div>
                        <div className="flex md:gap-x-12 items-center mt-4">
                          <h3 className="dark:text-white text-black font-Exo text-[15px] w-28 text-left">
                            Product
                          </h3>
                          <Select
                            name="product"
                            instanceId="product"
                            className="relative z-20 edit"
                            isClearable={false}
                            styles={colourStyles}
                            classNamePrefix="select"
                            options={StatusOptions1}
                            onChange={changeSelectHandler}
                            value={{
                              value: data?.product,
                              label: data?.product,
                            }}
                            placeholder="Medicare"
                          />
                        </div>
                        <div className="flex md:gap-x-8 items-center mt-4 md:justify-start justify-between">
                          <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                            Forward Number
                          </h3>
                          <div className="flex md:w-[190px] w-[137px] overflow-hidden">
                            <span className="inline-flex items-center px-2 rounded-l text-[#45DE26] bg-[#072457]">
                              <Image
                                src={Phone}
                                alt=""
                                className="dark:block hidden h-11 w-11"
                              />
                            </span>
                            <input
                              type="number"
                              name="forwardnumber"
                              defaultValue={helo?.forwardnumber}
                              onChange={changeHandler}
                              className="w-full h-12 placeholder-white rounded-r bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                              placeholder="+1245641231"
                            />
                          </div>
                        </div>
                        <div className="flex md:gap-x-12 items-center mt-4 md:justify-start justify-between">
                          <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
                            Concurrence
                          </h3>
                          <input
                            type="number"
                            name="concurrence"
                            defaultValue={helo?.concurrence}
                            onChange={changeHandler}
                            className="md:w-[58px] placeholder-white w-[137px] h-12 rounded bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                            placeholder="10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-9 md:mb-0 mb-9 md:pl-14 md:pr-11 px-7 h-auto flex gap-x-[7.5rem] flex-wrap">
                    <div>
                      <h3 className="dark:text-white text-black font-Exo text-[15px] text-left">
                        Hours
                      </h3>
                    </div>
                    <div>
                      <div className="flex items-center md:gap-9 md:justify-start justify-between flex-wrap">
                        <div>
                          {schedule.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex mt-5 items-center md:gap-9 md:justify-start justify-between flex-wrap"
                              >
                                <label className="flex items-center md:gap-9 md:justify-start justify-between flex-wrap">
                                  <span className="md:w-[90px] cursor-pointer">
                                    {item.day}
                                  </span>
                                  <input
                                    type="checkbox"
                                    defaultValue
                                    className="sr-only peer "
                                    onClick={() => clickHandler(item.id)}
                                  />
                                  <div className="inline-flex relative items-center cursor-pointer w-9 h-2 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[206%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[-2px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                                </label>

                                {item.isEnable ? (
                                  <div className="flex md:gap-7 gap-[7px] md:mt-0 mt-5 items-center">
                                    <div className="relative campaigns font-Exo">
                                      <Select
                                        name="targetVertical"
                                        instanceId="targetVertical"
                                        className="relative z-[7]"
                                        isClearable={false}
                                        styles={colourStyles}
                                        classNamePrefix="select"
                                        options={statusOptions3}
                                        onChange={setStatus3}
                                        value={Status3}
                                        placeholder="7.00 Am"
                                      />
                                    </div>
                                    -
                                    <div className="relative campaigns font-Exo">
                                      <Select
                                        name="targetVertical"
                                        instanceId="targetVertical"
                                        className="relative z-[7]"
                                        isClearable={false}
                                        styles={colourStyles}
                                        classNamePrefix="select"
                                        options={statusOptions3}
                                        onChange={setStatus3}
                                        value={Status3}
                                        placeholder="9.00 Pm"
                                      />
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-9 md:mb-0 mb-9 pl-14 pr-11 h-auto flex gap-x-20 flex-wrap">
                    <div>
                      <h3 className="dark:text-white text-black font-Exo text-[15px] text-left">
                        Geo Locations
                      </h3>
                    </div>
                    <div className="md:w-[487px] w-auto md:h-[200px] h-auto bg-[#021536] rounded-lg px-5 py-4 flex gap-3 flex-wrap">
                      <div>
                        <button className="bg-[#1C2F56] px-5 py-[3px] rounded-3xl relative">
                          <h3 className="dark:text-white text-black font-Exo text-[15px]">
                            Califorina
                          </h3>
                          <div className="inline-flex absolute -top-2 -right-1 justify-center items-center w-4 h-4 text-3xl font-bold text-white bg-[#1D325C] rounded-full iconshadow">
                            <AiOutlineClose aria-hidden="true" />
                          </div>
                        </button>
                      </div>
                      <div>
                        <button className="bg-[#1C2F56] px-5 py-[3px] rounded-3xl relative">
                          <h3 className="dark:text-white text-black font-Exo text-[15px]">
                            New York
                          </h3>
                          <div className="inline-flex absolute -top-2 -right-1 justify-center items-center w-4 h-4 text-3xl font-bold text-white bg-[#1D325C] rounded-full iconshadow">
                            <AiOutlineClose aria-hidden="true" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-12 gap-4 h-[125px] dark:bg-[#061D46] bg-[#021132] bg-opacity-20 dark:bg-opacity-100 w-full">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-[7px] py-2 px-7 items-center bg-[#0096E6] text-white  font-Exo font-semibold text-base"
                      onClick={submitHandle}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-[7px] py-2 px-6 items-center border-2 border-white text-white font-Exo font-semibold text-base"
                      onClick={() => setIsEdit(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Index;
