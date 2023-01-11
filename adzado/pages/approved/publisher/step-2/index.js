// Next
import Head from 'next/head'

// Layout
import Layout from '../../../../components/@core/layouts/Layout'

const PublisherRegistrationApprovedSecondStep = () => {
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
        <section className='container flex-col items-center justify-center block px-2.5 md:px-5 mx-auto md:flex'>
          <div className='lg:mx-0 max-w-[800px] mx-auto'>
            <h2 className='font-semibold text-2xl md:text-[43.29px] text-[#242424] mt-16 text-center'>
              Tax Form Upload
            </h2>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              {`Let’s`} make sure you get paid for your hard work & efforts.
              Please fill out the appropriate tax form that {`fit’s`} your
              business situation and upload them here.
            </p>
          </div>
          <div className='border border-[#163262] border-opacity-[15%] rounded-md md:max-w-[876px] md:w-[876px] mx-auto mt-8 flex flex-col justify-center items-center px-10 py-8'>
            <h5 className='font-medium text-[14.31px]'>
              Click the form name to download
            </h5>
            <div className='flex justify-between gap-20 mt-5'>
              <div className='w-full'>
                <h4 className='font-medium text-[24.53px]'>U.S Residents</h4>
                <div className='bg-[#061B4A] mt-2 flex items-center justify-between w-full md:w-[328px] h-[51.13px] px-[24.38px] cursor-pointer rounded-md'>
                  <h6 className='!text-adzado font-semibold text-[24.53px] flex items-center gap-2'>
                    W9{' '}
                    <span className='text-white font-medium text-[14.31px]'>
                      (Individual or Corporation)
                    </span>
                  </h6>
                  <svg
                    width='13'
                    height='16'
                    viewBox='0 0 13 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.93457 14.8704H11.5832M1.52616 7.1797L6.25889 11.3208L10.9916 7.1797M6.25889 1.26379V11.3208'
                      stroke='white'
                      stroke-width='1.77477'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <div className='w-full'>
                <h4 className='font-medium text-[24.53px]'>Outside the U.S</h4>
                <div className='bg-[#061B4A] mt-2 flex items-center justify-between w-full md:w-[328px] h-[51.13px] px-[24.38px] cursor-pointer rounded-md'>
                  <h6 className='!text-adzado font-semibold text-[24.53px] flex items-center gap-2'>
                    W8-BEN{' '}
                    <span className='text-white font-medium text-[14.31px]'>
                      (Individual)
                    </span>
                  </h6>
                  <svg
                    width='13'
                    height='16'
                    viewBox='0 0 13 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.93457 14.8704H11.5832M1.52616 7.1797L6.25889 11.3208L10.9916 7.1797M6.25889 1.26379V11.3208'
                      stroke='white'
                      stroke-width='1.77477'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <div className='bg-[#061B4A] mt-2 flex items-center justify-between w-full md:w-[328px] h-[51.13px] px-[24.38px] cursor-pointer rounded-md'>
                  <h6 className='!text-adzado font-semibold text-[24.53px] flex items-center gap-2'>
                    W8-BEN-N{' '}
                    <span className='text-white font-medium text-[14.31px]'>
                      (Corporation)
                    </span>
                  </h6>
                  <svg
                    width='13'
                    height='16'
                    viewBox='0 0 13 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.93457 14.8704H11.5832M1.52616 7.1797L6.25889 11.3208L10.9916 7.1797M6.25889 1.26379V11.3208'
                      stroke='white'
                      stroke-width='1.77477'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <label className='mt-8 border border-dashed border-[#163262] bg-[#02102F] py-12 rounded-md cursor-pointer'>
              <div className='flex items-center justify-center gap-3 max-w-[740px] lg:w-[740px] w-full'>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.209 6.06721H17.9629V14.329H22.0938L16.586 21.2137L11.0781 14.329H15.209V6.06721Z'
                    fill='#12A6DD'
                  />
                  <path
                    d='M27.6026 25.3445H5.5713V15.7058H2.81738V25.3445C2.81738 26.8633 4.05251 28.0984 5.5713 28.0984H27.6026C29.1214 28.0984 30.3565 26.8633 30.3565 25.3445V15.7058H27.6026V25.3445Z'
                    fill='#12A6DD'
                  />
                </svg>
                <h5 className='font-medium text-[19.05px]'>
                  Drag & Drop Filled Tax Form here or
                </h5>
                <span className='text-adzado border border-adzado p-1 rounded text-[9.56px] font-medium'>
                  Browse File
                </span>
              </div>
              <input
                type='file'
                className='hidden'
                name='taxForm'
                id='taxForm'
              />
            </label>
          </div>
          <div className='flex items-center justify-center mt-5 md:mt-10'>
            <button
              type='submit'
              className='font-medium text-[23.63px] text-white w-[452.59px] bg-adzado rounded-lg py-2.5 mt-[39px]'
            >
              Upload Documents
            </button>
          </div>
        </section>
        <div className='container pt-[123.47px] pb-[40px] mx-auto'>
          <p className='text-center'>
            © 2022 All rights reserved by adzado LLC.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default PublisherRegistrationApprovedSecondStep
