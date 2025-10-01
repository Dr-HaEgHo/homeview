'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { slides } from '@/constants/data'
import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Image from 'next/image';

const Slider = () => {
  return (
    <div className='w-full h-full bg-yellow-500'>
       <Swiper 
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => {}}
              onSwiper={(swiper) => {console.log(swiper)}}
              autoplay={{ delay: 3000 }}
              effect='fade'
              loop={true}
              shortSwipes
              style={{
                height: "100%",
                width:"100%",
                margin: 'auto',
                display : "flex",
                justifyContent:"center",
                gap: 20
              }}
          >
              {
                  slides?.map((item, idx: number) => (<SwiperSlide>
                      <div className='w-full h-full' >
                        <Image 
                          src={item.image}
                          alt={"slide image"}
                          className='h-full aspect-[1.9] w-full object-cover'
                        />
                      </div>
                  </SwiperSlide>))
              }
              
          </Swiper> 
    </div>
  )
}

export default Slider