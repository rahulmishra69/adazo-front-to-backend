// React
import { useState } from 'react'
import Select from 'react-select'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'

// Next
import Link from 'next/link'
import Image from 'next/image'

const Pricing = () => {
  const [targetVertical, setTargetVertical] = useState(null)
  const [typeOfLead, setTypeOfLead] = useState(null)
  const [sliderValue, setSliderValue] = useState(0)

  return (
    <section className='pt-20 shadow-2xl pb-28'>
      <div className='container px-5 mx-auto'>
        <div className='flex flex-col items-center justify-between w-full gap-5 lg:flex-row'>
          <div className='py-5 pr-5 border-r-0 lg:w-1/5 lg:border-r border-primary-blue'>
            <h3 className='text-[37px] font-bold lg:leading-[49px] capitalize text-medium-dark-gray'>
              Calculate your cost per acquisition
            </h3>
            <p className='mt-5 capitalize !text-medium-gray lg:!leading-[24px]'>
              Simply set your desired campaign details to find out Key KPIs.
            </p>
            <Link
              href='/signup'
              className='flex items-center w-56 gap-5 px-8 py-4 text-xl font-medium transition duration-200 ease-in-out delay-75 border rounded-lg group border-adzado bg-adzado dark:hover:bg-transparent text-medium-dark-gray hover:bg-white hover:text-adzado mt-7'
            >
              Get Started
              <svg
                className='transition duration-200 ease-in-out delay-75 stroke-medium-dark-gray dark:stroke-white group-hover:stroke-adzado'
                width='30'
                height='26'
                viewBox='0 0 30 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M28.0583 13.1125H1.94556M17.178 23.9929L28.0583 13.1125L17.178 2.23222'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
          <div className='w-full lg:w-3/4'>
            <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-10 dark:bg-[#041A3F] p-5 rounded'>
              <div className='w-full lg:w-1/3'>
                <h6 className='text-medium-dark-gray'>
                  What is your target vertical?
                </h6>
                <div className='relative mt-5'>
                  <Select
                    name='targetVertical'
                    instanceId='targetVertical'
                    className='relative z-20'
                    isClearable={false}
                    classNamePrefix='select'
                    options={[
                      {
                        value: 'Spanish Health Insurance',
                        label: 'Spanish Health Insurance'
                      }
                    ]}
                    onChange={setTargetVertical}
                    value={targetVertical || ''}
                    placeholder='Select...'
                  />
                </div>
              </div>

              <div className='w-full lg:w-1/3'>
                <h6 className='text-medium-dark-gray'>Type of Lead</h6>
                <div className='relative mt-5'>
                  <Select
                    name='typeOfLead'
                    instanceId='typeOfLead'
                    className='relative z-20'
                    isClearable={false}
                    classNamePrefix='select'
                    options={[
                      {
                        value: 'Live Transfers',
                        label: 'Live Transfers'
                      }
                    ]}
                    onChange={setTypeOfLead}
                    value={typeOfLead || ''}
                    placeholder='Select...'
                  />
                </div>
              </div>

              <div className='w-full lg:w-1/3'>
                <h6 className='text-medium-dark-gray'>Cost per Lead</h6>
                <div className='relative mt-5 bg-gradient-to-b from-[#d1e6ff] dark:from-[#042752] to-white dark:to-[rgba(4, 39, 82, 0)] text-4xl text-adzado px-6 py-3 inline-block rounded-md'>
                  $45
                </div>
              </div>
            </div>
            <hr className='my-10' />
            <div>
              <div className='flex flex-col items-center justify-center gap-x-20 gap-y-5 md:flex-row'>
                <h3 className='text-xl font-medium text-medium-dark-gray'>
                  Do you know your close rate?
                </h3>
                <div className='d-flex align-items-center'>
                  <label
                    htmlFor='toggle-checked'
                    className='relative flex items-center cursor-pointer'
                  >
                    <input
                      type='checkbox'
                      id='toggle-checked'
                      className='sr-only peer'
                      defaultChecked
                    />
                    <div className='w-24 bg-gray-200 border-2 border-gray-200 rounded-full toggle-bg h-9' />
                    <p className='absolute hidden text-lg text-white uppercase left-6 peer-checked:block'>
                      Yes
                    </p>
                    <p className='absolute block text-lg text-white uppercase left-12 peer-checked:hidden'>
                      No
                    </p>
                  </label>
                </div>
              </div>
              <div className='flex flex-col items-center justify-start w-full gap-10 mt-10 md:flex-row'>
                <div>
                  <Image
                    src='/charts.svg'
                    className='block dark:hidden'
                    alt='charts'
                    width={179.43}
                    height={155.7}
                  />
                  <Image
                    src='/charts_2.svg'
                    className='hidden dark:block'
                    alt='charts_2'
                    width={179.43}
                    height={155.7}
                  />
                </div>
                <div className='w-full md:w-1/4'>
                  <h4 className='mb-3 text-lg font-roboto'>{sliderValue}%</h4>
                  <RangeSlider
                    onInput={(e) => setSliderValue(e[1])}
                    className="single-thumb before:content-['0%'] before:absolute before:top-5 before:text-xs before:font-roboto after:content-['100%'] after:absolute after:top-5 after:right-0 after:text-xs after:font-roboto"
                    defaultValue={[0, 0]}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
                  />
                  <p className='mt-10 text-xs font-roboto'>Slide to change %</p>
                </div>
                <div className='relative inline-block text-center rounded-md bg-gradient-to-b from-[#d1e6ff] dark:from-[#042752] to-white dark:to-[rgba(4, 39, 82, 0)] p-7'>
                  <p className='text-sm text-medium-dark-gray'>Expected CPA</p>
                  <span className='text-4xl text-adzado'>$4500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
