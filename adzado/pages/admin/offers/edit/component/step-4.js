import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Index = ({ setIsEdit, step, prevStep, nextStep }) => {
  const [open, setOpen] = useState(true);
  const PayoutSettings = [
    { id: "State", title: "State" },
    { id: "ZipCode", title: "Zip Code" },
  ];
  const States = [
    { id: 1, name: "Alabama" },
    { id: 2, name: "Alaska" },
    { id: 3, name: "Arizona" },
    { id: 4, name: "Arkansas" },
    { id: 5, name: "California" },
    { id: 6, name: "Colorado" },
    { id: 7, name: "Connecticut" },
    { id: 8, name: "Delaware" },
    { id: 9, name: "District of Columbia" },
    { id: 10, name: "Florida" },
    { id: 11, name: "Georgia" },
    { id: 14, name: "Hawai" },
    { id: 15, name: "Arkansas" },
    { id: 16, name: "California" },
    { id: 17, name: "Colorado" },
    { id: 18, name: "Connecticut" },
    { id: 19, name: "Delaware" },
    { id: 20, name: "District of Columbia" },
    { id: 20, name: "Florida" },
    { id: 21, name: "Georgia" },
    { id: 22, name: "Hawai" },
    { id: 23, name: "Arkansas" },
    { id: 24, name: "California" },
    { id: 25, name: "Colorado" },
    { id: 26, name: "Connecticut" },
    { id: 27, name: "Delaware" },
    { id: 28, name: "District of Columbia" },
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
                  <div className="mx-auto h-14 sm:w-full flex justify-center items-center dark:bg-[#051F46] bg-[#051F46] rounded-t-md border-b border-white border-opacity-20 relative">
                    <div className="flex items-center justify-center">
                      <h2 className="text-white font-Exo font-medium text-xl ml-2">
                        Edit Offer
                      </h2>
                    </div>
                  </div>
                  <div className="mt-9 md:mb-0 pb-14 pl-14 pr-11 w-full flex flex-col gap-y-6">
                    <div>
                      <div>
                        <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-[25px] text-left">
                          Targeting Method
                        </h3>
                        <h3 className="text-black dark:text-white w-auto font-exo mt-4 text-xs text-left font-medium">
                          Enter the States or Zip Code that the buyer for this
                          offer accepts
                        </h3>
                      </div>
                      <div>
                        <div className="flex gap-x-8 my-4 items-center">
                          <div className="md:mt-0 mt-5 flex items-center md:gap-9 md:justify-start justify-between">
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
                                    className="h-[17px] w-[17px] border-white text-[#2D9CDB]"
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
                        </div>
                        <div className="block">
                          <div className="flex justify-start gap-x-3 mb-4 items-center border-t w-full border-[#76adf133] pt-5">
                            <button className="text-[#0096E6] font-Exo font-normal font-sm underline underline-offset-2">
                              Select All
                            </button>
                            <div className="bg-[#185090] h-[11px] w-[1px] relative after:h-full"></div>
                            <button className="text-[#0096E6] font-Exo font-normal font-sm underline underline-offset-2">
                              Select None
                            </button>
                          </div>
                          <div className="flex lg:flex-col flex-row h-[324px] flex-wrap overflow-y-auto">
                            {States.map((State, StateIdx) => (
                              <div
                                key={StateIdx}
                                className="relative flex items-start py-2 mr-5"
                              >
                                <div className="flex mr-3 h-5 items-center">
                                  <input
                                    id={`State-${State.id}`}
                                    name={`State-${State.id}`}
                                    type="checkbox"
                                    className="table-checkbox  h-[17.79px] w-[17.79px] rounded accent-[#0096E6] text-[#0096E6] focus:outline-none"
                                  />
                                </div>
                                <div className="min-w-0  text-sm">
                                  <label
                                    htmlFor={`State-${State.id}`}
                                    className="select-none text-white text-[13.38px] font-Exo font-medium"
                                  >
                                    {State.name}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="hidden">
                          <textarea
                            cols="30"
                            className="w-full dark:bg-[#021536] h-[138px] outline-none p-3 placeholder:text-sm font-Exo placeholder:font-medium placeholder:text-[#365182]"
                            placeholder="Use commas to separate zips. All non-numerical values will be removed."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full justify-between items-center mt-7">
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
