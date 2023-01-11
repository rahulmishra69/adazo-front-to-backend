import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsFillPlayFill } from "react-icons/bs";

const Index = ({ setRecording }) => {
  const [open, setOpen] = useState(true);

  return (
    <div onClick={() => setRecording(false)}>
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
                <Dialog.Panel className="relative transform rounded-xl bg-gradient-to-b from-[#113782] to-[#0D4F96]  bg-white lg:w-[496px]">
                  <div className=" md:px-[61px] py-[19px] w-full flex-col gap-y-6">
                    <div className="flex items-center justify-center gap-x-2">
                    <div className="w-[248px] bg-gray-200 rounded-full h-1 dark:bg-white">
                    <div
                    className="bg-[#0096E6] h-1 rounded-full"
                    style={{ width: "4%" }}
                    ></div>
                    </div>
                    <span className="text-[15px] font-Nunito  font-bold  dark:text-[#0096E6]">
                      00.00
                    </span>
                    </div>
                    <button className="bg-white w-[33px] h-[33px] rounded-full flex justify-center items-center mx-auto mt-3">
                      <BsFillPlayFill className="text-black text-xl" />
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
