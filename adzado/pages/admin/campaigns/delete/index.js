// React
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteData, getData } from "../../../../redux/action";
import { toast } from "react-toastify";
const Index = ({ setShow, deleteDatas }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const removeData = async (id) => {
    const result = await dispatch(deleteData(id))
      .then((resp) => {
        dispatch(getData());

        toast(resp?.payload?.message, {autoClose: 1500})
      })
      .catch((error) => {
        console.log("error =====>", error);
      });
    setShow(false);
  };

  return (
    <div onClick={() => setShow(false)}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[99999]" onClose={setOpen}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-xl dark:dark linear bg-white sm:w-[655px] max-h-[317px]">
                  <div className="pt-9">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-">
                        <MdDeleteOutline
                          className="h-10 w-10 dark:text-white text-black"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-medium font-Exo dark:text-white text-black md:w-[392px] w-auto text-center mx-auto"
                        >
                          Are you sure you want to delete this campaign?
                        </Dialog.Title>
                        <div className="mt-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-center items-center md:mt-[39px] gap-4 h-[111px] bg-[#061D46] w-full">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-[7px] w-[148px] h-[43px] items-center bg-[#F52727] text-white  font-Exo font-semibold text-base"
                      onClick={() => {
                        removeData(deleteDatas);
                      }}
                    >
                      Yes, Delete It
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-[7px] w-[72px] h-[43px] items-center border-2 border-white text-white dark:bg-transparent bg-[#0D3E72]  font-Exo font-semibold text-base"
                      onClick={() => setShow(false)}
                    >
                      No
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
