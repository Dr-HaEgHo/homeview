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
    <a href={`/properties?filter=${filter}`} className='w-full flex flex-col items-start justify-start'>
      <div className='w-full aspect-[1.73] rounded-lg overflow-hidden'>
        <Image 
          src={image}
          alt='apartments'
          className='w-full h-full object-cover'
        />
      </div>
      <div>
        <h3 className='text-section-header text-base font-semibold mt-[18px] mb-[8px]'>{title}</h3>
        <p className='text-section-header text-sm font-normal'>  {count} properties</p>
      </div>
    </a>
  )
}

export default PropertyTypeCard