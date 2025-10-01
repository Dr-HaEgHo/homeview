import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'


interface props {
  title: string;
  count: number;
  filter: string;
  image: StaticImageData;
}

const PropertyTypeCard: FC<props> = ({
  title, 
  count = 0,
  filter,
  image
}) => {
  return (
    <a href={`/properties?type=${filter}`} className='w-full flex flex-col items-start justify-start'>
      <div className='w-full aspect-[1.73] rounded-lg overflow-hidden'>
        <Image 
          src={image}
          alt='apartments'
          className='w-full h-full object-cover'
        />
      </div>
      <div>
        <h3 className='text-section-header text-base font-semibold mt-3 mb-0 md:mt-[18px] md:mb-[8px]'>{title}</h3>
        <p className='text-section-header text-sm font-normal'>  {count} properties</p>
      </div>
    </a>
  )
}

export default PropertyTypeCard