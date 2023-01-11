// Next
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Layout
import Layout from '../../components/@core/layouts/Layout'

const LiveCallMap = () => {
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

      <main className='pt-10 lg:pt-28'>
        <section className='container flex justify-between w-full gap-20 px-5 mx-auto'>
          <div className='w-full lg:w-2/3'>
            <h2 className='font-medium text-[50.84px]'>Hold Tight!</h2>
            <h2 className='text-3xl font-medium lg:!leading-[64px] xl:text-[51.59px] text-midnight-blue'>
              <span className='text-adzado'>Live Call Tracker</span> is
              Launching Soon.
            </h2>
            <p className='mt-3 xl:text-lg lg:!leading-[38px] text-secondary-gray'>
              Our developers are currently working hard building this page.
            </p>
            <div className='flex flex-col items-start justify-start gap-5 mt-10 md:flex-row'>
              <Link
                href='/'
                className='flex items-center gap-5 px-5 py-4 font-medium text-white transition duration-200 ease-in-out delay-75 border rounded-lg group xl:px-8 border-adzado bg-adzado hover:bg-[#00D1FF] xl:text-xl'
              >
                <svg
                  width='27'
                  height='25'
                  viewBox='0 0 27 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.4 16.1132C7.64835 16.3595 7.98355 16.4984 8.33334 16.4999C8.50975 16.4991 8.68426 16.4634 8.84676 16.3947C9.00926 16.3261 9.15652 16.2259 9.28 16.0999C9.52834 15.8501 9.66773 15.5121 9.66773 15.1599C9.66773 14.8076 9.52834 14.4697 9.28 14.2199L4.81334 9.83321H13.6667C16.4956 9.83321 19.2088 10.957 21.2091 12.9574C23.2095 14.9578 24.3333 17.6709 24.3333 20.4999V23.1665C24.3333 23.5202 24.4738 23.8593 24.7239 24.1094C24.9739 24.3594 25.313 24.4999 25.6667 24.4999C26.0203 24.4999 26.3594 24.3594 26.6095 24.1094C26.8595 23.8593 27 23.5202 27 23.1665V20.4999C27 16.9637 25.5952 13.5723 23.0948 11.0718C20.5943 8.5713 17.2029 7.16654 13.6667 7.16654H4.84L9.26667 2.77988C9.48704 2.52638 9.60361 2.19905 9.59308 1.86332C9.58256 1.52759 9.4457 1.2082 9.20988 0.969013C8.97406 0.729822 8.65664 0.58845 8.3211 0.573161C7.98555 0.557871 7.6566 0.669789 7.4 0.886542L0.640003 7.55321C0.515032 7.67716 0.41584 7.82463 0.348148 7.98711C0.280457 8.14959 0.245605 8.32386 0.245605 8.49988C0.245605 8.67589 0.280457 8.85017 0.348148 9.01264C0.41584 9.17512 0.515032 9.32259 0.640003 9.44654L7.4 16.1132Z'
                    fill='white'
                  />
                </svg>
                Back to Homepage
              </Link>
            </div>
          </div>
          <div className='relative hidden pr-10 lg:block'>
            <div className='shadow-2xl'>
              <Image
                src='/Marketplace/Rocket.svg'
                alt='Rocket'
                width={668.19}
                height={447.05}
              />
            </div>
          </div>
        </section>

        <section className='pt-32 pb-6'>
          <div className='relative container mx-auto px-5 border-l-8 border-[#031D54] bg-secondary-blue py-14 lg:px-32'>
            <h3 className='text-4xl font-bold text-midnight-blue dark:text-midnight-blue'>
              Start Receiving live calls from real
              <br />
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

export default LiveCallMap
