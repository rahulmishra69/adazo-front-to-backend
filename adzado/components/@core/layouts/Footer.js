// Next
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
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
                <Link href='/marketplace' className='!text-[#D9DBE1]'>
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href='/team' className='!text-[#D9DBE1]'>
                  Team
                </Link>
              </li>
              <li>
                <Link href='/careers' className='!text-[#D9DBE1]'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/contact-us' className='!text-[#D9DBE1]'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href='/signin' className='!text-[#D9DBE1]'>
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
                <Link href='/publishers' className='!text-[#D9DBE1]'>
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
    </div>
  )
}

export default Footer
