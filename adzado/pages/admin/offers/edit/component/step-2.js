import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

// icon
import { AiOutlineClockCircle } from "react-icons/ai";

const Index = ({ setIsEdit, step, prevStep, nextStep }) => {
  const [open, setOpen] = useState(true);
  const [currentIndustry, setCurrentIndustry] = useState("");
  const PayoutType = [
    { id: "Phone Call", title: "Phone Call" },
    { id: "Lead", title: "Lead" },
    { id: "CPA", title: "CPA" },
  ];
  const PayoutSettings = [
    { id: "Flat Rate", title: "Flat Rate" },
    { id: "Revshare", title: "Revshare" },
  ];
  const [schedule, setSchedule] = useState([{ id: 1, isEnable: false }]);

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

  const clickHandle = () => {
    if (!currentIndustry) {
      nextStep(step);
    }
  };

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
                  <div className="mx-auto  h-14  w-full flex justify-center items-center dark:bg-[#051F46] bg-[#051F46] rounded-t-md border-b border-white border-opacity-20 relative">
                    <div className="flex items-center justify-center">
                      <h2 className="text-white font-Exo font-medium text-xl ml-2">
                        Edit Offer
                      </h2>
                    </div>
                  </div>
                  <div className="mt-9 md:mb-0 pb-14 pl-14 pr-11 w-full flex flex-col gap-y-6">
                    <div>
                      <div className="flex gap-x-[265px]">
                        <h3 className="text-black dark:text-[lightblue] font-exo font- text-sm text-left">
                          Payout Type
                        </h3>
                      </div>
                      <div>
                        <div className="sm:flex block gap-x-8 my-4">
                          {PayoutType.map((PayoutType) => (
                            <div
                              key={PayoutType.id}
                              className="flex items-center"
                            >
                              <input
                                id={PayoutType.id}
                                name="PayoutType"
                                type="radio"
                                defaultChecked={PayoutType.id === "PayoutType"}
                                className="h-[17px] w-[17px] border-gray-300 text-[#2D9CDB] sm:mt-0 mt-4"
                              />
                              <label
                                htmlFor={PayoutType.id}
                                className="ml-[7px] block text-[15px] font-normal dark:text-white font-Exo sm:mt-0 mt-4"
                              >
                                {PayoutType.title}
                              </label>
                            </div>
                          ))}
                          {schedule.map((item, index) => {
                            return (
                              <div
                                className="md:mt-0 mt-5 md:ml-11 ml-0 items-center md:gap-9 md:justify-start justify-between"
                                key={index}
                              >
                                <label className="items-center md:gap-9 md:justify-start justify-between flex-wrap">
                                <h3 className="text-black dark:text-[#4889B8] font-exo font- text-sm text-left font-medium sm:-mt-10">
                                    Buffer Time
                                  </h3>
                                  <input
                                    type="checkbox"
                                    defaultValue
                                    className="sr-only peer"
                                    onClick={() => clickHandler(item.id)}
                                  />
                                  <div className="flex relative items-center cursor-pointer w-[51px] h-[14px] bg-[#7397B9] focus:outline-none rounded-full  peer-checked:after:translate-x-[160%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[-3px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#09A6FF] mt-[20px]" />
                                </label>
                                {item.isEnable ? (
                                  <div className="mt-4">
                                    <h3 className="text-black dark:text-[#4889B8] font-exo font- text-sm text-left font-medium">
                                      Buffer Time in Seconds
                                    </h3>
                                    <div className="flex max-w-[289px] overflow-hidden">
                                      <span className="inline-flex items-center px-4 rounded-l text-[#0096E6] bg-[#072457] text-[20px]">
                                        <AiOutlineClockCircle />
                                      </span>
                                      <input
                                        type="number"
                                        className="h-12 w-full bg-inputfild py-3 px-6 rounded-r focus:outline-none font-Exo text-[17.8px] text-white offerinput"
                                      />
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                        <div>
                          <h3 className="text-black dark:text-[#4889B8] font-exo font- text-sm text-left font-medium">
                            Buffer Time
                          </h3>
                          <div className="flex gap-x-8 mt-4 items-center">
                            {PayoutSettings.map((Payout) => (
                              <div
                                key={Payout.id}
                                className="flex items-center"
                              >
                                <input
                                  id={Payout.id}
                                  name="Payout"
                                  type="radio"
                                  defaultChecked={Payout.id === "Payout"}
                                  className="h-[17px] w-[17px] border-gray-300 text-[#2D9CDB]"
                                />
                                <label
                                  htmlFor={Payout.id}
                                  className="ml-[7px] block text-[15px] font-normal dark:text-white font-Exo"
                                >
                                  {Payout.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-black dark:text-[#4889B8] font-exo font- text-sm text-left font-medium">
                            Payout Amount
                          </h3>
                          <div className="flex max-w-[289px] overflow-hidden mt-4">
                            <span className="inline-flex items-center px-4 rounded-l text-[#45DE26] bg-[#072457]">
                              $
                            </span>
                            <input
                              type="number"
                              className="h-12 w-full bg-inputfild py-3 px-6 rounded-r focus:outline-none font-Exo text-[17.8px] text-white offerinput"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
                        onClick={clickHandle}
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
