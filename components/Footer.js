import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='p-10 px-1 md:px-12 text-gray-200 w-full bg-[#171A29] '>
        <div className='flex border-t-2 border-white pt-3 items-center justify-between'>
            <Link href='' className='text-[1.2rem] text-orange-600'>Logo.</Link>
            <p className='mx-auto text-[0.8rem] md:text-[1rem]'>Made with love by Syed Insaf & Team ❤️ </p>
            <h4>© 2022 Canteen</h4>
        </div>
    </div>
  )
}

export default Footer