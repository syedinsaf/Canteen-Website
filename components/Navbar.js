import Link from 'next/link'
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi';
import {IoFastFoodSharp} from 'react-icons/io5';
import {BsBag} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {IoIosArrowUp} from 'react-icons/io';
import { useSelector,useDispatch } from 'react-redux';
import Image from 'next/image';
import navbar_logo from '../public/images/navbar_logo.png';
import { useRouter } from 'next/router';

const Navbar = () => {
  let router = useRouter();
  const count = useSelector((state) => state.cart.cartCounter);
  const [toggleSmallNav, setToggleSmallNav] = useState(false);
  const toggleBoxclass = 'md:inline-block md:absolute xl:right-80 right-0  block mt-4 border-t-2 border-t-orange-500 shadow-gray-300 shadow-md bg-white rounded-[0.1rem] z-10 text-gray-700 ';
  return (
    <div className='p-4 shadow-lg px-6 font-semibold text-[1rem] bg-white text-black'>
        {/* main */}
        <div className='flex container items-center md:justify-between'>
            <Link href='' className='flex-1 text-[1.2rem] text-orange-600'>
              <Image
              className='w-[160px] xl:w-[180px]' 
              src={navbar_logo} 
              alt='Cec-Licioius' />
            </Link>
            <div className='hidden relative rounded-[0.7rem] mr-2 p-2 flex-1 px-2 hover:shadow-xl md:flex items-center space-x-5'>
                <BiSearch className='absolute text-[1.4rem] top-3.3 left-1' />
                <input 
                type='text'
                placeholder='Search'
                className='p-1 bg-white text-black outline-none focus:border-0' 
                />
            </div>
            {/* Left */}
            <div className='flex text-gray-7m nbhyu
            00 space-x-5'>
              <div className='flex cursor-pointer hover:text-[#F4702B] space-x-2 items-center'>
                <IoFastFoodSharp className='text-[1.4rem]' />
                <Link href='' className='hidden md:inline-block'>Orders</Link>
              </div>
              {/* Cart */}
       

              <Link href='/Cart'>
              <div className='relative cursor-pointer hover:text-[#F4702B] flex space-x-2 items-center'>
                <p className='absolute text-orange-700 text-[0.9rem] font-bold top-[5px] left-4'>{count}</p>
                <BsBag className='text-[1.6rem]' />
                <p className='hidden md:inline-block'>Cart</p>
              </div>
              </Link>

              <div 
               onClick={()=>setToggleSmallNav(!toggleSmallNav)} className='flex cursor-pointer hover:text-[#F4702B] space-x-2 items-center'>
                <CgProfile className='text-[1.4rem]' />
                <Link href='/' className='hidden md:inline-block'>Profile</Link>
              </div>
            </div>
        </div>
        <div className={toggleSmallNav ? toggleBoxclass : 'hidden'}>
          <IoIosArrowUp className='relative bg-white/[.06] border-b border-b-white 
          mx-auto xl:ml-24 md:ml-28 -top-[14px] text-orange-500 text-[1.2rem]' />
            <div className='flex py-6 md:text-[1rem] text-[0.9rem] px-7 pr-24 flex-col gap-5'>
                <Link href='/Orders' className='hover:text-black font-semibold'>Orders</Link>
                <Link href='/Cart' className='hover:text-black font-semibold'>Cart</Link>
                <Link href='/favorites' className='hover:text-black font-semibold'>Favorites</Link>
                <Link href='/api/auth/logout' className='hover:text-black font-semibold'>Logout</Link>
            </div>
        </div>
        {/* Search Bar for mobile */}
        <div className='md:hidden border-gray-200 border shadow-sm mt-4 relative bg-[#ececec] rounded-[0.7rem] mr-1 p-1 flex-1 px-1 hover:shadow-xl flex items-center space-x-5'>
                <BiSearch className='absolute text-gray-600 text-[1.4rem] top-3.3 right-2' />
                <input 
                type='text'
                placeholder='Search for foods'
                className='p-1 bg-[#ececec] text-gray-700 outline-none focus:border-0' 
                />
        </div>
    </div>
  )
}

export default Navbar