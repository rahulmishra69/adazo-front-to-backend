// Next
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section className='pb-16 pt-28'>
      <div className='container px-5 mx-auto'>
        <h2 className='text-center font-bold text-lg text-[#00A0D6] dark:text-[#00A0D6] uppercase'>
          Testimonials
        </h2>
        <h3 className='mt-5 text-3xl font-bold text-center text-midnight-blue'>
          {`Don't`} take our word for it
        </h3>
        <div className='flex flex-col items-center justify-center w-full mx-auto mt-10 max-w-1000px lg:flex-row'>
          <div className='relative lg:w-1/2'>
            <Image
              src='/leon-6awfTPLGaCE-unsplash-06.png'
              className='rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg'
              alt='leon-6awfTPLGaCE-unsplash-06'
              width={500.69}
              height={468.6}
            />
            <div className='absolute z-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
              <Image
                src='/Play_button.svg'
                className='cursor-pointer'
                alt='Play_button'
                width={111.03}
                height={111.03}
              />
            </div>
            <div className='absolute inset-0 z-40 bg-black bg-opacity-50 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg' />
          </div>
          <div className='relative p-5 dark:bg-[#0b214c] lg:w-1/2 lg:p-[89px] shadow-xl rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg'>
            <div className='flex items-center gap-3'>
              <div className='bg-[#E1EDFB] rounded-full'>
                <Image
                  src='/Smiley_female.svg'
                  className='rounded-full'
                  alt='Smiley_female'
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h5 className='text-lg font-bold text-adzado dark:text-adzado'>
                  Sophie Moore
                </h5>
                <p className='text-lg text-adzado-black'>
                  Insurance Professional
                </p>
              </div>
            </div>
            <p className='mt-8 text-lg'>{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud"`}</p>
            <p className='mt-8 text-lg font-bold'>Saint Paul, Minnesota</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
