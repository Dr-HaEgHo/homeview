import React from 'react'
import Slider from '@/components/home/Slider'

const Hero = () => {
  return (
    <div className='w-full aspect-[1.9] bg-primary flex items-stretch relative'>
        <div className='w-full h-full z-0'>
          <Slider/>
        </div>
      <div className="w-full aspect-[1.9] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 md:px-0">
        <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
          <h2 className='text-xl text-white'>Invest in Dubai With</h2>
          <p className='text-6xl text-white font-semibold'>Home View Dubai Real Estate</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;