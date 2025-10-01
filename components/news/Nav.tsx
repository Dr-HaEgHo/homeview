'use client'
import { newsLinks } from '@/constants/data'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Nav = () => {

  // const [ active, setActive ] = useState<string>(filter)
  const router = useRouter();
  const search = useSearchParams();
  const filter = new URLSearchParams(search).get("filter");


  useEffect(() => {
    if(filter) return;

    router.push(`?filter=all`)
  }, [])

  return (
    <div className='w-full bg-white relative mb-10'>
      <div className='w-full bg-accent h-[2px] absolute bottom-0 z-0'/>
      <div className="container">
        <div className="w-full relative z-10">
          <ul className='w-full flex items-center gap-2'>
            {
              newsLinks.map((item, idx: number) => (
                <li onClick={() => {
                  router.push(`?filter=${item.route}`)
                  // setActive(item.name)
                }} key={idx} 
                style={{
                  borderBottomWidth: filter === item.route ? "2px" : "0px"
                }}
                className='py-3 md:py-[34px] px-3 md:px-12 hoverActiveGrey border-secondary'><p style={{
                  fontWeight: filter === item.route ? "semibold" : "medium"
                }} className='text-base text-section-header'>{item.name}</p></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav