import React, { FC } from 'react'

interface props {
  title: string;
  subtitle? : string;
}

const SectionHeader: FC<props> = ({
  title,
  subtitle,
}) => {
  return (
    <div className='w-full'>
      <h2 className='text-section-header text-center font-semibold text-3xl mb-[30px]'>{title}</h2>
      {subtitle && <p className='text-section-header text-center font-normal text-sm'>{subtitle}</p> }
      
    </div>
  )
}

export default SectionHeader