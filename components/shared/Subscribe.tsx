'use client';
import React, { ChangeEvent, useState } from 'react'
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Subscribe = () => {

  const [email, setEmail] = useState<string>("");

  return (
    <div className=' w-full flex items-center mt-3'>
     <form className='w-full flex items-center gap-4' action="submit">
       <input value={email} type='email' onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='bg-white h-[54px] w-full rounded-[6px] text-[#8b8b8b] py-[18px] px-[14px]' />
      <Button icon={<ArrowRight/>} className='!rounded-[6px] cursor-pointer !gap-0 h-[54px] aspect-square flex items-center justify-center' theme="secondary" variant="bold" />
     </form>
    </div>
  )
}

export default Subscribe;