// Next
import Head from 'next/head'
import Link from 'next/link'

// Layout
import Layout from '../../components/@core/layouts/Layout'

const ResetPassword = () => {
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
        <section className='container mx-auto flex justify-center items-start max-w-[451.19px] lg:h-screen'>
          <div className='lg:mx-0'>
            <h2 className='font-semibold text-[43.29px] text-[#242424] mt-16'>
              Password Reset
            </h2>
            <p className='font-medium text-[#8A99BB] dark:text-[#8A99BB] text-[13.17px]'>
              Enter your adzado email address that you used to register.{' '}
              {`We'll`} send you an email with a link to reset your password.
            </p>
            <form>
              <div className='mt-3'>
                <label
                  className='text-[#242424] font-semibold text-[19.68px] block mt-6'
                  htmlFor='email'
                >
                  Registered Email
                </label>
                <input
                  name='email'
                  id='email'
                  type='email'
                  className='block w-full border-2 border-[#1E1E1E] dark:border-[#163262] rounded-lg bg-transparent px-5 py-3 mt-2'
                  placeholder='Enter your email...'
                />
              </div>
              <button
                type='submit'
                className='font-medium text-[23.63px] text-white bg-adzado w-full rounded-lg py-2.5 mt-5'
              >
                Send
              </button>
            </form>
            <p className='text-[#4889B8] dark:text-[#4889B8] font-semibold flex gap-3 mt-5 items-center justify-center'>
              If you still need help, contact{' '}
              <Link
                href='/'
                className='cursor-pointer text-adzado dark:text-adzado'
              >
                adzado support
              </Link>
            </p>
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

export default ResetPassword
