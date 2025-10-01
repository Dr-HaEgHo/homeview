import React, { FC } from 'react'

interface props {
  title?: string;
  subtitle? : string;
  para?: string;
  theme? : 'light' | 'dark';
  position?: 'left' | 'right' | 'center';
  gap? : number;
  maxWidth? : number;
}

const SectionHeader: FC<props> = ({
  title,
  subtitle,
  para,
  position = 'center',
  theme = 'light',
  gap = 30,
  maxWidth = 1040
}) => {
  return (
    <div style={{
      color: theme === 'light' ? "#1E1E1E" : "#FFFFFF",
      textAlign: position,
      maxWidth: `${maxWidth}px`
    }} className='w-full mx-auto '>
      {title && <h2 style={{
        marginBottom: `${gap}px`
      }} className='!max-md:mb-[10px] font-bold md:font-semibold text-[22px] md:text-3xl'>{title}</h2>}
      {subtitle && <p className='font-normal text-sm md:text-base'>{subtitle}</p> }
      {para && <p className='font-normal text-sm md:text-base'>{para}</p> }
      
    </div>
  )
}

export default SectionHeader