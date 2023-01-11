// Next
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Layout
import Layout from '../../components/@core/layouts/Layout'

const ContactUs = () => {
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

      <main className='w-full dark:bg-[#011031]'>
        <section className='container px-5 mx-auto'>
          <h2 className='font-semibold text-[43.29px] text-[#242424] mt-[70px] text-center'>
            Contact Us
          </h2>
          <div className='flex flex-col justify-between mt-12 lg:flex-row lg:gap-14'>
            <div className='lg:w-1/2 bg-light dark:bg-[#02143a] p-5 md:px-10 md:py-12 rounded-md'>
              <form>
                <div className='flex flex-col items-center justify-between w-full gap-5 mt-3 lg:flex-row'>
                  <div className='relative w-full lg:w-1/2'>
                    <label
                      className='text-[#242424] font-semibold text-[19.68px] block'
                      htmlFor='firstName'
                    >
                      First Name
                    </label>
                    <input
                      name='firstName'
                      id='firstName'
                      type='text'
                      className='block w-full h-[64.66px] border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2'
                      placeholder='Enter your first name'
                    />
                  </div>
                  <div className='relative w-full lg:w-1/2'>
                    <label
                      className='text-[#242424] font-semibold text-[19.68px] block'
                      htmlFor='lastName'
                    >
                      Last Name
                    </label>
                    <input
                      name='lastName'
                      id='lastName'
                      type='text'
                      className='block w-full h-[64.66px] border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2'
                      placeholder='Enter your last name'
                    />
                  </div>
                </div>
                <div className='mt-6'>
                  <label
                    className='text-[#242424] font-semibold text-[19.68px] block'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input
                    name='email'
                    id='email'
                    type='email'
                    className='block w-full h-[64.66px] border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2'
                    placeholder='Enter your email'
                  />
                </div>
                <div className='mt-6'>
                  <label
                    className='text-[#242424] font-semibold text-[19.68px] block'
                    htmlFor='phone'
                  >
                    Phone(Optional)
                  </label>
                  <input
                    name='phone'
                    id='phone'
                    type='text'
                    className='block w-full h-[64.66px] border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2'
                    placeholder='Enter your phone'
                  />
                </div>
                <div className='mt-6'>
                  <label
                    className='text-[#242424] font-semibold text-[19.68px] block'
                    htmlFor='subject'
                  >
                    Subject
                  </label>
                  <input
                    name='subject'
                    id='subject'
                    type='text'
                    className='block w-full h-[64.66px] border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2'
                    placeholder='Enter your Subject'
                  />
                </div>
                <div className='mt-6'>
                  <label
                    className='text-[#242424] font-semibold text-[19.68px] block'
                    htmlFor='message'
                  >
                    Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    type='text'
                    className='block w-full border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2'
                    rows='6'
                    placeholder='Type your message'
                  />
                </div>
                <button
                  type='submit'
                  className='font-medium text-[23.63px] text-white bg-adzado w-full rounded-lg py-2.5 mt-14'
                >
                  Submit
                </button>
              </form>
            </div>

            <div className='lg:w-1/2'>
              <h2 className='font-semibold text-[24.94px] text-[#242424] mt-5'>
                Locations
              </h2>
              <div className='flex items-center gap-3 mt-6'>
                <svg
                  width='21'
                  height='22'
                  viewBox='0 0 21 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.5 12.3125C9.85103 12.3125 9.21664 12.1201 8.67704 11.7595C8.13744 11.399 7.71687 10.8865 7.46852 10.2869C7.22017 9.68736 7.15519 9.02761 7.2818 8.39111C7.40841 7.75461 7.72092 7.16995 8.17981 6.71106C8.6387 6.25217 9.22336 5.93966 9.85986 5.81305C10.4964 5.68644 11.1561 5.75142 11.7557 5.99977C12.3553 6.24812 12.8677 6.66869 13.2283 7.20829C13.5888 7.74789 13.7813 8.38228 13.7813 9.03125C13.7802 9.90117 13.4342 10.7352 12.819 11.3503C12.2039 11.9654 11.3699 12.3115 10.5 12.3125ZM10.5 7.0625C10.1106 7.0625 9.72998 7.17797 9.40622 7.3943C9.08246 7.61063 8.83012 7.9181 8.68111 8.27784C8.5321 8.63759 8.49312 9.03344 8.56908 9.41534C8.64505 9.79724 8.83255 10.148 9.10789 10.4234C9.38322 10.6987 9.73402 10.8862 10.1159 10.9622C10.4978 11.0381 10.8937 10.9991 11.2534 10.8501C11.6132 10.7011 11.9206 10.4488 12.137 10.125C12.3533 9.80127 12.4688 9.42063 12.4688 9.03125C12.4682 8.50927 12.2606 8.00881 11.8915 7.63971C11.5224 7.27061 11.022 7.06302 10.5 7.0625Z'
                    fill='#0096E6'
                  />
                  <path
                    d='M10.5 20.1875L4.96388 13.6585C4.88696 13.5604 4.81083 13.4618 4.73551 13.3625C3.78984 12.1168 3.27897 10.5952 3.28126 9.03125C3.28126 7.11672 4.0418 5.2806 5.39558 3.92682C6.74936 2.57304 8.58548 1.8125 10.5 1.8125C12.4145 1.8125 14.2507 2.57304 15.6044 3.92682C16.9582 5.2806 17.7188 7.11672 17.7188 9.03125C17.721 10.5945 17.2104 12.1154 16.2652 13.3605L16.2645 13.3625C16.2645 13.3625 16.0676 13.6211 16.0381 13.6558L10.5 20.1875ZM5.78288 12.5717C5.7842 12.5717 5.93645 12.7738 5.97123 12.8172L10.5 18.1584L15.0347 12.8099C15.0636 12.7738 15.2171 12.5704 15.2178 12.5697C15.9903 11.552 16.4078 10.309 16.4063 9.03125C16.4063 7.46482 15.784 5.96254 14.6764 4.8549C13.5687 3.74726 12.0664 3.125 10.5 3.125C8.93357 3.125 7.43129 3.74726 6.32366 4.8549C5.21602 5.96254 4.59376 7.46482 4.59376 9.03125C4.59238 10.3098 5.01033 11.5535 5.78354 12.5717H5.78288Z'
                    fill='#0096E6'
                  />
                </svg>
                <p>Miami, Florida</p>
              </div>
              <div className='mt-3'>
                <Image src='/Miami.svg' alt='Miami' width={670} height={275} />
              </div>
              <div className='flex items-center gap-3 mt-6'>
                <svg
                  width='21'
                  height='22'
                  viewBox='0 0 21 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.5 12.3125C9.85103 12.3125 9.21664 12.1201 8.67704 11.7595C8.13744 11.399 7.71687 10.8865 7.46852 10.2869C7.22017 9.68736 7.15519 9.02761 7.2818 8.39111C7.40841 7.75461 7.72092 7.16995 8.17981 6.71106C8.6387 6.25217 9.22336 5.93966 9.85986 5.81305C10.4964 5.68644 11.1561 5.75142 11.7557 5.99977C12.3553 6.24812 12.8677 6.66869 13.2283 7.20829C13.5888 7.74789 13.7813 8.38228 13.7813 9.03125C13.7802 9.90117 13.4342 10.7352 12.819 11.3503C12.2039 11.9654 11.3699 12.3115 10.5 12.3125ZM10.5 7.0625C10.1106 7.0625 9.72998 7.17797 9.40622 7.3943C9.08246 7.61063 8.83012 7.9181 8.68111 8.27784C8.5321 8.63759 8.49312 9.03344 8.56908 9.41534C8.64505 9.79724 8.83255 10.148 9.10789 10.4234C9.38322 10.6987 9.73402 10.8862 10.1159 10.9622C10.4978 11.0381 10.8937 10.9991 11.2534 10.8501C11.6132 10.7011 11.9206 10.4488 12.137 10.125C12.3533 9.80127 12.4688 9.42063 12.4688 9.03125C12.4682 8.50927 12.2606 8.00881 11.8915 7.63971C11.5224 7.27061 11.022 7.06302 10.5 7.0625Z'
                    fill='#0096E6'
                  />
                  <path
                    d='M10.5 20.1875L4.96388 13.6585C4.88696 13.5604 4.81083 13.4618 4.73551 13.3625C3.78984 12.1168 3.27897 10.5952 3.28126 9.03125C3.28126 7.11672 4.0418 5.2806 5.39558 3.92682C6.74936 2.57304 8.58548 1.8125 10.5 1.8125C12.4145 1.8125 14.2507 2.57304 15.6044 3.92682C16.9582 5.2806 17.7188 7.11672 17.7188 9.03125C17.721 10.5945 17.2104 12.1154 16.2652 13.3605L16.2645 13.3625C16.2645 13.3625 16.0676 13.6211 16.0381 13.6558L10.5 20.1875ZM5.78288 12.5717C5.7842 12.5717 5.93645 12.7738 5.97123 12.8172L10.5 18.1584L15.0347 12.8099C15.0636 12.7738 15.2171 12.5704 15.2178 12.5697C15.9903 11.552 16.4078 10.309 16.4063 9.03125C16.4063 7.46482 15.784 5.96254 14.6764 4.8549C13.5687 3.74726 12.0664 3.125 10.5 3.125C8.93357 3.125 7.43129 3.74726 6.32366 4.8549C5.21602 5.96254 4.59376 7.46482 4.59376 9.03125C4.59238 10.3098 5.01033 11.5535 5.78354 12.5717H5.78288Z'
                    fill='#0096E6'
                  />
                </svg>
                <p>Clovis, CA</p>
              </div>
              <div className='mt-3'>
                <Image
                  src='/Clovis.svg'
                  alt='Clovis'
                  width={670}
                  height={339}
                />
              </div>
              <div className='flex items-center gap-2 mt-10'>
                <svg
                  width='32'
                  height='33'
                  viewBox='0 0 32 33'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.0037 16.5998C11.2587 19.2841 13.3544 21.4491 15.9494 22.742C16.1408 22.8359 16.3525 22.8765 16.5637 22.8599C16.7748 22.8433 16.9782 22.77 17.1537 22.6473L20.965 20.0104C21.1334 19.8921 21.328 19.8199 21.5306 19.8006C21.7332 19.7813 21.9372 19.8154 22.1237 19.8999L29.2584 23.0736C29.5023 23.1787 29.706 23.3639 29.8382 23.6007C29.9704 23.8375 30.0238 24.1128 29.9902 24.3841C29.764 26.2122 28.9025 27.8922 27.5669 29.1099C26.2312 30.3277 24.5129 30.9996 22.7335 31C17.2346 31 11.961 28.7376 8.07269 24.7104C4.18441 20.6833 2 15.2213 2 9.52605C2.0004 7.68308 2.64916 5.9034 3.82489 4.52002C5.00062 3.13665 6.62274 2.24438 8.38774 2.01017C8.64971 1.97531 8.91548 2.03062 9.14412 2.16757C9.37276 2.30452 9.5516 2.51552 9.65309 2.76807L12.7174 10.1734C12.7971 10.3635 12.8304 10.5709 12.8144 10.7774C12.7985 10.9839 12.7337 11.1832 12.6259 11.3577L10.08 15.3682C9.96661 15.5496 9.90008 15.7581 9.88674 15.9737C9.87339 16.1894 9.91367 16.4049 10.0037 16.5998Z'
                    stroke='#0096E6'
                    strokeWidth='2.43923'
                    stroke-linecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <p className='md:text-[22.19px]'>
                  (800) 555-4444{' '}
                  <span className='text-adzado'>( Toll Free )</span>
                </p>
              </div>
              <div className='flex items-center gap-2 mt-5'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M26.25 6.5625L15 16.875L3.75 6.5625'
                    stroke='#0096E6'
                    strokeWidth='2.5'
                    stroke-linecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.75 6.5625H26.25V22.5C26.25 22.7486 26.1512 22.9871 25.9754 23.1629C25.7996 23.3387 25.5611 23.4375 25.3125 23.4375H4.6875C4.43886 23.4375 4.2004 23.3387 4.02459 23.1629C3.84877 22.9871 3.75 22.7486 3.75 22.5V6.5625Z'
                    stroke='#0096E6'
                    strokeWidth='2.5'
                    stroke-linecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12.9492 15L4.04297 23.168'
                    stroke='#0096E6'
                    strokeWidth='2.5'
                    stroke-linecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M25.957 23.168L17.0508 15'
                    stroke='#0096E6'
                    strokeWidth='2.5'
                    stroke-linecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <p className='md:text-[22.19px]'>hello@adzado.com</p>
              </div>
            </div>
          </div>
        </section>

        <section className='pb-6 mt-20 pt-14'>
          <div className='relative container mx-auto px-5 border-l-8 border-[#031D54] bg-secondary-blue py-14 lg:px-32 text-center md:text-left'>
            <h3 className='text-4xl font-bold text-midnight-blue dark:text-midnight-blue'>
              Start Receiving live calls from real{' '}
              <br className='hidden md:inline-block' />
              clients right now.
            </h3>
            <p className='mt-5 text-xl font-medium text-white'>
              We Generate, Verify, And Provide Leads That Turn Into
              <br />
              Customers!
            </p>
            <Link
              href='/'
              className='inline-block gap-5 px-8 py-4 mt-5 text-xl font-medium text-white transition duration-200 ease-in-out delay-75 border rounded-lg border-midnight-blue hover:border-white bg-midnight-blue hover:bg-white hover:text-adzado'
            >
              Get Started
            </Link>
            <div className='absolute bottom-0 z-10 hidden right-56 lg:block'>
              <Image
                src='/Woman_with_headphone.svg'
                alt='Woman_with_headphone'
                width={298.01}
                height={455.61}
              />
            </div>
            <div className='absolute right-0 hidden bottom-5 lg:block'>
              <Image src='/Table.svg' alt='Table' width={385.34} height={244} />
            </div>
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

export default ContactUs
