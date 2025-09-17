import React from 'react'
import SectionHeader from '../shared/SectionHeader'
import SubsectionHeader from '../shared/SubsectionHeader'
import PropertyTypeCard from '../shared/PropertyTypeCard'
import { propertyTypes } from '@/constants/data'

const RedefiningFuture = () => {
  return (
    <div className='w-full my-[60px] '>
      <div className="container">
        <div className="w-full flex flex-col gap-[50px]">
          <SectionHeader title='Redefining the Future of Real Estate' gap={10} subtitle='Discover the best properties in each location, tailored to your lifestyle and preferences.'/>
          <SubsectionHeader title='Property types available' gap={8} subtitle='From apartments and villas to penthouses, here are some of the most popular property types for Off Plan Investment.'/>
        </div>
        <div className='w-full grid grid-cols-4 mt-10 gap-6' >
          {
            propertyTypes.map((type, idx: number) => (
              <PropertyTypeCard  key={idx} title={type.name} filter={type.filter} image={type.image} count={type.count}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RedefiningFuture;