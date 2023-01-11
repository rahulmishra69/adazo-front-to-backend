// Next
import Head from 'next/head'

// Layout
import Layout from '../../components/@core/layouts/Layout'

const Rejected = () => {
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
              Sorry, {`It’s`} Not A Fit 😞
            </h2>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              Unfortunatly, at this time we are unable to approve your account.
              However, this {`doesn’t mean “Forever”`}{' '}
              <span className='text-adzado'>John</span>... Please review the
              reason(s) why below.
            </p>
            <div className='md:w-[750px] mx-auto mt-8 flex flex-col justify-center items-center'>
              <div className='flex justify-between items-center w-full max-w-[750px] lg:w-[750px] p-5 bg-[#061C4E] rounded-lg border-[0.4px] border-[#46C7E3] cursor-pointer border-opacity-[60%]'>
                <div className='flex items-center gap-x-5'>
                  <svg
                    width='50'
                    height='44'
                    viewBox='0 0 50 44'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M30.9301 12.6938C30.0723 12.6938 29.3768 11.9983 29.3768 11.1404V5.7501C29.3768 4.5541 28.4038 3.58115 27.2078 3.58115H18.7053C17.5093 3.58115 16.5363 4.5541 16.5363 5.7501V11.1404C16.5363 11.9982 15.8409 12.6938 14.983 12.6938C14.1252 12.6938 13.4297 11.9983 13.4297 11.1404V5.7501C13.4297 2.84121 15.7963 0.474609 18.7052 0.474609H27.2077C30.1166 0.474609 32.4832 2.84121 32.4832 5.7501V11.1404C32.4833 11.9983 31.7879 12.6938 30.9301 12.6938Z'
                      fill='#163262'
                    />
                    <path
                      d='M41.2715 23.9216H4.64092C2.07783 23.9216 0 21.8438 0 19.2808V37.417C0 39.9801 2.07783 42.0579 4.64092 42.0579H41.2715C43.8346 42.0579 45.9124 39.9801 45.9124 37.417V19.2808C45.9123 21.8438 43.8346 23.9216 41.2715 23.9216Z'
                      fill='#00D1FF'
                    />
                    <path
                      d='M39.8397 20.2874V14.5135C39.8397 11.9504 37.7619 9.87256 35.1988 9.87256H4.64092C2.07783 9.87256 0 11.9504 0 14.5135V20.2874C0 22.8505 2.07783 24.9283 4.64092 24.9283H35.1989C37.762 24.9282 39.8397 22.8505 39.8397 20.2874Z'
                      fill='#1B5593'
                    />
                    <path
                      d='M41.2714 9.87256H35.0898C37.6529 9.87256 39.7308 11.9504 39.7308 14.5135V20.2874C39.7308 22.8505 37.6529 24.9283 35.0898 24.9283H41.2714C43.8345 24.9283 45.9123 22.8505 45.9123 20.2874V14.5135C45.9122 11.9504 43.8345 9.87256 41.2714 9.87256Z'
                      fill='#0D3E72'
                    />
                    <path
                      d='M37.6434 43.5255C44.4675 43.5255 49.9996 37.9934 49.9996 31.1692C49.9996 24.3451 44.4675 18.813 37.6434 18.813C30.8192 18.813 25.2871 24.3451 25.2871 31.1692C25.2871 37.9934 30.8192 43.5255 37.6434 43.5255Z'
                      fill='#F9C301'
                    />
                    <path
                      d='M37.6431 40.7068C42.9105 40.7068 47.1807 36.4367 47.1807 31.1692C47.1807 25.9017 42.9105 21.6316 37.6431 21.6316C32.3756 21.6316 28.1055 25.9017 28.1055 31.1692C28.1055 36.4367 32.3756 40.7068 37.6431 40.7068Z'
                      fill='#F6F9F9'
                    />
                    <path
                      d='M37.6032 21.6317C36.9161 21.6346 36.2465 21.7107 35.6012 21.8515C39.8712 22.7835 43.0767 26.5768 43.0958 31.1289C43.1151 35.7092 39.9023 39.5484 35.6006 40.4869C36.2715 40.6333 36.9685 40.7097 37.6836 40.7067C42.951 40.6845 47.2031 36.3964 47.1809 31.1289C47.1587 25.8616 42.8706 21.6094 37.6032 21.6317Z'
                      fill='#E7ECF1'
                    />
                    <path
                      d='M41.1591 35.2704C40.9723 35.2704 40.7851 35.2014 40.639 35.0624L37.1229 31.7158C36.9739 31.5741 36.8894 31.3777 36.8886 31.1721L36.8633 24.5379C36.8617 24.1212 37.1982 23.7822 37.6149 23.7805H37.6179C38.0333 23.7805 38.3707 24.1165 38.3723 24.5322L38.3962 30.8445L41.6793 33.9692C41.9812 34.2565 41.9929 34.734 41.7057 35.036C41.5574 35.1917 41.3584 35.2704 41.1591 35.2704Z'
                      fill='#8C9BA6'
                    />
                    <path
                      d='M37.6437 32.7602C38.5224 32.7602 39.2348 32.0478 39.2348 31.1691C39.2348 30.2904 38.5224 29.5781 37.6437 29.5781C36.7651 29.5781 36.0527 30.2904 36.0527 31.1691C36.0527 32.0478 36.7651 32.7602 37.6437 32.7602Z'
                      fill='#021132'
                    />
                    <path
                      d='M8.82978 29.3475C7.24912 29.3475 5.96777 28.0661 5.96777 26.4854V21.0526C5.96777 20.4848 6.42812 20.0244 6.9959 20.0244H10.6635C11.2313 20.0244 11.6916 20.4848 11.6916 21.0526V26.4854C11.6917 28.0661 10.4104 29.3475 8.82978 29.3475Z'
                      fill='#FFAA67'
                    />
                    <path
                      d='M5.96777 23.5098V26.4854C5.96777 28.0661 7.24912 29.3475 8.82979 29.3475C10.4104 29.3475 11.6918 28.0661 11.6918 26.4854V23.5098H5.96777Z'
                      fill='#FF770D'
                    />
                  </svg>
                  <h5 className='font-medium text-[21px]'>
                    Lack of Experience
                  </h5>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </div>
              <div className='flex justify-between items-center w-full max-w-[750px] lg:w-[750px] p-5 bg-[#061C4E] rounded-lg border-[0.4px] border-[#46C7E3] cursor-pointer border-opacity-[60%] mt-2'>
                <div className='flex items-center gap-x-5'>
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5426 37.1624H13.6581L11.2548 37.9131L9.08184 39.4222L6.72754 41.8368V47.4707L9.08184 50H26.7121C27.5164 50 28.1686 49.3479 28.1686 48.5435V44.7883C28.1686 40.5767 24.7543 37.1624 20.5426 37.1624Z'
                      fill='#60B9FE'
                    />
                    <path
                      d='M40.5524 12.595H34.9715L33.4886 12.9633L31.3846 14.3718L29.7412 16.736V21.5399L31.2503 23.1639H45.6316C46.2938 23.1639 46.8307 22.6271 46.8307 21.9649V18.8733C46.8308 15.4059 44.0198 12.595 40.5524 12.595Z'
                      fill='#FF9542'
                    />
                    <path
                      d='M38.5362 0.325195H37.3617C37.3617 0.325195 34.9724 2.02275 34.8215 2.14854C34.6706 2.27432 33.74 5.26729 33.7652 5.46846C33.7903 5.66963 33.7903 7.9333 33.9663 8.23506C34.1424 8.53691 34.9724 10.725 34.9724 10.725L36.2048 11.6556L38.5363 12.2699C41.0352 11.4348 42.8371 9.07734 42.8371 6.29756C42.8371 3.51777 41.0352 1.16035 38.5362 0.325195Z'
                      fill='#FFCEBE'
                    />
                    <path
                      d='M7.8751 44.7883C7.8751 40.5766 11.2894 37.1624 15.501 37.1624H10.7949C6.5832 37.1624 3.16895 40.5766 3.16895 44.7883V48.5435C3.16895 49.3479 3.821 50 4.62539 50H7.875V44.7883H7.8751Z'
                      fill='#1CA8FF'
                    />
                    <path
                      d='M23.7648 49.9999V43.8902C23.7648 43.4735 23.4271 43.1357 23.0104 43.1357C22.5937 43.1357 22.2559 43.4735 22.2559 43.8902V49.9999H23.7648Z'
                      fill='#1CA8FF'
                    />
                    <path
                      d='M9.08223 49.9999V43.8902C9.08223 43.4735 8.74443 43.1357 8.32773 43.1357C7.91103 43.1357 7.57324 43.4735 7.57324 43.8902V49.9999H9.08223Z'
                      fill='#1CA8FF'
                    />
                    <path
                      d='M34.2357 6.29746C34.2357 3.51768 36.0376 1.16025 38.5365 0.325098C37.9089 0.115332 37.2379 0 36.5397 0C33.0617 0 30.2422 2.81943 30.2422 6.29746C30.2422 9.77549 33.0617 12.5949 36.5397 12.5949C37.2379 12.5949 37.9089 12.4796 38.5365 12.2698C36.0376 11.4348 34.2357 9.07734 34.2357 6.29746Z'
                      fill='#FFB1A0'
                    />
                    <path
                      d='M30.2426 21.9649V18.8733C30.2426 15.4059 33.0534 12.595 36.5209 12.595H32.5273C29.06 12.595 26.249 15.4059 26.249 18.8733V21.9649C26.249 22.6271 26.7858 23.1639 27.448 23.1639H31.4416C30.7794 23.1639 30.2426 22.6271 30.2426 21.9649Z'
                      fill='#FF770D'
                    />
                    <path
                      d='M31.2502 23.1639V18.1339C31.2502 17.7172 30.9124 17.3794 30.4957 17.3794C30.079 17.3794 29.7412 17.7172 29.7412 18.1339V23.1639H31.2502Z'
                      fill='#FF770D'
                    />
                    <path
                      d='M43.3381 23.1639V18.1339C43.3381 17.7172 43.0003 17.3794 42.5836 17.3794C42.1669 17.3794 41.8291 17.7172 41.8291 18.1339V23.1639H43.3381Z'
                      fill='#FF770D'
                    />
                    <path
                      d='M32.2927 40.7626H30.4957C30.079 40.7626 29.7412 40.4248 29.7412 40.0081C29.7412 39.5914 30.079 39.2536 30.4957 39.2536H32.2927C34.2184 39.2536 35.7852 37.6869 35.7852 35.7612V31.9776C35.7852 31.5609 36.123 31.2231 36.5396 31.2231C36.9563 31.2231 37.2941 31.5609 37.2941 31.9776V35.7612C37.2941 38.5189 35.0505 40.7626 32.2927 40.7626Z'
                      fill='#FFD500'
                    />
                    <path
                      d='M39.7379 31.0031L37.8787 28.1731H37.294L35.5264 31.4243L35.6347 32.1118C35.6347 32.1118 35.9403 32.3353 36.2423 32.5635H38.8961C39.6975 32.5634 40.178 31.6729 39.7379 31.0031Z'
                      fill='#FFD500'
                    />
                    <path
                      d='M36.0194 31.0032L37.8786 28.1732L37.3813 27.4162C36.9834 26.8105 36.0954 26.8105 35.6975 27.4162L33.3409 31.0032C32.9009 31.673 33.3814 32.5635 34.1828 32.5635H36.8612C36.0599 32.5635 35.5794 31.673 36.0194 31.0032Z'
                      fill='#FBC700'
                    />
                    <path
                      d='M18.0224 22.2344H16.1852L12.5757 25.7402C12.5757 25.7402 11.4568 30.1668 11.658 30.7201C11.8592 31.2734 12.8251 34.5431 13.0213 34.9455C13.2174 35.3479 14.3743 36.4043 14.3743 36.4043L17.5751 36.923C20.8775 36.0762 23.3186 33.0799 23.3186 29.5133C23.3187 26.1099 21.0954 23.2271 18.0224 22.2344Z'
                      fill='#FFCEBE'
                    />
                    <path
                      d='M12.7255 29.5131C12.7255 26.1098 14.9488 23.227 18.0218 22.2342C17.2803 21.9946 16.4899 21.8638 15.6687 21.8638C11.4441 21.8638 8.01953 25.2885 8.01953 29.513C8.01953 33.7375 11.4442 37.1622 15.6687 37.1622C16.4899 37.1622 17.2803 37.0313 18.0218 36.7918C14.9488 35.7992 12.7255 32.9164 12.7255 29.5131Z'
                      fill='#FFB1A0'
                    />
                  </svg>
                  <h5 className='font-medium text-[21px]'>No Work Reference</h5>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </div>
              <div className='flex justify-between items-center w-full max-w-[750px] lg:w-[750px] p-5 bg-[#061C4E] rounded-lg border-[0.4px] border-[#46C7E3] cursor-pointer border-opacity-[60%] mt-2'>
                <div className='flex items-center gap-x-5'>
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z'
                      fill='#048CF2'
                    />
                    <path
                      d='M34.4044 28.0957C36.1142 28.0957 37.5003 26.7097 37.5003 24.9999C37.5003 23.2901 36.1142 21.9041 34.4044 21.9041C32.6946 21.9041 31.3086 23.2901 31.3086 24.9999C31.3086 26.7097 32.6946 28.0957 34.4044 28.0957Z'
                      fill='white'
                    />
                    <path
                      d='M25.0001 28.0957C26.7099 28.0957 28.096 26.7097 28.096 24.9999C28.096 23.2901 26.7099 21.9041 25.0001 21.9041C23.2903 21.9041 21.9043 23.2901 21.9043 24.9999C21.9043 26.7097 23.2903 28.0957 25.0001 28.0957Z'
                      fill='white'
                    />
                    <path
                      d='M15.5958 28.0957C17.3056 28.0957 18.6917 26.7097 18.6917 24.9999C18.6917 23.2901 17.3056 21.9041 15.5958 21.9041C13.8861 21.9041 12.5 23.2901 12.5 24.9999C12.5 26.7097 13.8861 28.0957 15.5958 28.0957Z'
                      fill='white'
                    />
                  </svg>
                  <h5 className='font-medium text-[21px]'>Other</h5>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </div>
            </div>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              We encourage you to address the concerns above, if possible, and
              then reapply.
            </p>
            <div className='flex items-center justify-center mt-5 md:mt-10'>
              <button
                type='submit'
                className='font-medium text-[23.63px] text-white w-[452.59px] bg-adzado rounded-lg py-2.5 mt-[79.26px]'
              >
                {`I’m`} Ready To Reapply!
              </button>
            </div>
          </div>
        </section>
        <div className='container pt-[69.47px] pb-[40px] mx-auto'>
          <p className='text-center'>
            © 2022 All rights reserved by adzado LLC.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default Rejected