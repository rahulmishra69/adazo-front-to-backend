// Next
import Link from 'next/link'
import Image from 'next/image'

const MarketplaceComingSoon = () => {
  return (
    <section className='container flex justify-between w-full gap-20 px-5 mx-auto'>
      <div className='w-full lg:w-2/3'>
        <h2 className='font-medium text-[50.84px]'>Hold Tight!</h2>
        <h2 className='text-3xl font-medium lg:!leading-[64px] xl:text-[51.59px] text-midnight-blue'>
          <span className='text-adzado'>Marketplace</span> is Launching Soon.
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
  )
}

export default MarketplaceComingSoon
