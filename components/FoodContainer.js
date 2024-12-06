import { ExitToApp } from '@mui/icons-material';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { addItemsQuantity, addToCart, removeFromCart } from '../slices/cartSlice';
import {decrement, increment} from '../slices/cartSlice';

const FoodContainer = ({id, image, title, price}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.cart);
    // this invokes the removeFromBasket reducer only when the follwing item is present in the cart
    let cartPresent= false;
    const index = cart.findIndex((item)=> item.id == id);
    if(cart[index]?.quantity > 0) {
        cartPresent = true;
    }else{
        cartPresent = false;
    }

    let q = 0;

    const addToBasket = () => {
        q++;
        dispatch(addItemsQuantity({id, q}));
        dispatch(increment());
        dispatch(addToCart({id,image,title,price}));
    };
    console.log("q : ",q);


    const removeFromBasket = () => {
        dispatch(decrement());
        dispatch(removeFromCart(id));
    }

    const quantity = cart[index]?.quantity;


    // Button Classes : 
    const rmBtnClass = 'hover:scale-105 hover:shadow-lg  w-full rounded-l-[0.8rem] font-bold text-red-600 text-[1.3rem] text-center font-semibold ';
    const addBtnClass = 'hover:scale-105 hover:shadow-lg  w-full rounded-r-[0.8rem] font-bold text-[1.2rem] text-center font-semibold text-green-600';
  return (
    <div className='py-4 md:max-w-[254px] text-black'>
        {/* Main */}
        <div className='md:flex-col w-full max-h-[350px] hover:shadow-lg  
        cursor-pointer p-4 border border-gray-200 rounded-[1.1rem] justify-between flex gap-2'>
            {/* Food Image */}
            <div className=''>
                <Image 
                src={image}
                className='rounded-[1.1rem]'
                width={254}
                height={160}
                alt='' />
            </div>
            {/* details */}
            <div className=' flex-col mx-2 flex-1 flex gap-3 justify-between'>
                <div className='border-b pb-2 px-1 flex md:flex-row gap-3 flex-col justify-between'>
                    <h4 
                    className='text-[1.3rem] font-semibold'>{title}</h4>
                    <p className='text-[1.1rem]'>₹{price}</p>
                </div>
                {/* buttons */}
                <div 
                className='flex gap-3 flex-col md:flex-row'>
                <Link href='/Cart'>
                    <div onClick={addToBasket} className='bg-[#faecec] w-[70px] hover:scale-105
                     hover:shadow-lg border border-red-200 p-1 px-4 rounded-[0.8rem]'>
                    <button 
                    className=' 
                    text-[0.9rem]
                    text-center font-semibold 
                    text-red-500'>Order</button>
                    </div>
                </Link>
                    <div className='flex items-center bg-[#ffffff]
                     rounded-[0.6rem] border border-gray-100 shadow font-semibold text-green-500 w-[70px]'>
                    {/* Same Add button */}
                    <button 
                    onClick={addToBasket}
                    className={cartPresent ? 'hidden' : 'w-full h-full hover:shadow-md text-center'}>
                        ADD
                    </button>
                    {/* Sub buttons */}
                    <button 
                    onClick={removeFromBasket}
                    className={cartPresent ? rmBtnClass : 'hidden'}>-</button>
                    {/* CartCounter */}
                    <span className={cartPresent ? 'px-2 text-center' : 'hidden'}>{quantity}</span>
                    {/* add button */}
                    <button 
                    onClick={addToBasket}
                    className={cartPresent ? addBtnClass : 'hidden'}>+</button>
                    </div>                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default FoodContainer