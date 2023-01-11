// Next
import Head from 'next/head'
import Image from 'next/image'

// Layout
import Layout from '../../../../components/@core/layouts/Layout'

const UserRegistrationFirstStep = () => {
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
              Welcome To Adzado
            </h2>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              Thank you for your interest in working with us! Here at adzado we
              make it easy for advertiser like yourself to tap into real-time
              leads instantly.
            </p>
            <div className='bg-[#525252] md:w-[640px] md:h-[360px] mx-auto mt-8 flex justify-center items-center'>
              <Image
                src='/Play_button.svg'
                className='cursor-pointer'
                alt='Play_button'
                width={111.03}
                height={111.03}
              />
            </div>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              Before we get started, please watch this intro video from our
              Co-Founder
            </p>
            <div className='flex items-center justify-center mt-5 md:mt-10'>
              <button
                type='submit'
                className='font-medium text-[23.63px] text-white w-[452.59px] bg-adzado rounded-lg py-2.5 mt-[79.26px]'
              >
                Continue
              </button>
            </div>
          </div>
        </section>
        <div className='container py-5 mx-auto'>
          <p className='text-center'>
            © 2022 All rights reserved by adzado LLC.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default UserRegistrationFirstStep
