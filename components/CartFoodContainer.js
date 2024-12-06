import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrement, increment, removeFromCart } from '../slices/cartSlice';

const CartFoodContainer = ({id,title, image, price, quantity}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.cart);
    const index = cart.findIndex((item)=> item.id == id);
    const totalvalue = cart[index].totalValue;


    const addToBasket = () => {
        dispatch(increment());
        dispatch(addToCart({id,image,title,price}));
    };

    const removeFromBasket = () => {
        dispatch(decrement());
        dispatch(removeFromCart(id));
    }

    
    // Button Classes : 
    const rmBtnClass = 'hover:scale-105 hover:shadow-lg  w-full rounded-l-[0.8rem] font-bold text-red-600 text-[1.3rem] text-center font-semibold ';
    const addBtnClass = 'hover:scale-105 hover:shadow-lg  w-full rounded-r-[0.8rem] font-bold text-[1.2rem] text-center font-semibold text-green-600';

    return (
    <div className='p-3 border-b w-full rounded-[0.8rem]'>
        <div className='flex w-full space-x-7 '>
            <Image 
            className='rounded-[1rem]'
            src={image} 
            width={100}
            height={40}
            alt='FoodImage' />
            <div className='flex w-1/2 flex-col gap-2'>
                <h2 className='text-gray-700 font-semibold text-[1.2rem]'>{title}</h2>
                <p className='text-[1rem] md:text-[1.2rem] text-gray-500'>x{quantity}</p>
                {/* add remove button */}
                <div className='flex items-center bg-[#ffffff]
                     rounded-[0.6rem] border border-gray-100 shadow font-semibold
                      text-green-500 w-[70px]'>
                    {/* Sub buttons */}
                    <button 
                    onClick={removeFromBasket}
                    className={rmBtnClass}>-</button>
                    {/* CartCounter */}
                    <span className={'px-2 text-center'}>{quantity}</span>
                    {/* add button */}
                    <button 
                    onClick={addToBasket}
                    className={addBtnClass}>+</button>
                </div>                    
            </div>
            <div className='mb-1 flex text-gray-600 items-end font-semibold flex-col self-end'>
                <p>Price : </p>
                <h3 className='font-semibold text-gray-800 text-[1.3rem]'>₹{totalvalue}</h3>
            </div>
        </div>
    </div>
  )
}

export default CartFoodContainer