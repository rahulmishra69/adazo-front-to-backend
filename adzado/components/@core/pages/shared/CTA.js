// Next
import Link from 'next/link'
import Image from 'next/image'

const CTA = () => {
  return (
    <div>
      <section className='pb-6 pt-32'>
        <div className='relative container mx-auto px-5 border-l-8 border-[#031D54] bg-secondary-blue py-14 lg:px-32'>
          <h3 className='text-4xl font-bold text-midnight-blue dark:text-midnight-blue'>
            Start Receiving live calls from real
            <br />
            clients right now.
          </h3>
          <p className='mt-5 text-xl font-medium text-white'>
            We Generate, Verify, & Provide Leads That Turn Into
            <br />
            Customers!
          </p>
          <Link
            href='/signup'
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
    </div>
  )
}

export default CTA
