'use client';
import React, { useContext, useEffect, useState } from 'react'
import SectionHeader from '../shared/SectionHeader'
import SubsectionHeader from '../shared/SubsectionHeader'
import PropertyTypeCard from '../shared/PropertyTypeCard'
import { propertyTypes } from '@/constants/data'
import axios from 'axios'
import { GlobalContext } from '@/context/context';

const RedefiningFuture = () => {

  const { globalLoading, setGlobalLoading } = useContext(GlobalContext);
  const [types, setTypes] = useState<any | null>(null);

  const fetchqlData = async () => {
    setGlobalLoading && setGlobalLoading(true);
    try{ 
      const res = await axios.get("/api/types");
      if(res.data || res.data.length) {
        setTypes(res.data.data); 
        setGlobalLoading && setGlobalLoading(false);
      }
      console.log(res.data);

      // SOME ERROR HANDLING
      if(!res.data || !res.data.length) return;
      console.log(res.data[0])
    }
    catch(err: any) {
      console.error("Error fetching data:::::::::::", err.message);
      setGlobalLoading && setGlobalLoading(false);
    }
  };

  useEffect(() => {
    fetchqlData();
  }, []);

  return (
    <div className='w-full my-[60px] '>
      <div className="container">
        <div className="w-full flex flex-col gap-[50px]">
          {/* <h3 className="text-xl text-section-header">{globalLoading ? 'true' : 'false'}</h3> */}
          <SectionHeader title='Redefining the Future of Real Estate' gap={10} subtitle='Discover the best properties in each location, tailored to your lifestyle and preferences.'/>
          <SubsectionHeader title='Property types available' gap={8} subtitle='From apartments and villas to penthouses, here are some of the most popular property types for Off Plan Investment.'/>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 mt-5 md:mt-10 gap-3 md:gap-6'>
          {types !== null &&
            propertyTypes.map((type, idx: number) => (
              <PropertyTypeCard  key={idx} title={type.name} filter={type.filter} image={type.image} count={types[type.filter]}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RedefiningFuture;