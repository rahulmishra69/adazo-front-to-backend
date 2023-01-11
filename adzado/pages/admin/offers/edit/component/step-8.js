import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Index = ({ setIsEdit, step, prevStep }) => {
  const [open, setOpen] = useState(true);

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
                  <div className="mt-9 md:mb-0 pb-9 pl-14 pr-11 w-full flex flex-col gap-y-2">
                    <div>
                      <div>
                        <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-[20px] text-left">
                          Offer Description
                        </h3>
                        <h3 className="text-black dark:text-white w-auto font-exo mt-2 mb-4 text-[12.32px] text-left font-medium">
                          Give a brief description about the offer and why
                          someone would want to run it.
                        </h3>
                        <div className="">
                          <textarea
                            cols="30"
                            className="w-full dark:bg-[#021536] h-[138px] outline-none p-3 placeholder:text-sm font-Exo placeholder:font-medium placeholder:text-[#365182]"
                            placeholder=""
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-[20px] text-left">
                          Disclaimers
                        </h3>
                        <h3 className="text-black dark:text-white w-auto font-exo mt-2 mb-4 text-[12.32px] text-left font-medium">
                          Include any disclaimers the publishers will read to
                          include in their advertisment and or landing page
                        </h3>
                        <div className="">
                          <textarea
                            cols="30"
                            className="w-full dark:bg-[#021536] h-[138px] outline-none p-3 placeholder:text-sm font-Exo placeholder:font-medium placeholder:text-[#365182]"
                            placeholder=""
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3 className="text-black dark:text-[#4889B8] font-exo font-medium text-[20px] text-left">
                          Guidelines
                        </h3>
                        <h3 className="text-black dark:text-white w-auto font-exo mt-2 mb-4 text-[12.32px] text-left font-medium">
                          Includes any do’s and don’ts when it comes to running
                          this offer
                        </h3>
                        <div className="">
                          <textarea
                            cols="30"
                            className="w-full dark:bg-[#021536] h-[138px] outline-none p-3 placeholder:text-sm font-Exo placeholder:font-medium placeholder:text-[#365182]"
                            placeholder=""
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
                        onClick={() => setIsEdit(false)}
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
