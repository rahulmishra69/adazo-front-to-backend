// Next
import Head from 'next/head'

// Layout
import Layout from '../../../../components/@core/layouts/Layout'

const UserRegistrationSecondStep = () => {
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
              Complete Company Profile
            </h2>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px]'>
              We are excited to get to know more about your company and how
              adzado can help you grow through our{' '}
              <span className='text-[#17CDF5]'>
                Performance Lead Generation Platform.
              </span>
            </p>
            <div className='mt-8'>
              <div className='dark:bg-[#09224A] border border-[#09224A] px-5 md:px-20 py-10 rounded-md'>
                <h5 className='font-semibold text-adzado dark:text-adzado text-[26.05px]'>
                  Company Details
                </h5>
                <div className='flex flex-col w-full md:flex-row'>
                  <div className='flex flex-col mt-6 md:border-r border-[#05163D] md:w-1/2 md:pr-16'>
                    <label htmlFor='companyName'>Company Name</label>
                    <input
                      type='text'
                      className='dark:!bg-[#021536] md:max-w-[254px] w-full border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                      name='companyName'
                      id='companyName'
                    />
                  </div>
                  <div className='flex flex-col mt-6 md:w-1/2 md:pl-16'>
                    <label htmlFor='website'>Website</label>
                    <div className='relative h-[48.36px] mt-3'>
                      <input
                        type='text'
                        className='dark:!bg-[#021536] md:max-w-[254px] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                        name='website'
                        id='website'
                      />
                      <div
                        className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                        onClick={() =>
                          document.getElementById('website').focus()
                        }
                      >
                        <svg
                          width='19'
                          height='18'
                          viewBox='0 0 19 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9.25 17.25C13.8063 17.25 17.5 13.5563 17.5 9C17.5 4.44365 13.8063 0.75 9.25 0.75C4.69365 0.75 1 4.44365 1 9C1 13.5563 4.69365 17.25 9.25 17.25Z'
                            stroke='#0096E6'
                            strokeWidth='1.375'
                            strokeMiterlimit='10'
                          />
                          <path
                            d='M1.47266 6.25H17.0273'
                            stroke='#0096E6'
                            strokeWidth='1.375'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M1.47266 11.75H17.0273'
                            stroke='#0096E6'
                            strokeWidth='1.375'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9.25 17.0267C11.1485 17.0267 12.6875 13.4331 12.6875 9.00013C12.6875 4.56719 11.1485 0.973572 9.25 0.973572C7.35152 0.973572 5.8125 4.56719 5.8125 9.00013C5.8125 13.4331 7.35152 17.0267 9.25 17.0267Z'
                            stroke='#0096E6'
                            strokeWidth='1.375'
                            strokeMiterlimit='10'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='mt-6'>
                    <label htmlFor='timeZone'>Timezone</label>
                    <div className='relative h-[48.36px] mt-3'>
                      <select
                        type='text'
                        className='dark:!bg-[#021536] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                        name='timeZone'
                        id='timeZone'
                      >
                        <option value='(GMT - 04:00) Eastern Time'>
                          (GMT - 04:00) Eastern Time
                        </option>
                      </select>
                      <div
                        className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                        onClick={() =>
                          document.getElementById('timeZone').focus()
                        }
                      >
                        <svg
                          width='25'
                          height='24'
                          viewBox='0 0 25 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12.5 20.25C17.0563 20.25 20.75 16.5563 20.75 12C20.75 7.44365 17.0563 3.75 12.5 3.75C7.94365 3.75 4.25 7.44365 4.25 12C4.25 16.5563 7.94365 20.25 12.5 20.25Z'
                            stroke='#0096E6'
                            strokeWidth='1.5'
                            strokeMiterlimit='10'
                          />
                          <path
                            d='M12.5 11.9999L16.2125 8.28735'
                            stroke='#0096E6'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10.25 0.75H14.75'
                            stroke='#0096E6'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='dark:bg-[#09224A] border border-[#09224A] px-5 md:px-20 py-10 mt-5 rounded-md'>
                <h5 className='font-semibold text-adzado dark:text-adzado text-[26.05px]'>
                  Billing Details
                </h5>
                <div className='flex flex-col w-full md:flex-row'>
                  <div className='flex flex-col mt-6 md:border-r border-[#05163D] md:w-1/2 md:pr-16'>
                    <label htmlFor='companyName'>Phone Number</label>
                    <div className='relative h-[48.36px] mt-3'>
                      <input
                        type='text'
                        className='dark:!bg-[#021536] md:max-w-[254px] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                        name='phone'
                        id='phone'
                      />
                      <div
                        className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                        onClick={() => document.getElementById('phone').focus()}
                      >
                        <svg
                          width='24'
                          height='23'
                          viewBox='0 0 24 23'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            opacity='0.2'
                            d='M8.64889 11.3121C9.37395 12.8094 10.5847 14.0171 12.0839 14.7383C12.1944 14.7906 12.3168 14.8133 12.4388 14.804C12.5608 14.7948 12.6783 14.7539 12.7797 14.6854L14.9816 13.2146C15.0788 13.1486 15.1913 13.1083 15.3083 13.0975C15.4254 13.0867 15.5432 13.1058 15.6509 13.1529L19.7729 14.9232C19.9138 14.9819 20.0315 15.0852 20.1079 15.2173C20.1843 15.3494 20.2151 15.5029 20.1957 15.6543C20.065 16.674 19.5673 17.6111 18.7956 18.2904C18.024 18.9696 17.0313 19.3444 16.0032 19.3446C12.8264 19.3446 9.77965 18.0826 7.53328 15.8363C5.2869 13.5899 4.0249 10.5432 4.0249 7.3663C4.02513 6.33828 4.39994 5.34556 5.0792 4.5739C5.75845 3.80225 6.6956 3.30453 7.71529 3.17388C7.86664 3.15444 8.02018 3.18529 8.15227 3.26168C8.28437 3.33808 8.38768 3.45577 8.44632 3.59665L10.2166 7.72742C10.2627 7.83341 10.2819 7.94911 10.2727 8.0643C10.2635 8.1795 10.2261 8.29066 10.1638 8.38799L8.69293 10.6251C8.62745 10.7263 8.58902 10.8426 8.5813 10.9629C8.57359 11.0831 8.59687 11.2034 8.64889 11.3121Z'
                            fill='#0096E6'
                          />
                          <path
                            d='M8.64889 11.3121C9.37395 12.8094 10.5847 14.0171 12.0839 14.7383C12.1944 14.7906 12.3168 14.8133 12.4388 14.804C12.5608 14.7948 12.6783 14.7539 12.7797 14.6854L14.9816 13.2146C15.0788 13.1486 15.1913 13.1083 15.3083 13.0975C15.4254 13.0867 15.5432 13.1058 15.6509 13.1529L19.7729 14.9232C19.9138 14.9819 20.0315 15.0852 20.1079 15.2173C20.1843 15.3494 20.2151 15.5029 20.1957 15.6543C20.065 16.674 19.5673 17.6111 18.7956 18.2904C18.024 18.9696 17.0313 19.3444 16.0032 19.3446C12.8264 19.3446 9.77965 18.0826 7.53328 15.8363C5.2869 13.5899 4.0249 10.5432 4.0249 7.3663C4.02513 6.33828 4.39994 5.34556 5.0792 4.5739C5.75845 3.80225 6.6956 3.30453 7.71529 3.17388C7.86664 3.15444 8.02018 3.18529 8.15227 3.26168C8.28437 3.33808 8.38768 3.45577 8.44632 3.59665L10.2166 7.72742C10.2627 7.83341 10.2819 7.94911 10.2727 8.0643C10.2635 8.1795 10.2261 8.29066 10.1638 8.38799L8.69293 10.6251C8.62745 10.7263 8.58901 10.8426 8.5813 10.9629C8.57359 11.0831 8.59687 11.2034 8.64889 11.3121V11.3121Z'
                            stroke='#0096E6'
                            strokeWidth='1.40922'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col mt-6 md:w-1/2 md:pl-16'>
                    <label htmlFor='billingEmail'>
                      Billing email<span className='text-red-500'>*</span>
                    </label>
                    <div className='relative h-[48.36px] mt-3'>
                      <input
                        type='email'
                        className='dark:!bg-[#021536] md:max-w-[254px] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                        name='billingEmail'
                        id='billingEmail'
                      />
                      <div
                        className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                        onClick={() =>
                          document.getElementById('billingEmail').focus()
                        }
                      >
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M21 5.25L12 13.5L3 5.25'
                            stroke='#0096E6'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z'
                            stroke='#0096E6'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10.3594 12L3.23438 18.5344'
                            stroke='#0096E6'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M20.7656 18.5344L13.6406 12'
                            stroke='#0096E6'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <label htmlFor='address'>
                    Address<span className='text-red-500'>*</span>
                  </label>
                  <div className='relative h-[48.36px] mt-3'>
                    <input
                      type='text'
                      className='dark:!bg-[#021536] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                      name='address'
                      id='address'
                    />
                    <div
                      className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                      onClick={() => document.getElementById('address').focus()}
                    >
                      <svg
                        width='21'
                        height='22'
                        viewBox='0 0 21 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.5 12.3125C9.85103 12.3125 9.21664 12.1201 8.67704 11.7595C8.13744 11.399 7.71687 10.8865 7.46852 10.2869C7.22017 9.68736 7.15519 9.02761 7.2818 8.39111C7.40841 7.75461 7.72092 7.16995 8.17981 6.71106C8.6387 6.25217 9.22336 5.93966 9.85986 5.81305C10.4964 5.68644 11.1561 5.75142 11.7557 5.99977C12.3553 6.24812 12.8677 6.66869 13.2283 7.20829C13.5888 7.74789 13.7813 8.38228 13.7813 9.03125C13.7802 9.90117 13.4342 10.7352 12.819 11.3503C12.2039 11.9654 11.3699 12.3115 10.5 12.3125ZM10.5 7.0625C10.1106 7.0625 9.72998 7.17797 9.40622 7.3943C9.08246 7.61063 8.83012 7.9181 8.68111 8.27784C8.5321 8.63759 8.49312 9.03344 8.56908 9.41534C8.64505 9.79724 8.83255 10.148 9.10789 10.4234C9.38322 10.6987 9.73402 10.8862 10.1159 10.9622C10.4978 11.0381 10.8937 10.9991 11.2534 10.8501C11.6132 10.7011 11.9206 10.4488 12.137 10.125C12.3533 9.80127 12.4688 9.42063 12.4688 9.03125C12.4682 8.50927 12.2606 8.00881 11.8915 7.63971C11.5224 7.27061 11.022 7.06302 10.5 7.0625Z'
                          fill='#0096E6'
                        />
                        <path
                          d='M10.5 20.1875L4.96388 13.6585C4.88696 13.5604 4.81083 13.4618 4.73551 13.3625C3.78984 12.1168 3.27897 10.5952 3.28126 9.03125C3.28126 7.11672 4.0418 5.2806 5.39558 3.92682C6.74936 2.57304 8.58548 1.8125 10.5 1.8125C12.4145 1.8125 14.2507 2.57304 15.6044 3.92682C16.9582 5.2806 17.7188 7.11672 17.7188 9.03125C17.721 10.5945 17.2104 12.1154 16.2652 13.3605L16.2645 13.3625C16.2645 13.3625 16.0676 13.6211 16.0381 13.6558L10.5 20.1875ZM5.78288 12.5717C5.7842 12.5717 5.93645 12.7738 5.97123 12.8172L10.5 18.1584L15.0347 12.8099C15.0636 12.7738 15.2171 12.5704 15.2178 12.5697C15.9903 11.552 16.4078 10.309 16.4063 9.03125C16.4063 7.46482 15.784 5.96254 14.6764 4.8549C13.5687 3.74726 12.0664 3.125 10.5 3.125C8.93357 3.125 7.43129 3.74726 6.32366 4.8549C5.21602 5.96254 4.59376 7.46482 4.59376 9.03125C4.59238 10.3098 5.01033 11.5535 5.78354 12.5717H5.78288Z'
                          fill='#0096E6'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between gap-3 md:flex-row'>
                  <div className='flex flex-col mt-6'>
                    <label htmlFor='city'>
                      City<span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      className='dark:!bg-[#021536] md:max-w-[305px] lg:w-[305px] border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                      name='city'
                      id='city'
                    />
                  </div>
                  <div className='flex flex-col mt-6'>
                    <label htmlFor='state'>
                      State<span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      className='dark:!bg-[#021536] md:max-w-[184px] lg:w-[184px] border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                      name='state'
                      id='state'
                    />
                  </div>
                  <div className='flex flex-col mt-6'>
                    <label htmlFor='zipCode'>
                      Postal Code<span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      className='dark:!bg-[#021536] md:max-w-[104px] lg:w-[104px] border border-[#021536] h-[48.36px] mt-3 rounded-md px-5 tracking-[0.15em]'
                      name='zipCode'
                      id='zipCode'
                    />
                  </div>
                </div>
              </div>

              <div className='dark:bg-[#09224A] border border-[#09224A] px-5 md:px-20 py-10 mt-5 rounded-md'>
                <h5 className='font-semibold text-adzado dark:text-adzado text-[26.05px]'>
                  Social
                </h5>
                <div className='flex flex-col w-full md:flex-row gap-x-5'>
                  <div className='flex flex-col mt-6 md:w-1/2'>
                    <label htmlFor='facebook'>
                      Facebook<span className='text-red-500'>*</span>
                    </label>
                    <div className='relative h-[48.36px] mt-3'>
                      <input
                        type='text'
                        className='dark:!bg-[#021536] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                        name='facebook'
                        id='facebook'
                      />
                      <div
                        className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                        onClick={() =>
                          document.getElementById('facebook').focus()
                        }
                      >
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M1.71313 19.1666C1.22732 19.1666 0.833496 18.7706 0.833496 18.2822V1.71779C0.833496 1.2293 1.22732 0.833313 1.71313 0.833313H18.2872C18.773 0.833313 19.1668 1.2293 19.1668 1.71779V18.2822C19.1668 18.7706 18.773 19.1666 18.2872 19.1666C17.7008 19.1666 12.1761 19.1666 1.71313 19.1666Z'
                            stroke='#0096E6'
                            strokeWidth='1.66667'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M16.1093 7.45277H14.2951H14.0807C13.5182 7.45277 13.0622 7.90881 13.0622 8.47131V10.5089H16.1093L15.663 13.5634H13.0622V19.1666H9.71137V13.5634H6.94482V10.5089H9.67562L9.71137 7.60961L9.70141 6.57048C9.68732 5.10311 10.8654 3.90216 12.3328 3.88806C12.3413 3.88798 12.3498 3.88794 12.3583 3.88794H16.1093V7.45277Z'
                            fill='#0096E6'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col mt-6 md:w-1/2'>
                    <label htmlFor='skype'>
                      Skype<span className='text-red-500'>*</span>
                    </label>
                    <div className='relative h-[48.36px] mt-3'>
                      <input
                        type='text'
                        className='dark:!bg-[#021536] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                        name='skype'
                        id='skype'
                      />
                      <div
                        className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                        onClick={() => document.getElementById('skype').focus()}
                      >
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.9858 10.4309C17.0738 9.94746 17.1211 9.45332 17.1211 8.95918C17.1211 7.86348 16.9063 6.8 16.483 5.80098C16.0748 4.83418 15.4883 3.96621 14.7428 3.2207C14.0035 2.47954 13.1272 1.88922 12.1625 1.48262C11.1613 1.05938 10.1 0.844531 9.00431 0.844531C8.48869 0.844531 7.97091 0.893945 7.46818 0.990625C6.77254 0.622003 5.99744 0.428779 5.21017 0.427734C3.92755 0.427734 2.72013 0.92832 1.81349 1.83496C1.36611 2.28005 1.01139 2.80941 0.769844 3.39243C0.528302 3.97545 0.404727 4.60057 0.406264 5.23164C0.406264 6.04805 0.616811 6.85156 1.00998 7.56055C0.930483 8.02031 0.887514 8.49082 0.887514 8.95918C0.887514 10.0549 1.10236 11.1184 1.5256 12.1174C1.9338 13.0842 2.51818 13.9521 3.26369 14.6977C4.00919 15.4432 4.87716 16.0275 5.84396 16.4357C6.84513 16.859 7.90646 17.0738 9.00216 17.0738C9.47912 17.0738 9.95607 17.0309 10.4244 16.9471C11.1442 17.3531 11.9563 17.5701 12.7877 17.5701C14.0703 17.5701 15.2777 17.0717 16.1844 16.1629C17.0932 15.2562 17.5916 14.0488 17.5916 12.7662C17.5938 11.9498 17.3832 11.1441 16.9858 10.4309ZM15.093 15.0715C14.4764 15.6902 13.6621 16.0254 12.7899 16.0254C12.2291 16.0254 11.677 15.8793 11.1871 15.6021L10.7037 15.3293L10.1559 15.426C9.77345 15.4947 9.38673 15.5291 9.00431 15.5291C8.11486 15.5291 7.25763 15.3551 6.44552 15.0113C5.66564 14.6826 4.9631 14.21 4.35724 13.6041C3.7575 13.0064 3.27957 12.2979 2.95001 11.518C2.60626 10.708 2.43439 9.85078 2.43439 8.96133C2.43439 8.5875 2.46876 8.20508 2.53322 7.82695L2.62775 7.28769L2.36134 6.80859C2.09264 6.32641 1.9514 5.78364 1.95099 5.23164C1.95099 4.35937 2.2883 3.54512 2.9049 2.92852C3.52365 2.31191 4.3379 1.97461 5.21017 1.97461C5.74518 1.97605 6.27174 2.10806 6.74415 2.35918L7.2254 2.61269L7.75822 2.50957C8.16427 2.43223 8.58322 2.39141 9.00431 2.39141C9.89376 2.39141 10.751 2.56543 11.561 2.90703C12.3451 3.23789 13.0455 3.71055 13.6492 4.31426C14.2551 4.91797 14.7277 5.62051 15.0586 6.40254C15.4024 7.2125 15.5742 8.06973 15.5742 8.95918C15.5742 9.35449 15.5377 9.7541 15.4647 10.1516L15.3637 10.6994L15.6344 11.185C15.9051 11.6684 16.0469 12.2162 16.0469 12.7684C16.0469 13.6428 15.7096 14.4549 15.093 15.0715ZM10.534 8.01602L8.63478 7.59492C7.91291 7.42949 7.08146 7.2125 7.08146 6.53145C7.08146 5.85039 7.66369 5.37344 8.71642 5.37344C10.8369 5.37344 10.6436 6.83008 11.6963 6.83008C12.2506 6.83008 12.7361 6.50351 12.7361 5.94492C12.7361 4.63867 10.6436 3.65684 8.86896 3.65684C6.94181 3.65684 4.89005 4.47539 4.89005 6.65391C4.89005 7.70234 5.26388 8.81953 7.33068 9.3373L9.89591 9.97754C10.6715 10.1687 10.867 10.6049 10.867 11.0002C10.867 11.6555 10.216 12.2957 9.03654 12.2957C6.73341 12.2957 7.05353 10.5232 5.82033 10.5232C5.26603 10.5232 4.86427 10.9057 4.86427 11.4492C4.86427 12.5105 6.15334 13.9285 9.03654 13.9285C11.7801 13.9285 13.1401 12.6072 13.1401 10.8348C13.1401 9.69394 12.6137 8.48008 10.534 8.01602Z'
                            fill='#0096E6'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='flex flex-col mt-6 md:w-1/2'>
                    <label htmlFor='linkedIn'>
                      LinkedIn<span className='text-red-500'>*</span>
                    </label>
                    <div className='relative h-[48.36px] mt-3 mr-0 lg:mr-2'>
                      <input
                        type='text'
                        className='dark:!bg-[#021536] md:max-w-[321px] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                        name='linkedIn'
                        id='linkedIn'
                      />
                      <div
                        className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                        onClick={() =>
                          document.getElementById('linkedIn').focus()
                        }
                      >
                        <svg
                          width='23'
                          height='24'
                          viewBox='0 0 23 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.0401 3.01562H3.95986C3.1625 3.01562 2.51562 3.6625 2.51562 4.45986V19.5401C2.51562 20.3375 3.1625 20.9844 3.95986 20.9844H19.0401C19.8375 20.9844 20.4844 20.3375 20.4844 19.5401V4.45986C20.4844 3.6625 19.8375 3.01562 19.0401 3.01562ZM19.0401 19.5469C8.98213 19.5446 3.95312 19.5424 3.95312 19.5401C3.95537 9.48213 3.95762 4.45312 3.95986 4.45312C14.0179 4.45537 19.0469 4.45762 19.0469 4.45986C19.0446 14.5179 19.0424 19.5469 19.0401 19.5469ZM5.17949 9.75166H7.84561V18.3272H5.17949V9.75166ZM6.51367 8.5792C7.36494 8.5792 8.05898 7.8874 8.05898 7.03389C8.05898 6.83095 8.01901 6.63001 7.94135 6.44252C7.8637 6.25504 7.74987 6.08468 7.60637 5.94119C7.46288 5.79769 7.29252 5.68386 7.10504 5.6062C6.91755 5.52854 6.71661 5.48857 6.51367 5.48857C6.31074 5.48857 6.10979 5.52854 5.92231 5.6062C5.73482 5.68386 5.56447 5.79769 5.42097 5.94119C5.27748 6.08468 5.16365 6.25504 5.08599 6.44252C5.00833 6.63001 4.96836 6.83095 4.96836 7.03389C4.96611 7.8874 5.65791 8.5792 6.51367 8.5792ZM12.1806 14.0844C12.1806 12.9658 12.3939 11.8832 13.7798 11.8832C15.1454 11.8832 15.1656 13.1612 15.1656 14.1562V18.3272H17.8295V13.6239C17.8295 11.3149 17.3309 9.53828 14.6333 9.53828C13.3373 9.53828 12.4681 10.2503 12.1109 10.9241H12.075V9.75166H9.5167V18.3272H12.1806V14.0844Z'
                            fill='#0096E6'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center mt-[70px]'>
              <button
                type='submit'
                className='font-medium text-[23.63px] text-white w-[452.59px] bg-adzado rounded-lg py-2.5'
              >
                Submit
              </button>
            </div>
          </div>
        </section>
        <div className='container py-16 mx-auto'>
          <p className='text-center'>
            © 2022 All rights reserved by adzado LLC.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default UserRegistrationSecondStep
