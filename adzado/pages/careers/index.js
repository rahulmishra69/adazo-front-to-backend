// React
import { useState } from 'react'

// Next
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Layout
import Layout from '../../components/@core/layouts/Layout'

const Careers = () => {
  const [activeCareer, setActiveCareer] = useState(1)

  const careerOptions = [
    {
      id: 1,
      value: 'View All'
    },
    {
      id: 2,
      value: 'Development'
    },
    {
      id: 3,
      value: 'Design'
    },
    {
      id: 4,
      value: 'Marketing'
    },
    {
      id: 5,
      value: 'Customer Service'
    },
    {
      id: 6,
      value: 'Operations'
    },
    {
      id: 7,
      value: 'Management'
    }
  ]

  const careerType = [
    {
      id: 1,
      heading: 'Customer Success Manager',
      description:
        'We’re looking for a mid-level product designer to join our team.',
      category: 'Management',
      categoryId: 7,
      tags: ['100% Remote', 'Full-Time']
    },
    {
      id: 2,
      heading: 'Facebook Ads Expert',
      description: 'We’re looking for a Facebook Ads Expert to join our team.',
      category: 'Marketing',
      categoryId: 4,
      tags: ['100% Remote', 'Full-Time']
    },
    {
      id: 3,
      heading: 'Customer Success Manager',
      description:
        'We’re looking for a mid-level product designer to join our team.',
      category: 'Management',
      categoryId: 7,
      tags: ['100% Remote', 'Full-Time']
    },
    {
      id: 4,
      heading: 'Facebook Ads Expert',
      description: 'We’re looking for a Facebook Ads Expert to join our team.',
      category: 'Marketing',
      categoryId: 4,
      tags: ['100% Remote', 'Full-Time']
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Adzado</title>
        <meta
          name='description'
          content='Exclusive Verified Leads that pay off in new business! inbound calls and leads for insurance, financial services, and other industries.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='h-[572.7px] bg-no-repeat bg-careers-hero-background max-w-[1500px] mx-auto'>
          <div className='container flex items-center justify-between w-full h-full px-5 mx-auto gap-x-10'>
            <div className='w-1/2' />
            <div className='flex flex-col justify-center w-1/2'>
              <h2 className='font-semibold text-[45.02px]'>
                Why work for <span className='!text-adzado'>ad</span>zado?
              </h2>
              <p className='text-medium text-[17.02px]'>
                Lorem ipsum dolor sit amet consectetur. Elementum laoreet odio
                nunc fames est eros. Eleifend non quis dictumst ullamcorper
                accumsan quis nam maecenas. Sollicitudin cursus dui quam
                aliquam. Phasellus tincidunt sit porttitor commodo tortor.
                <br />
                <br />
                Nec fringilla velit tempus sed. Ultrices donec nec massa massa
                curabitur cras morbi commodo. Donec dignissim ullamcorper in
                posuere et at sit. Ut dis consectetur at condimentum.
                <br />
                <br />
                Nunc fringilla lacus ante eu tincidunt. At at lectus aenean
                tempor nec vulputate consequat pharetra.
              </p>
            </div>
          </div>
        </section>

        <section className='container px-5 mx-auto pt-14 pb-28'>
          <h2 className='font-semibold text-[34.63px] text-center'>Careers</h2>
          <p className='!text-[#FF770D] border border-[#FF770D] rounded-full text-[15.25px] px-5 py-2 mt-10 inline-block'>
            {`We’re`} hiring!
          </p>
          <h3 className='font-semibold text-[50.33px] mt-8'>
            Be part of our mission
          </h3>
          <p className='text-[26.33px] mt-6 max-w-[1016px]'>
            {`We’re`} looking for passionate people to join the adzado team. We
            value flat hierarchies, clear communiation, and full ownership and
            responsibility.
          </p>
          <div className='mt-[34px] flex gap-x-4'>
            {careerOptions.map((option) => (
              <button
                key={option.id}
                type='button'
                className={`px-4 py-2 duration-500 border rounded-full hover:border-adzado hover:bg-adzado ${
                  activeCareer === option.id
                    ? 'bg-adzado border-adzado'
                    : 'bg-transparent border-white'
                } ease`}
                onClick={() => setActiveCareer(option.id)}
              >
                {option.value}
              </button>
            ))}
          </div>
          <div>
            {careerType.map((option) => {
              if (activeCareer === 1 || option.categoryId === activeCareer) {
                return (
                  <div
                    key={option.id}
                    className='px-7 py-10 bg-gradient-to-r from-[#052048] via-[#011031] to-[#011031] flex justify-between max-w-[1070px] mt-[34px] rounded-md'
                  >
                    <div>
                      <h3 className='font-semibold text-[40.09px]'>
                        {option.heading}
                      </h3>
                      <p className='mt-5 text-[26.33px]'>
                        {option.description}
                      </p>
                      <div className='flex gap-4 mt-7'>
                        <button
                          type='button'
                          className={`px-4 py-2 duration-500 border rounded-full hover:border-adzado hover:bg-adzado bg-transparent border-white ease flex justify-center items-center gap-2`}
                        >
                          <svg
                            width='14'
                            height='18'
                            viewBox='0 0 14 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6.99967 8.99984C7.45801 8.99984 7.85051 8.8365 8.17717 8.50984C8.50329 8.18373 8.66634 7.7915 8.66634 7.33317C8.66634 6.87484 8.50329 6.48234 8.17717 6.15567C7.85051 5.82956 7.45801 5.6665 6.99967 5.6665C6.54134 5.6665 6.14912 5.82956 5.82301 6.15567C5.49634 6.48234 5.33301 6.87484 5.33301 7.33317C5.33301 7.7915 5.49634 8.18373 5.82301 8.50984C6.14912 8.8365 6.54134 8.99984 6.99967 8.99984ZM6.99967 15.1248C8.69412 13.5693 9.95106 12.1559 10.7705 10.8848C11.59 9.61428 11.9997 8.48595 11.9997 7.49984C11.9997 5.98595 11.5169 4.74623 10.5513 3.78067C9.58634 2.81567 8.40245 2.33317 6.99967 2.33317C5.5969 2.33317 4.41273 2.81567 3.44717 3.78067C2.48217 4.74623 1.99967 5.98595 1.99967 7.49984C1.99967 8.48595 2.4094 9.61428 3.22884 10.8848C4.04829 12.1559 5.30523 13.5693 6.99967 15.1248ZM6.99967 17.3332C4.76356 15.4304 3.09356 13.6629 1.98967 12.0307C0.88523 10.399 0.333008 8.88873 0.333008 7.49984C0.333008 5.4165 1.00329 3.75678 2.34384 2.52067C3.68384 1.28456 5.23579 0.666504 6.99967 0.666504C8.76356 0.666504 10.3155 1.28456 11.6555 2.52067C12.9961 3.75678 13.6663 5.4165 13.6663 7.49984C13.6663 8.88873 13.1144 10.399 12.0105 12.0307C10.9061 13.6629 9.23579 15.4304 6.99967 17.3332Z'
                              fill='white'
                            />
                          </svg>
                          100% Remote
                        </button>
                        <button
                          type='button'
                          className={`px-4 py-2 duration-500 border rounded-full hover:border-adzado hover:bg-adzado bg-transparent border-white ease flex justify-center items-center gap-2`}
                        >
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.99199 1.6665C5.39199 1.6665 1.66699 5.39984 1.66699 9.99984C1.66699 14.5998 5.39199 18.3332 9.99199 18.3332C14.6003 18.3332 18.3337 14.5998 18.3337 9.99984C18.3337 5.39984 14.6003 1.6665 9.99199 1.6665ZM10.0003 16.6665C6.31699 16.6665 3.33366 13.6832 3.33366 9.99984C3.33366 6.3165 6.31699 3.33317 10.0003 3.33317C13.6837 3.33317 16.667 6.3165 16.667 9.99984C16.667 13.6832 13.6837 16.6665 10.0003 16.6665Z'
                              fill='white'
                            />
                            <path
                              d='M10.417 5.8335H9.16699V10.8335L13.542 13.4585L14.167 12.4335L10.417 10.2085V5.8335Z'
                              fill='white'
                            />
                          </svg>
                          Full-Time
                        </button>
                      </div>
                    </div>
                    <Link
                      href='/'
                      className={`w-[139.28px] h-[62.83px] duration-500 rounded border-adzado bg-adzado border ease flex justify-center items-center gap-x-3`}
                    >
                      Apply
                      <svg
                        width='14'
                        height='13'
                        viewBox='0 0 14 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.2808 3.90249L2.62236 12.5853C2.42724 12.7805 2.19538 12.878 1.92676 12.878C1.6588 12.878 1.42725 12.7805 1.23213 12.5853C1.03701 12.3902 0.939453 12.1584 0.939453 11.8897C0.939453 11.6218 1.03701 11.3902 1.23213 11.1951L9.91498 2.53665H2.50041C2.22399 2.53665 1.99213 2.44332 1.80481 2.25665C1.61815 2.06934 1.52481 1.83747 1.52481 1.56105C1.52481 1.28463 1.61815 1.05276 1.80481 0.865447C1.99213 0.678782 2.22399 0.585449 2.50041 0.585449H12.2564C12.5328 0.585449 12.7644 0.678782 12.9511 0.865447C13.1384 1.05276 13.232 1.28463 13.232 1.56105V11.3171C13.232 11.5935 13.1384 11.825 12.9511 12.0117C12.7644 12.199 12.5328 12.2927 12.2564 12.2927C11.98 12.2927 11.7485 12.199 11.5618 12.0117C11.3745 11.825 11.2808 11.5935 11.2808 11.3171V3.90249Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                  </div>
                )
              }
            })}
          </div>
        </section>
      </main>

      <footer className='bg-[#010C24] py-14'>
        <div className='container flex flex-col items-start justify-between gap-10 px-5 mx-auto lg:px-20 lg:flex-row'>
          <div>
            <Link href='/' className='my-auto'>
              <Image src='/Logo_1.svg' alt='Logo_1' width={127} height={76} />
            </Link>
            <p className='!text-[#D9DBE1] text-[14.93px] mt-7'>
              Copyright © 2022 adzado LLC.
            </p>
            <p className='!text-[#D9DBE1] text-[14.93px] mt-3'>
              All rights reserved
            </p>
            <div className='flex mt-3 gap-x-5'>
              <Link href='/' className='my-auto bg-gray-700 rounded-full p-1.5'>
                <Image
                  src='/Insta.svg'
                  alt='Insta'
                  width={18.2}
                  height={18.2}
                />
              </Link>
              <Link href='/' className='my-auto bg-gray-700 rounded-full p-1.5'>
                <div className='w-[18.2px] h-[18.2px] flex justify-center items-center'>
                  <Image src='/fb.svg' alt='fb' width={6.8} height={14} />
                </div>
              </Link>
              <Link href='/' className='my-auto bg-gray-700 rounded-full p-1.5'>
                <div className='w-[18.2px] h-[18.2px] flex justify-center items-center'>
                  <Image
                    src='/linkedIn.svg'
                    alt='linkedIn'
                    width={17.19}
                    height={17.19}
                  />
                </div>
              </Link>
              <Link href='/' className='my-auto bg-gray-700 rounded-full p-1.5'>
                <div className='w-[18.2px] h-[18.2px] flex justify-center items-center'>
                  <Image
                    src='/Youtube.svg'
                    alt='Youtube'
                    width={18.2}
                    height={13.08}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-x-24 gap-y-10'>
            <ul className='flex flex-col gap-y-3'>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Team
                </Link>
              </li>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Login
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-y-3'>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href='/' className='!text-[#D9DBE1]'>
                  Publishers
                </Link>
              </li>
            </ul>
            <div>
              <h5 className='font-medium text-[21.33px] text-white'>
                Stay up to date
              </h5>
              <div className='relative mt-5'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-700 px-5 py-2 rounded-md placeholder:text-sm !text-[#D9DBE1] text-sm w-[272px]'
                  placeholder='Your email address'
                />
                <div className='absolute right-2.5 top-2.5 cursor-pointer'>
                  <Image
                    src='/Plane.svg'
                    alt='Plane'
                    width={17.6}
                    height={17.6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default Careers
