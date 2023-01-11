// React
import { useState } from 'react'

// Next
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

// Layout
import Layout from '../../components/@core/layouts/Layout'

const UserRegistration = () => {
  const router = useRouter()

  const [selectedType, setSelectedType] = useState()
  const [error, setError] = useState(false)

  const registrationStep = () => {
    if (selectedType === 'Advertiser') {
      router.push('/registration/user/step-1')
    } else if (selectedType === 'Publisher') {
      router.push('/registration/publisher/step-1')
    } else {
      setError(true)
    }
  }

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
        <section className='container items-start justify-center block mx-auto md:flex lg:h-screen'>
          <div className='mx-auto lg:mx-0'>
            <h2 className='font-semibold text-2xl md:text-[43.29px] text-[#242424] mt-16 text-center'>
              Choose Account Type
            </h2>
            <p className='font-semibold text-[#8A99BB] text-lg md:text-[19.68px] text-center mt-[22px]'>
              Choose what type of account best fits your business needs.
            </p>
            <div className='items-center justify-between block gap-10 mt-16 lg:flex'>
              <div
                className={`border px-16 py-8 dark:bg-[#000d28] rounded-md flex flex-col md:flex-row justify-center items-center gap-[32.5px] ${
                  selectedType === 'Advertiser'
                    ? 'dark:border-white border-adzado'
                    : 'border-[#163262] border-dashed'
                } cursor-pointer`}
                onClick={() => setSelectedType('Advertiser')}
              >
                <div className='w-[77px]'>
                  <Image
                    src='/filled_outline.svg'
                    alt='filled_outline'
                    width={77}
                    height={71.5}
                  />
                </div>
                <div className='text-center lg:text-left'>
                  <h3 className='font-semibold lg:text-[31.21px] text-2xl'>
                    Advertiser
                  </h3>
                  <p className='font-semibold lg:text-[19.17px]'>(Buy Leads)</p>
                </div>
              </div>
              <p className='font-semibold text-[19.68px] text-center my-5 lg:my-0'>
                OR
              </p>
              <div
                className={`border px-16 py-8 dark:bg-[#000d28] rounded-md flex flex-col md:flex-row justify-center items-center gap-[32.5px] ${
                  selectedType === 'Publisher'
                    ? 'dark:border-white border-adzado'
                    : 'border-[#163262] border-dashed'
                } cursor-pointer`}
                onClick={() => setSelectedType('Publisher')}
              >
                <div className='w-[82.25px]'>
                  <Image
                    src='/hand_shaking.svg'
                    alt='hand_shaking'
                    width={82.25}
                    height={85.4}
                  />
                </div>
                <div className='text-center lg:text-left'>
                  <h3 className='font-semibold lg:text-[31.21px] text-2xl'>
                    Publisher
                  </h3>
                  <p className='font-semibold lg:text-[19.17px]'>
                    (Sell Leads)
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-10 gap-y-5'>
              <button
                type='button'
                onClick={registrationStep}
                className='font-medium text-[23.63px] text-white w-[452.59px] bg-adzado rounded-lg py-2.5 mt-8 md:mt-[79.26px]'
              >
                Continue
              </button>
              {error && (
                <p className='text-sm !text-red-500'>
                  Please select an option first
                </p>
              )}
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

export default UserRegistration
