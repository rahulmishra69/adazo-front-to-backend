// React
import { useEffect, useState } from 'react'

// Next
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

const HorizontalLayout = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const [showMenu, setShowMenu] = useState(false)
  const [mode, setMode] = useState()

  const closeMenu = (e) => {
    if (e.target.id === 'smallDeviceBar') {
      setShowMenu(false)
    }
  }

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setMode('dark')
    } else {
      setTheme('light')
      setMode('light')
    }
  }

  useEffect(() => {
    const mode = localStorage.getItem('theme')
    if (mode) {
      setTheme(mode)
      setMode(mode)
    } else {
      setTheme('dark')
      setMode('dark')
    }
  }, [])

  return (
    <header
      className={`py-2.5 ${
        router.asPath.includes('/registration') ||
        router.asPath.includes('/approved')
          ? 'dark:bg-[#011031]'
          : ''
      } shadow`}
    >
      <div className='container mx-auto'>
        <div
          className={`flex ${
            router.asPath.includes('/registration') ||
            router.asPath.includes('/approved')
              ? 'justify-center'
              : 'justify-between'
          } items-center`}
        >
          <Link href='/' className='my-auto ml-0 lg:ml-1'>
            <Image
              src='/logo.svg'
              className='block dark:hidden'
              alt='logo'
              width={125}
              height={86}
            />
            <Image
              src='/Logo_1.svg'
              className='hidden dark:block'
              alt='logo'
              width={125}
              height={86}
            />
          </Link>
          {!router.asPath.includes('/registration') &&
            !router.asPath.includes('/approved') && (
              <>
                <ul className='items-center justify-between hidden lg:flex gap-14'>
                  <li>
                    <Link
                      href='/marketplace'
                      className='font-medium transition duration-200 ease-in-out delay-75 hover:text-secondary-blue text-primary-gray'
                    >
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/live-call-map'
                      className='font-medium transition duration-200 ease-in-out delay-75 hover:text-secondary-blue text-primary-gray'
                    >
                      Live Call Map
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/pricing'
                      className='font-medium transition duration-200 ease-in-out delay-75 hover:text-secondary-blue text-primary-gray'
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact-us'
                      className='font-medium transition duration-200 ease-in-out delay-75 hover:text-secondary-blue text-primary-gray'
                    >
                      Contact Us
                    </Link>
                  </li>
                  <ul className='flex items-center justify-between gap-6'>
                    <li>
                      <Link
                        href='/signin'
                        className='py-2 font-medium transition duration-200 ease-in-out delay-75 border rounded-lg px-7 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white'
                      >
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/signup'
                        className='py-2 font-medium text-white transition duration-200 ease-in-out delay-75 border rounded-lg px-7 border-adzado bg-adzado hover:bg-transparent hover:text-adzado'
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                  <li
                    className='cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 rounded -ml-8'
                    onClick={changeTheme}
                  >
                    {mode === 'light' ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='w-5 h-5 transform -rotate-90'
                      >
                        <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    )}
                  </li>
                </ul>

                {/* Small devices */}
                <div
                  onClick={() => setShowMenu(true)}
                  className='block w-12 cursor-pointer h-110 lg:hidden'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-10 h-10'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                </div>
                <div
                  id='smallDeviceBar'
                  className={`lg:hidden z-40 fixed overflow-y-scroll w-screen h-screen transition-transform duration-700 ease-in-out transform inset-0 bg-black bg-opacity-40 ${
                    !showMenu ? 'translate-x-full' : ''
                  }`}
                  onClick={closeMenu}
                >
                  <div className='top-0 z-50 h-screen pt-5 pb-56 ml-auto bg-white dark:bg-adzado-black w-72'>
                    <div>
                      <div className='pl-4 pr-3'>
                        <div
                          className='ml-auto text-white rounded-full cursor-pointer w-7 h-7'
                          onClick={() => setShowMenu(false)}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6 stroke-black dark:stroke-white'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M6 18L18 6M6 6l12 12'
                            />
                          </svg>
                        </div>
                      </div>
                      <ul className='flex flex-col mt-10 border-b dark:border-white !border-opacity-10'>
                        <Link href='/marketplace'>
                          <li className='font-medium transition duration-200 ease-in-out delay-75 hover:!text-secondary-blue text-primary-gray dark:text-white py-2.5 pl-6 pr-2 border-t dark:border-white !border-opacity-10'>
                            Marketplace
                          </li>
                        </Link>
                        <Link href='/live-call-map'>
                          <li className='font-medium transition duration-200 ease-in-out delay-75 hover:!text-secondary-blue text-primary-gray dark:text-white py-2.5 pl-6 pr-2 border-t dark:border-white !border-opacity-10'>
                            Live Call Map
                          </li>
                        </Link>
                        <Link href='/pricing'>
                          <li className='font-medium transition duration-200 ease-in-out delay-75 hover:!text-secondary-blue text-primary-gray dark:text-white py-2.5 pl-6 pr-2 border-t dark:border-white !border-opacity-10'>
                            Pricing
                          </li>
                        </Link>
                        <Link href='/contact-us'>
                          <li className='font-medium transition duration-200 ease-in-out delay-75 hover:!text-secondary-blue text-primary-gray dark:text-white py-2.5 pl-6 pr-2 border-t dark:border-white !border-opacity-10'>
                            Contact Us
                          </li>
                        </Link>
                      </ul>
                      <div className='flex items-center justify-between'>
                        <Link
                          href='/signin'
                          className='flex items-center justify-center mx-auto mt-10 text-center text-white h-[50px] w-[127px] text-16px bg-adzado rounded-md hover:bg-transparent hover:text-adzado border-adzado border'
                        >
                          Sign In
                        </Link>
                        <Link
                          href='/signup'
                          className='flex items-center justify-center mx-auto mt-10 text-center text-white h-[50px] w-[127px] text-16px bg-adzado rounded-md hover:bg-transparent hover:text-adzado border-adzado border'
                        >
                          Sign Up
                        </Link>
                      </div>
                      <div
                        className='inline-block mt-5 ml-3 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
                        onClick={changeTheme}
                      >
                        {mode === 'light' ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-5 h-5 transform -rotate-90'
                          >
                            <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                              fillRule='evenodd'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Small devices */}
              </>
            )}
        </div>
      </div>
    </header>
  )
}

export default HorizontalLayout
