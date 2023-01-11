// Next
import Image from 'next/image'

const Features = () => {
  return (
    <section className='container grid w-full grid-cols-1 px-5 pt-32 pb-10 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20'>
      <div className='col-span-1 bg-[#03183E] flex justify-center items-center flex-col px-5 md:p-14 rounded shadow-2xl bg-blue-shadow bg-opacity-10 bg-center h-[242.85px]'>
        <Image
          src='/Grow_Your_Business.svg'
          className='-mt-24'
          alt='Grow_Your_Business'
          width={83.86}
          height={91.52}
        />
        <h3 className='mt-5 text-2xl font-medium text-center text-midnight-blue'>
          Grow Your Business
        </h3>
        <p className='mt-3 text-center !text-medium-gray'>
          Exclusive Fresh Leads. Spend less time prospecting leads and more time
          scaling your business
        </p>
      </div>
      <div className='col-span-1 bg-[#03183E] flex justify-center items-center flex-col px-5 md:p-14 rounded shadow-2xl bg-blue-shadow bg-opacity-10 bg-center h-[242.85px]'>
        <Image
          src='/Live_Phone_Calls.svg'
          className='-mt-24'
          alt='Live_Phone_Calls'
          width={80.41}
          height={80.41}
        />
        <h3 className='mt-8 text-2xl font-medium text-center text-midnight-blue'>
          Live Phone Calls
        </h3>
        <p className='mt-3 text-center !text-medium-gray'>
          Get customers directly on your phone. Our media team produces high
          intent live phone calls for your sales team
        </p>
      </div>
      <div className='col-span-1 bg-[#03183E] flex justify-center items-center flex-col px-5 md:p-14 rounded shadow-2xl bg-blue-shadow bg-opacity-10 bg-center h-[242.85px]'>
        <Image
          src='/Marketplace.svg'
          className='-mt-24'
          alt='Marketplace'
          width={90.03}
          height={89.79}
        />
        <h3 className='mt-6 text-2xl font-medium text-center text-midnight-blue'>
          Marketplace
        </h3>
        <p className='mt-3 text-center !text-medium-gray'>
          Need leads right now? Explore our Lead Marketplace. Every lead is
          filtered for quality and compliance.
        </p>
      </div>
    </section>
  )
}

export default Features
