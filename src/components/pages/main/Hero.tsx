import React from 'react'
import SplineHero from './SplineHero';
import SplineBlob from './SplineBlobs';
import HeroButton from './HeroButton';

const Interactions = () => {
  return (
    <div className='w-max flex flex-col justify-center md:justify-start text-center md:text-start mb-24 z-50'>
      <h1 className='font-bold text-6xl sm:text-7xl 2xl:text-8xl'>WE MADE <br />  DOING WEB <span className='text-additional'>EASY</span></h1>
      <p className='text-[18px] sm:text-xl xl:text-2xl my-5 sm:my-8'>
        Get  Your Own Website In a Price Of Meal Today! <br />
        We Will Get in Touch With You Within a 24 hours!
      </p>
      <div>
        <HeroButton text='Get started' href='sign-up' className='mr-6' />
        <HeroButton text='Pricing' href='pricing' variant='ghost' className='border border-secondary' />
      </div>
    </div >
  )
}

export default function Hero() {
  return (
    <div className="flex items-center justify-center xl:justify-end max-w-screen overflow-hidden h-[880px] max-w-full">
      <Interactions />
      <SplineHero />
      <SplineBlob />
    </div>
  );
}
