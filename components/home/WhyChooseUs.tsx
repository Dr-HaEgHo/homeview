import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import { metrics, whychoose } from '@/constants/data'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <div className='w-full my-[60px] '>
      <div className="container">
        <SectionHeader title='Why Choose Us' subtitle='Your trusted partner in finding the perfect property, with unmatched expertise and personalized service.' gap={10}/>
        <div className='w-full grid grid-cols-4 mt-10 mb14 gap-6' >
          {
            whychoose.map((why, idx: number) => (
              <div key={idx} className='bg-accent w-full aspect-[1.15] rounded-lg flex flex-col items-center justify-center py-[42px] px-[26px]'>
                 {/* Icon */}
                 <div className='w-14'>
                  <Image src={why.image} alt={why.title} className='w-full h-full object-cover'/>
                 </div>
                 <h4 className='text-section-header text-lg font-medium text-center mt-[30px] mb-4'>{why.title}</h4>
                 <p className='text-section-header text-sm font-normal text-center'>{why.description}</p>
              </div>
            ))
          }
        </div>

        {/* METRICS */}
        <div className='w-[70%] mx-auto flex items-center justify-between mt-[110px] my-[50px]'>
          {
            metrics.map((metric, idx: number) => (
              <div key={idx} className='flex flex-col items-center justify-center gap-2'>
                <h4 className='text-secondary text-2xl font-bold'>{metric.title} </h4>
                <p className='text-section-header text-[13px] font-medium'>{metric.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs