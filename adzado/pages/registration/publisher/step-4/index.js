// Next
import Head from 'next/head'
import Image from 'next/image'

// Layout
import Layout from '../../../../components/@core/layouts/Layout'

const PublisherRegistrationFourthStep = () => {
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
              Account Under Review
            </h2>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              Your application has been recieved and your account manager will
              be reaching out to your shortly. Please allow 1-3 days for your
              account review to be complete.
            </p>
            <div className='flex flex-col items-center justify-center px-5 md:px-10'>
              <Image
                src='/animation_500_laecnwcq_1.svg'
                alt='animation_500_laecnwcq_1'
                width={500}
                height={500}
              />
            </div>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              You will receive an email from us once your account is approved,
              rejected, or if we have any further question regarding the
              information you provided.{' '}
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

export default PublisherRegistrationFourthStep
