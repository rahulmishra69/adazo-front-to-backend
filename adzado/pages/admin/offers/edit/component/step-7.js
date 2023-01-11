import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

// icon
import { AiOutlineClockCircle } from "react-icons/ai";

const Index = ({ setIsEdit, step, prevStep, nextStep }) => {
  const [open, setOpen] = useState(true);
  const [currentIndustry, setCurrentIndustry] = useState("");

  const [schedule, setSchedule] = useState([{ id: 1, isEnable: false }]);


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
                  <div className="mx-auto  h-14  sm:w-full w-[calc(100%-2rem)] flex justify-center items-center dark:bg-[#051F46] bg-[#051F46] rounded-t-md border-b border-white border-opacity-20 relative">
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
                          Additional Stats (Optional)
                        </h3>
                        <h3 className="text-black dark:text-white w-auto font-exo my-4 text-xs text-left font-medium">
                          What extra steps are required before sending traffic
                          to this offer
                        </h3>
                      </div>
                      <div className="flex gap-[14px] sm:flex-nowrap flex-wrap">
                        <div className="mt-4">
                          <h3 className="text-black dark:text-[#4889B8] font-exo text-xs text-left font-medium">
                            Recommended Daily Ad Spend
                          </h3>
                          <div className="flex overflow-hidden mt-4">
                            <span className="inline-flex items-center px-4 rounded-l text-[#45DE26] bg-[#072457]">
                              $
                            </span>
                            <input
                              type="number"
                              className="h-12 w-full bg-inputfild py-3 px-6 rounded-r focus:outline-none font-Exo text-[17.8px] text-white offerinput"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-black dark:text-[#4889B8] font-exo font- text-xs text-left font-medium">
                            Recommended Daily Ad Spend
                          </h3>
                          <div className="flex overflow-hidden mt-4">
                            <span className="inline-flex items-center px-4 rounded-l text-[#45DE26] bg-[#072457]">
                              $
                            </span>
                            <input
                              type="number"
                              className="h-12 w-full bg-inputfild py-3 px-6 rounded-r focus:outline-none font-Exo text-[17.8px] text-white offerinput"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="text-black dark:text-[#4889B8] font-exo font- text-xs text-left font-medium">
                            Recommended Daily Ad Spend
                          </h3>
                          <div className="flex overflow-hidden mt-4">
                            <span className="inline-flex items-center px-4 rounded-l text-[#0096E6] bg-[#072457] text-base font-medium">
                              %
                            </span>
                            <input
                              type="number"
                              className="h-12 w-full bg-inputfild py-3 px-6 rounded-r focus:outline-none font-Exo text-[17.8px] text-white offerinput"
                            />
                          </div>
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
