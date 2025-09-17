import React, { FC } from 'react'


interface props {
  title: string;
  subtitle? : string;
  theme? : 'light' | 'dark';
  position?: 'left' | 'right' | 'center';
  gap? : number
}

const SubsectionHeader: FC<props> = ({
  title,
  subtitle,
  theme = 'light',
  position = 'left',
  gap = 30
}) => {
  return (
    <div style={{
      color: theme === 'light' ? "#1E1E1E" : "#FFFFFF",
      textAlign: position
    }} className='w-full'>
      <h2 style={{
        marginBottom: `${gap}px`
      }} className='font-semibold text-xl mb-[30px]'>{title}</h2>
      {subtitle && <p className='font-normal text-sm'>{subtitle}</p> }
      
    </div>
  )
}

export default SubsectionHeader