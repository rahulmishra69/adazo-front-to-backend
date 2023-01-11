// Next
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='container flex justify-between w-full gap-20 px-5 mx-auto'>
      <div className='w-full lg:w-1/3'>
        <h6 className='text-[11.43px] leading-[15px] tracking-[0.5px] text-midnight-blue dark:text-[#00D1FF] border-midnight-blue dark:border-[#00D1FF] border inline-block px-2 py-1.5 rounded'>
          Performance Lead Generation
        </h6>
        <h2 className='mt-[21.02px] text-3xl font-semibold lg:!leading-[64px] xl:text-[48.31px] text-midnight-blue'>
          Accelerate Your Sales with{' '}
          <span className='text-adzado'>High-Quality</span>{' '}
          <span className='text-primary-orange'>Live</span> Pay Per Call Leads
        </h2>
        <p className='mt-6 xl:text-lg lg:!leading-[38px] text-secondary-gray capitalize'>
          Exclusive Verified Leads that pay off in new business! Inbound calls
          and leads for insurance, financial services, and other industries.
        </p>
        <div className='flex flex-col items-start justify-start gap-5 mt-10 md:flex-row'>
          <Link
            href='/signup'
            className='flex items-center gap-5 px-5 py-4 font-medium text-white transition duration-200 ease-in-out delay-75 border rounded-lg group xl:px-8 border-adzado bg-adzado dark:hover:bg-transparent xl:text-xl hover:bg-white hover:text-adzado'
          >
            Get Started
            <svg
              className='transition duration-200 ease-in-out delay-75 stroke-white group-hover:stroke-adzado'
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
          <Link
            href='/pricing'
            className='flex items-center gap-5 px-5 py-4 font-medium transition duration-200 ease-in-out delay-75 bg-white border rounded-lg group xl:px-9 border-midnight-blue dark:bg-transparent dark:border-white dark:hover:!bg-adzado dark:hover:border-adzado text-midnight-blue xl:text-xl hover:bg-midnight-blue hover:text-white'
          >
            Calculate Your CPA
          </Link>
        </div>
      </div>
      <div className='relative hidden pr-10 lg:block'>
        <div className='shadow-2xl'>
          <Image
            src='/Home_Page_1.svg'
            className='block dark:hidden'
            alt='Home_Page_1'
            width={635}
            height={533.95}
          />
          <Image
            src='/Home_Page_2.svg'
            className='hidden dark:block'
            alt='Home_Page_2'
            width={635}
            height={533.95}
          />
        </div>
        <div className='absolute z-20 shadow-2xl -left-16 bottom-10'>
          <Image
            src='/Table_1.svg'
            className='block dark:hidden'
            alt='Table_1'
            width={320}
            height={415}
          />
          <Image
            src='/Table_2.svg'
            className='hidden dark:block'
            alt='Table_2'
            width={320}
            height={415}
          />
        </div>
        <div className='absolute right-0 z-20 top-1/3 xl:top-1/4 xl:right-0'>
          <div className='relative flex flex-col items-center justify-center bg-white bg-opacity-50 rounded-full shadow-xl w-28 bg-gradient-live-calls'>
            <Image src='/Call.svg' alt='Call' width={120.7} height={120.6} />
            <span className='absolute text-xs top-14 xl:top-20'>
              Live Calls
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
