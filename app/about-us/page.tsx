import AboutHero from '@/components/about-us/AboutHero'
import BePart from '@/components/about-us/BePart'
import Metrics from '@/components/about-us/Metrics'
import OurStory from '@/components/about-us/OurStory'
import WhyChooseUs from '@/components/about-us/WhyChooseUs'
import FAQs from '@/components/home/FAQs'
import SectionHeader from '@/components/shared/SectionHeader'
import React from 'react'

const Page = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <Metrics/>
      <WhyChooseUs/>
      <BePart/>
      <FAQs/>
    </div>
  )
}

export default Page;