import Image from 'next/image';
import React from 'react';
import items from '../json/whatweserve.json';

const WhatWeServe = () => {
  return (
    <div className='bg-[#F8F8F8] text-black'>
    <div className='container  flex gap-6 p-4 py-10 flex-col'>
        <h2 className='text-[1.7rem] font-semibold'>We are Happy to Serve </h2>
        <div className='flex space-x-4'>
          {items.map((item,id) => (
              <div key={id} className='flex w-full
              justify-between pt-6 pb-2 flex-col items-center'>
                <Image 
                  src={item.image}
                  width={100} height={100}
                  className='' alt='' />
                <h4 className='font-semibold text-[0.9rem]'>{item.item}</h4>
              </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default WhatWeServe