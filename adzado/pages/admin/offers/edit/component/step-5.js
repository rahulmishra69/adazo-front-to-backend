import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Index = ({ setIsEdit, step, prevStep, nextStep }) => {
  const [open, setOpen] = useState(true);
  const PayoutSettings = [
    { id: "State", title: "State" },
    { id: "Zip Code", title: "Zip Code" },
  ];
  const States = [
    { id: 1, name: "Social" },
    { id: 2, name: "Email" },
    { id: 3, name: "Display" },
    { id: 4, name: "OnShare Call Center" },
    { id: 5, name: "Search" },
    { id: 6, name: "Native" },
    { id: 7, name: "Print" },
    { id: 8, name: "Nearshare Call Center" },
    { id: 9, name: "SMS" },
    { id: 10, name: "Co-Reg" },
    { id: 11, name: "Marketplace" },
    { id: 12, name: "Offshore Call Center" },
    
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
                  <div className="mx-auto  h-14  sm:w-full w-[calc(100%-2rem)] flex justify-center items-center dark:bg-[#051F46] bg-[#051F46] rounded-t-md border-b border-white border-opacity-20 relative">
                    <div className="flex items-center justify-center">
                      <h2 className="text-white font-Exo font-medium text-xl ml-2">
                        Edit Offers
                      </h2>
                    </div>
                  </div>
                  <div className="mt-9 md:mb-0 pb-14 pl-14 pr-11 w-full flex flex-col gap-y-6">
                    <div className="flex items-center">
                      <div>
                        <div>
                          <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-[25px] text-left">
                            Accepted Traffic Source(s)
                          </h3>
                          <h3 className="text-black dark:text-white w-auto font-exo mt-4 text-xs text-left font-medium">
                            Select which traffic sources are accepted for this
                            offer.
                          </h3>
                        </div>
                        <div className="mt-4">
                          <div>
                            <div className="sm:flex block lg:flex-col flex-row h-[150px] flex-wrap lg:overflow-y-visible overflow-y-auto">
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
                                      className="select-none text-white text-[13.38px] font-Exo font-normal"
                                    >
                                      {State.name}
                                    </label>
                                  </div>
                                </div>
                              ))}
                            </div>
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
