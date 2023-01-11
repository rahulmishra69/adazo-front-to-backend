import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Select from "react-select";

const Index = ({ setIsEdit, step, prevStep, nextStep }) => {
  const [Status3, setStatus3] = useState(null);
  const [status, setStatus] = useState(null);
  const [open, setOpen] = useState(true);
  const [click, setClick] = useState(false);
  const [schedule, setSchedule] = useState([
    { id: 1, day: "Sunday", isEnable: false },
    { id: 2, day: "Monday", isEnable: false },
    { id: 3, day: "Tuseday", isEnable: false },
    { id: 4, day: "Wednasday", isEnable: false },
    { id: 5, day: "Thursday", isEnable: false },
    { id: 6, day: "Friday", isEnable: false },
    { id: 7, day: "Saturday", isEnable: false },
  ]);
  const statusOptions3 = [
    { value: "0", label: "0" },
    { value: "2", label: "2" },
    { value: "4", label: "4" },
    { value: "6", label: "6" },
  ];
  const PayoutType = [
    { id: "Phone Call", title: "Phone Call" },
    { id: "Lead", title: "Lead" },
    { id: "CPA", title: "CPA" },
  ];
  const PayoutSettings = [
    { id: "Flat Rate", title: "Flat Rate" },
    { id: "Revshare", title: "Revshare" },
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
  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const statusOptions = [
    {
      value: "(UTC - 08:00) Pacific Time (US)",
      label: "(UTC - 08:00) Pacific Time (US)",
    },
    {
      value: "(UTC - 08:00) Pacific Time (UK)",
      label: "(UTC - 08:00) Pacific Time (UK)",
    },
    {
      value: "(UTC - 08:00) Pacific Time (India)",
      label: "(UTC - 08:00) Pacific Time (India)",
    },
  ];

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
                <Dialog.Panel className="relative transform rounded-xl dark:dark radial bg-white lg:w-[670px]">
                  <div className="mx-auto  h-14  sm:w-full flex justify-center items-center dark:bg-[#051F46] bg-[#051F46] rounded-t-md border-b border-white border-opacity-20 relative">
                    <div className="flex items-center justify-center">
                      <h2 className="text-white font-Exo font-medium text-xl ml-2">
                        Edit Offer
                      </h2>
                    </div>
                  </div>
                  <div className="mt-9 md:mb-0 pb-14 pl-14 pr-11 w-full flex flex-col gap-y-6">
                    <div className="md:flex block items-center justify-between flex-wrap gap-20">
                      <div>
                        <div>
                          <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-[25px] text-left">
                            Schedule
                          </h3>
                          <h3 className="text-black dark:text-white sm:w-[173px] w-auto font-exo mt-4 text-xs text-left font-medium">
                            Enter the days and hours calls are accepted
                          </h3>
                        </div>
                        <div>
                          <div className="flex gap-x-8 my-4 items-center">
                            <div className="md:mt-0 mt-5 flex items-center md:gap-9 md:justify-start justify-between">
                              <label className="flex items-center gap-4 md:justify-start justify-between flex-wrap">
                                <input
                                  type="checkbox"
                                  defaultValue
                                  className="sr-only peer"
                                  onChange={() => setClick(!click)}
                                />
                                <div className="inline-flex relative items-center cursor-pointer w-[51px] h-[14px] bg-[#7397B9] focus:outline-none rounded-full  peer-checked:after:translate-x-[160%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[-3px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#09A6FF]" />
                                <span className="dark:text-[#4889B8] text-sm font-medium font-Exo">
                                  Available 24/7
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-black dark:text-[#4889B8] font-exo font- text-sm text-left font-medium">
                          Time Zone
                        </h3>
                        <div className="flex">
                          <Select
                            name="targetVertical"
                            instanceId="targetVertical"
                            className="relative z-[24] offeredit whitespace-nowrap md:w-full"
                            isClearable={false}
                            styles={colourStyles}
                            classNamePrefix="select"
                            options={statusOptions}
                            onChange={setStatus}
                            value={status}
                            placeholder="(UTC - 08:00) Pacific Time (US)"
                          />
                        </div>
                      </div>
                    </div>
                    {click && (
                      <div className="border-t border-[#76adf133]">
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
                                <div className="inline-flex relative items-center cursor-pointer w-9 h-2 bg-[#7397B9] peer-focus:outline-none rounded-full peer dark:bg-[#7397B9] peer-checked:after:translate-x-[206%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[-2px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all  peer-checked:bg-[#09A6FF]" />
                              </label>
                              {item.isEnable ? (
                                <div className="flex md:gap-7 gap-[7px] md:mt-0 mt-5 items-center">
                                  <div className="relative campaigns font-Exo">
                                    <Select
                                      name="targetVertical"
                                      instanceId="targetVertical"
                                      className="relative"
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
                                      className="relative"
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
                    )}
                    <div className="flex  w-full justify-between items-center mt-7">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-[7px] py-2 px-7 items-center bg-[#F52727] text-white  font-Exo font-semibold text-base"
                        onClick={() => prevStep(step)}
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-[7px] py-2 px-7 items-center bg-[#0096E6] text-white  font-Exo font-semibold text-base"
                        onClick={() => nextStep(step)}
                      >
                        Next
                      </button>
                    </div>
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
