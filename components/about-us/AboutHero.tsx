import React from 'react'
import Slider from '../home/Slider'

const AboutHero = () => {
  return (
      <div className='w-full aspect-[2.9] min-h-[500px] bg-primary flex items-stretch relative overflow-hidden'>
        <div className='w-full h-full z-0 flex items-center justify-center'>
          <Slider/> 
        </div>
      <div className="w-full aspect-[2.9] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 md:px-0">
        <div className='text-center w-full h-full flex flex-col justify-center items-center gap-4'>
          <h2 className='text-base font-bold ls25 text-white'>ABOUT HOME VIEW REAL ESTATE</h2>
          <p className='text-4xl md:text-[40px] text-white font-semibold'>Home View Dubai Real Estate</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHero