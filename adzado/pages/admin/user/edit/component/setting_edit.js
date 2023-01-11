import React from "react";
import { useState } from "react";
import Select from "react-select";

const Index = ({ setIsEdit }) => {
  const [City, setCity] = useState(null);
  const [State, setState] = useState(null);

  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
      };
    },
  };
  const rowOptions = [
    { value: "San Diego1", label: "San Diego1" },
    { value: "San Diego2", label: "San Diego2" },
    { value: "San Diego3", label: "San Diego3" },
  ];
  const StateOptions = [
    { value: "Active", label: "Active" },
    { value: "Suspended", label: "Suspended" },
    { value: "Archived", label: "Archived" },
    { value: "Locked", label: "Locked" },
  ];

  return (
    <div onClick={() => setIsEdit(false)}>
      <div className="md:gap-x-12 items-center bg-gradient-to-b from-[#1e4b8966] pt-14 pb-28 md:px-8  rounded-lg">
        <div>
          <div className="flex md:gap-x-6 flex-wrap items-center mt-4 md:justify-start justify-center">
            <h3 className="dark:text-white text-black font-Exo text-[15px] md:w-32 text-left">
              Account Manager
            </h3>
            <div className="flex rounded-md ml-2 Company md:mt-0 mt-5">
              <Select
                name="City"
                instanceId="City"
                className="relative z-30"
                isClearable={false}
                classNamePrefix="select"
                styles={colourStyles}
                options={rowOptions}
                onChange={setCity}
                value={City || ""}
                placeholder="Assign Account Manager"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:gap-x-6 items-center mt-4 md:justify-start justify-center">
            <h3 className="dark:text-white text-black font-Exo text-[15px] w-32 md:text-right text-left">
              Status
            </h3>
            <div className="flex rounded-md ml-2 Company md:mt-0 mt-5">
              <Select
                name="State"
                instanceId="State"
                className="relative z-20"
                isClearable={false}
                classNamePrefix="select"
                styles={colourStyles}
                options={StateOptions}
                onChange={setState}
                value={State || ""}
                placeholder="Suspended"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
