// Next
import Head from 'next/head'
import Image from 'next/image'

// Layout
import Layout from '../../../../components/@core/layouts/Layout'

const UserRegistrationThirdStep = () => {
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
          <div className='lg:mx-0 max-w-[800px] mx-auto'>
            <h2 className='font-semibold text-2xl md:text-[43.29px] text-[#242424] mt-16 text-center'>
              Account Under Review
            </h2>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              Your application has been recieved and your account manager will
              be reaching out to your shortly. You many also contact them
              directly using the info below.
            </p>
            <div className='dark:bg-[#06234C] md:w-[390px] mx-auto mt-8 flex flex-col px-5 md:px-10 py-8 rounded-md'>
              <div className='flex flex-col-reverse items-center justify-between w-full sm:flex-row'>
                <div className='mt-3 text-center sm:text-left sm:mt-0'>
                  <h6 className='text-[20.8px]'>Rachel D. Lohr</h6>
                  <p className='text-adzado dark:text-adzado'>
                    Account Manager
                  </p>
                </div>
                <div>
                  <Image
                    src='/unsplash_IF9TK5Uy-KI.png'
                    className='cursor-pointer'
                    alt='unsplash_IF9TK5Uy-KI'
                    width={83.66}
                    height={89}
                  />
                </div>
              </div>

              <div className='flex items-center justify-start mt-5 gap-x-3'>
                <div className='w-[23px]'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.9095 6.44992L7.41267 2.41348C7.00955 1.94833 6.27048 1.9504 5.80223 2.41968L2.92659 5.30049C2.07072 6.15739 1.82575 7.42983 2.32087 8.45005C5.27881 14.5744 10.2181 19.5206 16.3383 22.4871C17.3575 22.9823 18.6289 22.7373 19.4848 21.8804L22.3873 18.9727C22.8576 18.5024 22.8586 17.7592 22.3894 17.3561L18.3374 13.8778C17.9136 13.5139 17.2552 13.5615 16.8303 13.9874L15.4204 15.3993C15.3483 15.475 15.2532 15.5249 15.15 15.5413C15.0467 15.5577 14.9409 15.5398 14.8488 15.4903C12.5442 14.1632 10.6325 12.249 9.3084 9.94265C9.25882 9.8504 9.24086 9.74442 9.25729 9.64098C9.27372 9.53754 9.32363 9.44235 9.39937 9.37L10.8051 7.96319C11.231 7.53526 11.2775 6.87372 10.9095 6.44888V6.44992Z'
                      stroke='#00D1FF'
                      stroke-width='1.43447'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <p className='break-all'>+1 (323) 410-1052</p>
              </div>
              <div className='flex items-center justify-start mt-3 gap-x-3'>
                <div className='w-[23px]'>
                  <svg
                    width='23'
                    height='18'
                    viewBox='0 0 23 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M21.0511 0.9422H1.75614C1.39062 0.9422 1.04006 1.0874 0.781599 1.34587C0.523134 1.60433 0.37793 1.95489 0.37793 2.32041V16.1025C0.37793 16.4681 0.523134 16.8186 0.781599 17.0771C1.04006 17.3355 1.39062 17.4807 1.75614 17.4807H21.0511C21.4166 17.4807 21.7672 17.3355 22.0257 17.0771C22.2841 16.8186 22.4293 16.4681 22.4293 16.1025V2.32041C22.4293 1.95489 22.2841 1.60433 22.0257 1.34587C21.7672 1.0874 21.4166 0.9422 21.0511 0.9422ZM19.9899 16.1025H2.90006L7.7238 11.1134L6.73149 10.1555L1.75614 15.3032V3.36785L10.3217 11.8921C10.58 12.1488 10.9293 12.2929 11.2934 12.2929C11.6575 12.2929 12.0068 12.1488 12.265 11.8921L21.0511 3.15423V15.2136L15.9793 10.1418L15.0076 11.1134L19.9899 16.1025ZM2.65887 2.32041H19.9348L11.2934 10.9136L2.65887 2.32041Z'
                      fill='#00D1FF'
                    />
                  </svg>
                </div>
                <p className='break-all'>Rachel@adzado.com</p>
              </div>
              <div className='flex items-center justify-start mt-3 gap-x-3'>
                <div className='w-[23px]'>
                  <svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.4089 11.633C19.5082 11.0879 19.5615 10.5307 19.5615 9.97351C19.5615 8.73796 19.3193 7.53876 18.842 6.41223C18.3817 5.32204 17.7203 4.3433 16.8797 3.50264C16.046 2.66688 15.0578 2.00122 13.9701 1.54273C12.8411 1.06547 11.6443 0.823202 10.4088 0.823202C9.82736 0.823202 9.2435 0.878923 8.67661 0.987942C7.89219 0.572273 7.01816 0.354388 6.13041 0.35321C4.6841 0.35321 3.32258 0.917685 2.30022 1.94004C1.79574 2.44193 1.39575 3.03885 1.12338 3.69628C0.851008 4.35371 0.711661 5.05861 0.713395 5.77023C0.713395 6.69083 0.950814 7.5969 1.39416 8.39637C1.30452 8.91481 1.25607 9.44537 1.25607 9.97351C1.25607 11.2091 1.49833 12.4083 1.97559 13.5348C2.43589 14.625 3.09485 15.6037 3.9355 16.4444C4.77616 17.285 5.75491 17.944 6.84509 18.4043C7.97404 18.8815 9.17083 19.1238 10.4064 19.1238C10.9442 19.1238 11.482 19.0754 12.0102 18.9809C12.8217 19.4388 13.7375 19.6834 14.6751 19.6834C16.1214 19.6834 17.4829 19.1214 18.5053 18.0966C19.53 17.0743 20.0921 15.7127 20.0921 14.2664C20.0945 13.3458 19.8571 12.4373 19.4089 11.633ZM17.2745 16.8659C16.5793 17.5636 15.6611 17.9416 14.6775 17.9416C14.0452 17.9416 13.4226 17.7768 12.8702 17.4643L12.3251 17.1566L11.7073 17.2656C11.2761 17.3432 10.84 17.3819 10.4088 17.3819C9.40582 17.3819 8.43919 17.1857 7.52343 16.7981C6.64401 16.4274 5.85181 15.8944 5.16863 15.2113C4.49234 14.5373 3.95341 13.7384 3.5818 12.8589C3.19418 11.9455 3.00037 10.9789 3.00037 9.97593C3.00037 9.55439 3.03913 9.12316 3.11181 8.69678L3.2184 8.08869L2.918 7.54845C2.615 7.00472 2.45574 6.39268 2.45527 5.77023C2.45527 4.78664 2.83563 3.86846 3.53092 3.17316C4.22864 2.47786 5.14682 2.09751 6.13041 2.09751C6.7337 2.09914 7.32747 2.248 7.86018 2.53116L8.40285 2.81703L9.00366 2.70075C9.46154 2.61353 9.93396 2.5675 10.4088 2.5675C11.4118 2.5675 12.3784 2.76374 13.2917 3.14893C14.176 3.52202 14.9658 4.055 15.6465 4.73576C16.3297 5.41652 16.8627 6.20873 17.2358 7.09057C17.6234 8.0039 17.8172 8.97053 17.8172 9.97351C17.8172 10.4193 17.776 10.8699 17.6937 11.3181L17.5798 11.9358L17.8851 12.4834C18.1903 13.0285 18.3502 13.6462 18.3502 14.2688C18.3502 15.2549 17.9698 16.1706 17.2745 16.8659ZM12.1337 8.90997L9.9921 8.43513C9.17809 8.24859 8.24053 8.0039 8.24053 7.23593C8.24053 6.46795 8.89707 5.93012 10.0842 5.93012C12.4753 5.93012 12.2573 7.57267 13.4444 7.57267C14.0694 7.57267 14.6169 7.20443 14.6169 6.57455C14.6169 5.10158 12.2573 3.99444 10.2562 3.99444C8.08306 3.99444 5.76944 4.91746 5.76944 7.37402C5.76944 8.55626 6.19098 9.81604 8.52156 10.3999L11.4142 11.1218C12.2888 11.3375 12.5092 11.8292 12.5092 12.275C12.5092 13.0139 11.7752 13.7359 10.4451 13.7359C7.84807 13.7359 8.20904 11.7372 6.81844 11.7372C6.1934 11.7372 5.74037 12.1684 5.74037 12.7813C5.74037 13.9781 7.19395 15.5771 10.4451 15.5771C13.5388 15.5771 15.0724 14.0871 15.0724 12.0885C15.0724 10.802 14.4788 9.43326 12.1337 8.90997Z'
                      fill='#00D1FF'
                    />
                  </svg>
                </div>
                <p className='break-all'>live:.cid.435345e45ebere23523</p>
              </div>
              <div className='flex items-center justify-start mt-3 gap-x-3'>
                <div className='w-[23px]'>
                  <svg
                    width='23'
                    height='23'
                    viewBox='0 0 23 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.404 22.1637C17.1127 22.1637 21.7406 17.5358 21.7406 11.8271C21.7406 6.11833 17.1127 1.49048 11.404 1.49048C5.69523 1.49048 1.06738 6.11833 1.06738 11.8271C1.06738 17.5358 5.69523 22.1637 11.404 22.1637Z'
                      stroke='#00D1FF'
                      stroke-width='1.65776'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M14.5053 15.9615L12.01 13.4663C11.6223 13.0787 11.4044 12.5529 11.4043 12.0047V5.62493'
                      stroke='#00D1FF'
                      stroke-width='1.65776'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <p className='break-all'>Mo - Fr, 07:00 AM - 4:00 PM (PST)</p>
              </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
              <button
                type='submit'
                className='font-medium text-[23.63px] text-white w-[452.59px] bg-adzado rounded-lg py-2.5'
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

export default UserRegistrationThirdStep
