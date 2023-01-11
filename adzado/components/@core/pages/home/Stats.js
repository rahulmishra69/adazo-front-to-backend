// Next
import Image from 'next/image'

const Stats = () => {
  return (
    <section className='pt-20 shadow-2xl pb-28'>
      <div className='container px-5 mx-auto'>
        <h3 className='text-4xl text-center text-adzado-black'>Some stats</h3>
        <p className='mt-6 text-center !text-medium-gray'>
          We like to keep things transparent. Here are a few stats {`we’re`}{' '}
          proud of.
        </p>
        <div className='flex flex-col items-center justify-between gap-8 mx-auto mt-20 lg:flex-row max-w-1000px'>
          <div className='py-10 px-16 border-t border-[#ffb133] bg-radial-gradiant-yellow'>
            <div className='flex items-center justify-center gap-x-3'>
              <h5 className='text-5xl text-adzado-black'>5.0</h5>
              <Image src='/Star.svg' alt='Star' width={43.7} height={41.73} />
            </div>
            <p className='mt-3 text-xs leading-normal text-center text-adzado-black'>
              Company Rating on
              <br />
              Google Reviews
            </p>
          </div>
          <div className='py-10 px-16 border-t border-[#0DFF73]'>
            <div className='flex items-center justify-center text-5xl text-adzado-black'>
              <h5>101.3</h5>
              <span className='text-[#148C47]'>K</span>
            </div>
            <p className='mt-3 text-xs leading-normal text-center text-adzado-black'>
              Leads Generated
              <br />
              Per Month
            </p>
          </div>
          <div className='py-10 px-16 border-t border-[#0D5FFF]'>
            <div className='flex items-center justify-center text-5xl text-adzado-black'>
              <h5>42.3</h5>
              <span className='text-[#0096E6]'>K</span>
            </div>
            <p className='mt-3 text-xs leading-normal text-center text-adzado-black'>
              Inbound Calls Genearted
              <br />
              per month
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
