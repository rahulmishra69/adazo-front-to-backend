// Next
import Head from 'next/head'
import Image from 'next/image'

// Layout
import Layout from '../../../../components/@core/layouts/Layout'

const PublisherRegistrationApprovedThirdStep = () => {
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

      <main className='dark:bg-[#011031] px-5'>
        <section className='container items-start justify-center block mx-auto md:flex'>
          <div className='lg:mx-0 max-w-[800px] mx-auto'>
            <h2 className='font-semibold text-2xl md:text-[43.29px] text-[#242424] mt-16 text-center'>
              {`You’re`} All Set
            </h2>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              Thank you for completing your account. Please wait while we setup
              your new dashboard and marketplace...
            </p>
            <div className='relative flex flex-col items-center justify-center px-5 md:px-10'>
              <Image
                src='/animation_640_lai443yi_1.svg'
                alt='animation_640_lai443yi_1'
                width={516}
                height={516}
              />
              <div className='absolute bottom-0'>
                <Image
                  src='/animation_500_lai4b5cl_1.svg'
                  alt='animation_500_lai4b5cl_1'
                  width={78}
                  height={78}
                />
              </div>
            </div>
            <p className='font-semibold !text-[#00D1FF] md:text-[19.68px] text-center mt-[22px]'>
              You will be redirected to your account once we finish. If for some
              reason you are not taken to your account dashboard in the next 2-3
              minutes, please refresh this page.
            </p>
          </div>
        </section>
        <div className='container pt-[157px] pb-[40px] mx-auto'>
          <p className='text-center'>
            © 2022 All rights reserved by adzado LLC.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default PublisherRegistrationApprovedThirdStep
