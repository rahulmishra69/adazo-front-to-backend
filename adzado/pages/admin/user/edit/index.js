import React from "react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Profile from "./component/profile_edit";
import Company from "./component/company_edit";
import Notification from "./component/notification_edit";
import Setting from "./component/setting_edit";
import Link from "next/link";
// Icon
import Penicondark from "../../../../public/images/pencilSimpledark.svg";

const Index = ({ setIsEdit }) => {
  const [show, setShow] = useState(true);
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[999999999]"
          onClose={() => setShow(false)}
        >
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
                <Dialog.Panel className="relative transform rounded-xl dark:dark linear bg-white md:w-[936px]">
                  <div className="mx-auto flex h-20 w-full items-center justify-center dark:bg-[#021132] bg-[#021132]  dark:bg-opacity-20 bg-opacity-20 border-b border-white border-opacity-20">
                    <Image
                      src={Penicondark}
                      alt=""
                      className="dark:hidden block"
                    />
                    <h2 className="dark:text-white text-black font-Exo font-medium text-xl ml-2">
                      Edit User
                    </h2>
                  </div>
                  <div className="mt-9 md:mb-0 mb-9 md:pl-10 md:pr-9 px-4 h-auto w-full">
                    <div className="flex gap-x-[8px] flex-wrap md:mb-0 mb-5">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-[#07254e4d] w-[93px] h-[39px] justify-center text-base font-medium text-white shadow-sm focus:outline-none"
                      >
                        <Link
                          className={
                            " " +
                            (openTab === 1
                              ? "border-[#0096E6] bg-[#07254E] border-b-4 w-[93px] h-[39px] justify-center items-center flex rounded-t-md"
                              : "")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                          }}
                          // data-toggle="tab"
                          href="#link1"
                          role="tablist"
                        >
                          Profile
                        </Link>
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-[#07254e4d] w-[93px] h-[39px] justify-center text-base font-medium text-white shadow-sm focus:outline-none"
                      >
                        <Link
                          className={
                            "" +
                            (openTab === 2
                              ? "border-[#0096E6] bg-[#07254E] border-b-4 w-[93px] h-[39px] justify-center items-center flex rounded-t-md"
                              : "")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                          }}
                          data-toggle="tab"
                          href="#link2"
                          role="tablist"
                        >
                          Company
                        </Link>
                      </button>
                      <button
                        type="buttton"
                        className="inline-flex items-center rounded-md bg-[#07254e4d] w-[165px] h-[39px] justify-center text-base font-medium text-white shadow-sm focus:outline-none"
                      >
                        <Link
                          className={
                            " " +
                            (openTab === 3
                              ? "border-[#0096E6] bg-[#07254E] border-b-4 w-[165px] h-[39px] justify-center items-center flex rounded-t-md"
                              : "")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(3);
                          }}
                          data-toggle="tab"
                          href="#link3"
                          role="tablist"
                        >
                          Notifications
                        </Link>
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-[#07254e4d] w-[93px] h-[39px] justify-center text-base font-medium text-white shadow-sm focus:outline-none"
                      >
                        <Link
                          className={
                            " " +
                            (openTab === 4
                              ? "border-[#0096E6] bg-[#07254E] border-b-4 w-[93px] h-[39px] justify-center items-center flex rounded-t-md"
                              : "")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(4);
                          }}
                          data-toggle="tab"
                          href="#link3"
                          role="tablist"
                        >
                          Settings
                        </Link>
                      </button>
                      <div className="w-full">
                        <div>
                          <div>
                            <div
                              className={openTab === 1 ? "block" : "hidden"}
                              id="link1"
                            >
                              <Profile setIsEdit={setIsEdit} />
                            </div>
                            <div
                              className={openTab === 2 ? "block" : "hidden"}
                              id="link2"
                            >
                              <Company setIsEdit={setIsEdit} />
                            </div>
                            <div
                              className={openTab === 3 ? "block" : "hidden"}
                              id="link3"
                            >
                              <Notification />
                            </div>
                            <div
                              className={openTab === 4 ? "block" : "hidden"}
                              id="link2"
                            >
                              <Setting />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4 h-[125px] dark:bg-[#061D46] bg-[#021132] bg-opacity-20 dark:bg-opacity-100 w-full">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-[7px] py-2 px-7 items-center bg-[#0096E6] text-white  font-Exo font-semibold text-base"
                      onClick={() => setIsEdit(false)}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-[7px] py-2 px-6 items-center border-2 border-white text-white font-Exo font-semibold text-base"
                      onClick={() => setIsEdit(false)}
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
