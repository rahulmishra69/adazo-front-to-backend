import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Select from "react-select";
// Icon
import { AiOutlineClose } from "react-icons/ai";

const Index = ({ setPopup }) => {
  const [open, setOpen] = useState(true);
  const [Skill, setSkill] = useState(null);

  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const SkillOptions = [
    { value: "Dylan Field", label: "Dylan Field" },
    { value: "Dylan Field-2", label: "Dylan Field-2" },
    { value: "Dylan Field-3", label: "Dylan Field-3" },
    { value: "Dylan Field-4", label: "Dylan Field-4" },
  ];

  return (
    <div onClick={() => setPopup(false)}>
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
                <Dialog.Panel className="relative transform rounded-xl dark:dark radial bg-white lg:w-[493px]">
                  <div className="h-14 w-full flex dark:bg-[#051F46] bg-[#051F46] rounded-t-md relative">
                    <div className="flex items-center justify-center">
                      <h2 className="text-white font-Exo font-medium text-xl pl-14 mt-6">
                        Assign Affiliate Manager
                      </h2>
                    </div>
                    <button
                      className="h-[39px] w-[39px] bg-[#041836] absolute right-4 flex justify-center items-center text-white"
                      onClick={() => setPopup(false)}
                    >
                      <AiOutlineClose
                        className="text-xl font-bold"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="mt-9 md:mb-0 pb-8 pl-14 pr-11 w-full flex flex-col gap-y-6">
                    <div className="flex md:flex-nowrap flex-wrap md:gap-x-12 items-center w-full">
                      <div className="md:w-64 w-full">
                        <h3 className="text-black dark:text-[#4889B8] mb-1 font-exo font-medium text-sm text-left">
                        Affiliate Managers
                        </h3>
                        <Select
                          name="targetVertical"
                          instanceId="targetVertical"
                          className="relative z-[24] offeredit"
                          isClearable={false}
                          styles={colourStyles}
                          classNamePrefix="select"
                          options={SkillOptions}
                          onChange={setSkill}
                          value={Skill}
                          placeholder="Dylan Field"
                        />
                      </div>
                    </div>
                    <div className="flex  w-full">
                      <button
                        type="button"
                        onClick={() => setPopup(false)}
                        className="inline-flex justify-center rounded-[7px] py-2 px-7 items-center bg-[#0096E6] text-white  font-Exo font-semibold text-base"
                      >
                        Add
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
