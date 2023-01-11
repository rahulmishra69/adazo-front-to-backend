import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Select from "react-select";
// Icon
import { AiOutlineClose } from "react-icons/ai";

const Index = ({ setIsEdit, nextStep, step }) => {
  const [open, setOpen] = useState(true);
  const [vertical, setVertical] = useState(null);
  const [Skill, setSkill] = useState(null);
  const [status, setStatus] = useState(null);
  const [currentIndustry, setCurrentIndustry] = useState("");

  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const verticalOptions = [
    { value: "Insurance", label: "Insurance" },
    { value: "Insurance-2", label: "Insurance-2" },
    { value: "Insurance-3", label: "Insurance-3" },
    { value: "Insurance-4", label: "Insurance-4" },
  ];

  const SkillOptions = [
    { value: "Insurance", label: "Insurance" },
    { value: "Insurance-2", label: "Insurance-2" },
    { value: "Insurance-3", label: "Insurance-3" },
    { value: "Insurance-4", label: "Insurance-4" },
  ];

  const statusOptions = [
    { value: "Insurance", label: "Insurance" },
    { value: "Insurance-2", label: "Insurance-2" },
    { value: "Insurance-3", label: "Insurance-3" },
    { value: "Insurance-4", label: "Insurance-4" },
  ];

  const clickHandler = () => {
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
                  <div className="mx-auto h-14 w-full flex justify-center items-center dark:bg-[#051F46] bg-[#051F46] rounded-t-md border-b border-white border-opacity-20 relative">
                    <div className="flex items-center justify-center">
                      <h2 className="text-white font-Exo font-medium text-xl ml-2">
                        Edit Offer
                      </h2>
                    </div>
                    <button
                      className="h-[39px] w-[39px] bg-[#041836] absolute right-4 flex justify-center items-center text-white"
                      onClick={() => setIsEdit(false)}
                    >
                      <AiOutlineClose
                        className="text-xl font-bold"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="mt-9 md:mb-0 pb-14 pl-14 pr-11 w-full flex flex-col gap-y-6">
                    <div>
                      <h3 className="text-black dark:text-[lightblue] font-exo font- text-sm text-left">
                        Offer Name
                      </h3>
                      <input
                        type="text"
                        className="mt-1 placeholder-white w-full h-[46px] rounded bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                      />
                    </div>
                    <div className="flex md:flex-nowrap flex-wrap md:gap-x-12 items-center mt-4 w-full">
                      <div className="md:w-1/2 w-full">
                        <h3 className="text-black dark:text-[lightblue] font-exo font- text-sm text-left">
                          Vertical
                        </h3>
                        <input
                          type="text"
                          className="placeholder-white w-full h-[46px] rounded bg-inputfild px-5 py-3 focus:outline-none font-Exo text-[15px] text-white"
                        />
                      </div>
                      <div className="md:w-1/2 w-full mt-5 md:mt-0">
                        <h3 className="text-black dark:text-[lightblue] font-exo font- text-sm text-left">
                          Sub-Vertical
                        </h3>
                        <Select
                          name="targetVertical"
                          instanceId="targetVertical"
                          className="relative z-30 offeredit whitespace-nowrap"
                          isClearable={false}
                          styles={colourStyles}
                          classNamePrefix="select"
                          options={verticalOptions}
                          onChange={setVertical}
                          value={vertical}
                          placeholder="Health Insurance"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-nowrap flex-wrap md:gap-x-12 items-center mt-4 w-full">
                      <div className="md:w-1/2 w-full">
                        <h3 className="text-black dark:text-[lightblue] font-exo font- text-sm text-left">
                          Skill Level
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
                          placeholder="Intermediate"
                        />
                      </div>
                      <div className="md:w-1/2 w-full mt-5 md:mt-0">
                        <h3 className="text-black dark:text-[lightblue] font-exo font- text-sm text-left">
                          Offer Status
                        </h3>
                        <Select
                          name="targetVertical"
                          instanceId="targetVertical"
                          className="relative z-[24] offeredit"
                          isClearable={false}
                          styles={colourStyles}
                          classNamePrefix="select"
                          options={statusOptions}
                          onChange={setStatus}
                          value={status}
                          placeholder="Active"
                        />
                      </div>
                    </div>
                    <div className="flex  w-full">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-[7px] py-2 px-7 items-center bg-[#0096E6] text-white  font-Exo font-semibold text-base"
                        onClick={clickHandler}
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
