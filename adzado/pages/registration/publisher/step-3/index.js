// React
import { useState } from 'react'

// Next
import Head from 'next/head'

// Layout
import Layout from '../../../../components/@core/layouts/Layout'

const PublisherRegistrationThirdStep = () => {
  const initialValue = {
    companyName: '',
    fullName: '',
    mainVertical: '',
    title: '',
    yearsOfExperience: '',
    phone: '',
    averageDailyCallVolume: '',
    email: ''
  }
  const [activeAccordion, setActiveAccordion] = useState(1)

  const [inputFields, setInputFields] = useState([initialValue])

  const addFields = () => {
    setInputFields([...inputFields, initialValue])
    setActiveAccordion(inputFields.length + 1)
  }

  const handleAccordionClick = (activeNumber) => {
    if (activeAccordion !== activeNumber) {
      setActiveAccordion(activeNumber)
    } else {
      setActiveAccordion(0)
    }
  }

  const handleChange = (event, index) => {
    // const name = event.target.name;
    // const value = event.target.value;
    // setInputFields(values => ({ ...values, [name]: value }))
  }

  const removeFields = (index) => {
    let data = [...inputFields]
    console.log(data)
    data.splice(index, 1)
    setInputFields(data)
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(inputFields)
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
        <section className='container items-start justify-center block mx-auto md:flex'>
          <div className='lg:mx-0 max-w-[800px] mx-auto'>
            <h2 className='font-semibold text-2xl md:text-[43.29px] text-[#242424] mt-16 text-center'>
              Complete Reference Form
            </h2>
            <p className='font-semibold text-[#8A99BB] md:text-[19.68px] text-center mt-[22px] mb-10'>
              We require that you include at least one reference for us to
              verify your experience. Excepted reference types include
              employers, networks, and or educational programs.
            </p>
            <form onSubmit={submit}>
              {inputFields.map((item, index) => {
                return (
                  <div key={index} className='relative mt-5'>
                    <div
                      className='flex items-center justify-between w-full px-10 py-3 rounded-t cursor-pointer bg-adzado'
                      onClick={() => handleAccordionClick(index + 1)}
                    >
                      <span className='font-medium text-[18.07px]'>
                        Reference Form #{index + 1}
                      </span>
                      {activeAccordion === index + 1 ? (
                        <svg
                          width='44'
                          height='44'
                          viewBox='0 0 44 44'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            r='22'
                            transform='matrix(1 0 0 -1 22 22)'
                            fill='#021132'
                          />
                          <path
                            d='M30.5561 23.187L23.13 15.4618C22.9686 15.2939 22.7937 15.1752 22.6054 15.1058C22.417 15.0353 22.2152 15 22 15C21.7848 15 21.583 15.0353 21.3946 15.1058C21.2063 15.1752 21.0314 15.2939 20.87 15.4618L13.4439 23.187C13.148 23.4949 13 23.8868 13 24.3626C13 24.8384 13.148 25.2303 13.4439 25.5382C13.7399 25.8461 14.1166 26 14.574 26C15.0314 26 15.4081 25.8461 15.704 25.5382L22 18.9885L28.296 25.5382C28.5919 25.8461 28.9686 26 29.426 26C29.8834 26 30.2601 25.8461 30.5561 25.5382C30.852 25.2303 31 24.8384 31 24.3626C31 23.8868 30.852 23.4949 30.5561 23.187Z'
                            fill='white'
                          />
                        </svg>
                      ) : (
                        <svg
                          width='44'
                          height='44'
                          viewBox='0 0 44 44'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx='22' cy='22' r='22' fill='#021132' />
                          <path
                            d='M30.5561 20.813L23.13 28.5382C22.9686 28.7061 22.7937 28.8248 22.6054 28.8942C22.417 28.9647 22.2152 29 22 29C21.7848 29 21.583 28.9647 21.3946 28.8942C21.2063 28.8248 21.0314 28.7061 20.87 28.5382L13.4439 20.813C13.148 20.5051 13 20.1132 13 19.6374C13 19.1616 13.148 18.7697 13.4439 18.4618C13.7399 18.1539 14.1166 18 14.574 18C15.0314 18 15.4081 18.1539 15.704 18.4618L22 25.0115L28.296 18.4618C28.5919 18.1539 28.9686 18 29.426 18C29.8834 18 30.2601 18.1539 30.5561 18.4618C30.852 18.7697 31 19.1616 31 19.6374C31 20.1132 30.852 20.5051 30.5561 20.813Z'
                            fill='white'
                          />
                        </svg>
                      )}
                    </div>
                    {inputFields.length > 1 && index > 0 && (
                      <div
                        className='absolute z-10 cursor-pointer top-3 -right-16'
                        onClick={() => removeFields(index)}
                      >
                        <svg
                          width='52'
                          height='47'
                          viewBox='0 0 52 47'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            width='51.2312'
                            height='47'
                            rx='5.08426'
                            fill='#F52727'
                          />
                          <path
                            d='M22.669 16.6241H27.2028C27.2028 16.0229 26.9639 15.4463 26.5388 15.0211C26.1137 14.596 25.5371 14.3572 24.9359 14.3572C24.3347 14.3572 23.7581 14.596 23.333 15.0211C22.9079 15.4463 22.669 16.0229 22.669 16.6241ZM20.4022 16.6241C20.4022 15.4216 20.8798 14.2685 21.7301 13.4182C22.5803 12.568 23.7335 12.0903 24.9359 12.0903C26.1383 12.0903 27.2915 12.568 28.1417 13.4182C28.992 14.2685 29.4696 15.4216 29.4696 16.6241H35.1368C35.4374 16.6241 35.7257 16.7435 35.9383 16.956C36.1508 17.1686 36.2702 17.4569 36.2702 17.7575C36.2702 18.0581 36.1508 18.3464 35.9383 18.559C35.7257 18.7715 35.4374 18.8909 35.1368 18.8909H34.1371L33.1329 30.6106C33.0363 31.7423 32.5185 32.7966 31.6819 33.5648C30.8453 34.3329 29.7508 34.7591 28.615 34.759H21.2568C20.121 34.7591 19.0265 34.3329 18.1899 33.5648C17.3533 32.7966 16.8354 31.7423 16.7389 30.6106L15.7347 18.8909H14.735C14.4344 18.8909 14.1461 18.7715 13.9335 18.559C13.721 18.3464 13.6016 18.0581 13.6016 17.7575C13.6016 17.4569 13.721 17.1686 13.9335 16.956C14.1461 16.7435 14.4344 16.6241 14.735 16.6241H20.4022ZM28.3362 23.4247C28.3362 23.1241 28.2168 22.8358 28.0042 22.6232C27.7917 22.4106 27.5034 22.2912 27.2028 22.2912C26.9022 22.2912 26.6139 22.4106 26.4013 22.6232C26.1887 22.8358 26.0693 23.1241 26.0693 23.4247V27.9584C26.0693 28.259 26.1887 28.5473 26.4013 28.7599C26.6139 28.9724 26.9022 29.0918 27.2028 29.0918C27.5034 29.0918 27.7917 28.9724 28.0042 28.7599C28.2168 28.5473 28.3362 28.259 28.3362 27.9584V23.4247ZM22.669 22.2912C22.9696 22.2912 23.2579 22.4106 23.4705 22.6232C23.683 22.8358 23.8025 23.1241 23.8025 23.4247V27.9584C23.8025 28.259 23.683 28.5473 23.4705 28.7599C23.2579 28.9724 22.9696 29.0918 22.669 29.0918C22.3684 29.0918 22.0801 28.9724 21.8676 28.7599C21.655 28.5473 21.5356 28.259 21.5356 27.9584V23.4247C21.5356 23.1241 21.655 22.8358 21.8676 22.6232C22.0801 22.4106 22.3684 22.2912 22.669 22.2912ZM18.9967 30.4179C19.045 30.984 19.3041 31.5113 19.7226 31.8954C20.1412 32.2795 20.6887 32.4925 21.2568 32.4921H28.615C29.1827 32.4919 29.7297 32.2787 30.1478 31.8946C30.5658 31.5106 30.8246 30.9836 30.8728 30.4179L31.8612 18.8909H18.0106L18.999 30.4179H18.9967Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                    )}
                    <div
                      className={`overflow-hidden ${
                        activeAccordion === index + 1
                          ? 'max-h-full p-8'
                          : 'max-h-0'
                      } ease duration-500 border border-t-0 border-[#163262] rounded`}
                    >
                      <div className='px-20 py-5 bg-[#09224A] rounded-md'>
                        <div className='flex flex-col'>
                          <label htmlFor={`companyName-${index}`}>
                            Company Name
                          </label>
                          <input
                            type='text'
                            className='dark:!bg-[#021536] md:max-w-[305px] lg:w-[305px] border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                            name='companyName'
                            id={`companyName-${index}`}
                            // value={item.name}
                            // onChange={(e) => handleChange(e, index)}
                          />
                        </div>
                      </div>
                      <div className='px-20 py-5 bg-[#09224A] mt-5 rounded-md'>
                        <h3 className='!text-adzado font-semibold text-[26.05px]'>
                          Primary Contact Details
                        </h3>
                        <div className='flex flex-col w-full md:flex-row'>
                          <div className='flex flex-col mt-6 md:border-r border-[#05163D] md:w-1/2 md:pr-16'>
                            <div className='relative'>
                              <label htmlFor={`fullName-${index}`}>
                                Full Name
                              </label>
                              <input
                                type='text'
                                className='dark:!bg-[#021536] md:max-w-[305px] w-full border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                                name='fullName'
                                id={`fullName-${index}`}
                                // value={item.name}
                                // onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                            <div className='relative mt-5'>
                              <label htmlFor={`title-${index}`}>Title</label>
                              <input
                                type='text'
                                className='dark:!bg-[#021536] md:max-w-[305px] w-full border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                                name='title'
                                id={`title-${index}`}
                                // value={item.name}
                                // onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                            <div className='relative mt-5'>
                              <label htmlFor={`phone-${index}`}>
                                Phone Number
                              </label>
                              <div className='relative h-[48.36px] mt-3'>
                                <input
                                  type='text'
                                  className='dark:!bg-[#021536] md:max-w-[305px] w-full border border-[#021536] h-[48.36px] rounded-md pl-14 pr-5'
                                  name='phone'
                                  id={`phone-${index}`}
                                  value={item.name}
                                  onChange={(e) => handleChange(e, index)}
                                />
                                <div
                                  className='absolute left-0.5 top-0.5 bottom-0.5 w-12 bg-gray-200 dark:bg-[#083160] rounded-l-md flex justify-center items-center cursor-pointer'
                                  onClick={() =>
                                    document.getElementById('phone').focus()
                                  }
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
                            <div className='relative mt-5'>
                              <label htmlFor={`email-${index}`}>
                                Email Address
                              </label>
                              <input
                                type='email'
                                className='dark:!bg-[#021536] md:max-w-[305px] w-full border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                                name='email'
                                id={`email-${index}`}
                                // value={item.name}
                                // onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                          </div>
                          <div className='flex flex-col mt-6 md:w-1/2 md:pl-16'>
                            <div className='relative'>
                              <label htmlFor={`mainVertical-${index}`}>
                                Main Vertical
                              </label>
                              <input
                                type='text'
                                className='dark:!bg-[#021536] md:max-w-[305px] w-full border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                                name='mainVertical'
                                id={`mainVertical-${index}`}
                                // value={item.name}
                                // onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                            <div className='relative mt-5'>
                              <label htmlFor={`yearsOfExperience-${index}`}>
                                Years of Experience
                              </label>
                              <input
                                type='text'
                                className='dark:!bg-[#021536] md:max-w-[305px] w-full border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                                name='yearsOfExperience'
                                id={`yearsOfExperience-${index}`}
                                // value={item.name}
                                // onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                            <div className='relative mt-5'>
                              <label
                                htmlFor={`averageDailyCallVolume-${index}`}
                              >
                                Average Daily Call Volume
                              </label>
                              <input
                                type='text'
                                className='dark:!bg-[#021536] md:max-w-[305px] w-full border border-[#021536] h-[48.36px] mt-3 rounded-md px-5'
                                name='averageDailyCallVolume'
                                id={`averageDailyCallVolume-${index}`}
                                // value={item.name}
                                // onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className='flex items-center justify-center w-full py-10 mt-5 border border-[#163262] border-dashed rounded'>
                <button
                  type='button'
                  onClick={addFields}
                  className='gap-1 flex items-center font-semibold text-[15.25px] text-white bg-adzado rounded-lg px-5 py-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v12m6-6H6'
                    />
                  </svg>
                  <span>Add another reference</span>
                </button>
              </div>
              <div className='flex items-center justify-center mt-10'>
                <button
                  type='submit'
                  className='font-medium text-[23.63px] text-white w-[452.59px] bg-adzado rounded-lg py-2.5'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
        <div className='container pt-[63.47px] pb-[47px] mx-auto'>
          <p className='text-center'>
            © 2022 All rights reserved by adzado LLC.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default PublisherRegistrationThirdStep
