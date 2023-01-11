// Next
import Image from 'next/image'

// Images
import chart from '../../../../public/images/chart.svg'
import chart2 from '../../../../public/images/chartred.svg'

// Icons
import { HiDotsVertical } from 'react-icons/hi'

const Capcardview = () => {
  return (
    <div className="bg-white dark:bg-[#051d43] xl:min-w-[376px] w-auto rounded-3xl h-[508px] my-5 py-10 md:pl-10 md:pr-7 px-5">
      <div className="flex items-center justify-between pr-8">
        <h2 className="text-black dark:text-[lightblue] font-exo font-normal text-2xl">
          KPIs
        </h2>
        <HiDotsVertical className="text-xl" />
      </div>
      <div>
        <ul className="mt-8 card">
          <li className="border-b-[1px] pb-6 border-primary-blue">
            <div className="pr-8">
              <h3 className="text-black dark:text-[lightblue] font-exo font-normal text-[15.44px] leading-6">
                Current Revenue
              </h3>
              <div className="flex items-center justify-between">
                <h1 className="text-black dark:text-white font-exo font-normal text-4xl leading-[66.65px]">
                  $355k
                </h1>
                <div className="bg-[#45DE2633] h-10 w-24 rounded flex justify-center items-center">
                  <div className="flex gap-2">
                    <Image src={chart} alt="charticon"/>
                    <h4 className="dark:text-[#45DE26] font-exo font-medium text-sm leading-6">
                      43.23%
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="border-b-[1px] pb-6 border-primary-blue mt-6">
            <div className="pr-8">
              <h3 className="text-black dark:text-[lightblue] font-exo font-normal text-[15.44px] leading-6">
              Total Calls
              </h3>
              <div className="flex items-center justify-between">
                <h1 className="text-black dark:text-white font-exo font-normal text-4xl leading-[66.65px]">
                12.5k
                </h1>
                <div className="bg-[#45DE2633] h-10 w-24 rounded flex justify-center items-center">
                  <div className="flex gap-2">
                    <Image src={chart} alt="charticon"/>
                    <h4 className="dark:text-[#45DE26] font-exo font-medium text-sm leading-6">
                      43.23%
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="border-b-[1px] pb-6 border-primary-blue mt-6">
            <div className="pr-8">
              <h3 className="text-black dark:text-[lightblue] font-exo font-normal text-[15.44px] leading-6">
              Total Leads
              </h3>
              <div className="flex items-center justify-between">
                <h1 className="text-black dark:text-white font-exo font-normal text-4xl leading-[66.65px]">
                78.5k
                </h1>
                <div className="bg-[#BB1A1A33] h-10 w-24 rounded flex justify-center items-center">
                  <div className="flex gap-2">
                    <Image src={chart2} alt="charticon"/>
                    <h4 className="dark:text-[#F60707] font-exo font-medium text-sm leading-6">
                      3.2%
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Capcardview
