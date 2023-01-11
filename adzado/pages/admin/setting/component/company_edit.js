import React from "react";
import Image from "next/image";

// Icon
import { MdKeyboardArrowRight } from "react-icons/md";

// Image
import Ringbalogo from "../.././../../public/images/ringbalogo.svg";
import leadeprosper from "../.././../../public/images/leadeprosper.svg";
import Stripe from "../.././../../public/images/stripe.svg";

const people = [
  {
    id: 1,
    url: Ringbalogo,
    Name: "Ringba",
    status: "Connected",
    connection: "Disconnect",
  },
  {
    id: 2,
    url: leadeprosper,
    Name: "",
    status: "Connected",
    connection: "Disconnect",
    bg:"#682CE7"
  },
  {
    id: 3,
    url: Stripe,
    Name: "",
    status: "Not Connected",
    connection: "Connect",
    bg:"#734EDC"
  },
  {
    id: 4,
    url: Stripe,
    Name: "",
    status: "Not Connected",
    connection: "Connect",
    bg:"#4EB1DC"
  },
  {
    id: 5,
    url: Stripe,
    Name: "",
    status: "Not Connected",
    connection: "Connect",
    bg:"#E72C7A"
  },
];



const Company_edit = () => {
  return (
    <div>
      <>
        <div className={`md:gap-x-12 items-center bg-gradient-to-b from-[#1e4b8966] pt-14 pb-16 lg:px-[72px] px-2 rounded-lg xl:w-[90%] w-ful`}>
          <div className="flex gap-x-[15px] flex-wrap integrations-card">
            {people.map((data, index) => (
              <div key={index}>
                <div className="lg:w-[350px] w-full h-[208px] bg-[#07264E] rounded-[19px] relative overflow-hidden px-7 py-8 flex flex-col justify-between after:h-[479px] after:w-[479px] after:rounded-full after:absolute after:top-[-142%] after:left-[-355px] after:bg-[#2C7EE7] after:blur-[80px] after:opacity-40">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="flex items-center">
                      <Image
                        src={data.url}
                        alt="Ringbalogo"
                        className="mix-blend-screen"
                      />
                      <h3 className="text-white text-[21px] font-normal font-Exo -ml-3">
                        {data.Name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-2 md:justify-start justify-center sm:w-auto w-full">
                      <div className="flex items-center gap-x-2">
                        <span className="w-[14px] h-[14px] bg-[#45DE26] rounded-full relative after:h-[14px] after:w-[14px] after:rounded-full after:absolute after:top-0 after:left-0 after:bg-[#45DE26] after:blur-[6px] block"></span>
                        <span>{data.status}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className={`${
                      data.connection == "Disconnect"
                        ? "dark:border-[#F52727]"
                        : "dark:border-[#0096E6]"
                    } border py-2 rounded-md flex gap-x-[6px] items-center justify-center`}
                  >
                    {data.connection} <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Company_edit;
