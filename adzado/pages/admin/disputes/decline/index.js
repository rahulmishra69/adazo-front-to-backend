import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Index = ({ setDecline }) => {
  const [open, setOpen] = useState(true);

  return (
    <div onClick={() => setDecline(false)}>
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
                  <div className="mt-9 md:mb-0 pb-14 md:pl-14 md:pr-11 px-4 md:px-0 w-full flex-col gap-y-6">
                    <div>
                      <div className="gap-[14px] sm:flex-nowrap flex-wrap">
                        <div className="mt-16">
                          <h3 className="text-black dark:text-[#4889B8] font-exo text-xs text-center font-normal">
                            Please provide a reason why this dispute was
                            declined.
                          </h3>
                          <div className="overflow-hidden mt-4">
                            <textarea className=" h-40 w-[426px] bg-inputfild py-3 px-6 rounded resize-none focus:outline-none font-Exo text-[17.8px] text-white offerinput"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-center items-center md:mt-[39px] gap-4 h-[111px] bg-[#061D46] w-full">
                    <button
                      type="button"
                      onClick={() => setDecline(false)}
                      className="inline-flex justify-center rounded-[7px] w-24 h-[43px] items-center bg-[#0096E6] text-white  font-Exo font-semibold text-base"
                    >
                      Process
                    </button>
                    <button
                      type="button"
                      onClick={() => setDecline(false)}
                      className="inline-flex justify-center rounded-[7px] w-20 h-[43px] items-center border-2 border-white text-white dark:bg-transparent bg-[#0D3E72]  font-Exo font-semibold text-base"
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
