import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartFoodContainer from '../components/CartFoodContainer';
import {IoMdArrowRoundBack} from 'react-icons/io';
import { cartTotal } from '../slices/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state)=>state.cart.cart);
    const totalCart = useSelector((state)=>state.cart.total);
    const dispatch = useDispatch();
    // updating the cartTotal
    useEffect(() => {
            let total = 0
            cartItems.forEach(item => {
              total += Number(item.totalValue)
            })
            dispatch(cartTotal(total));
    }, [cartItems]);
    
  return (
    <div className='p-2'>
        <div className='p-4 md:p-10 flex container flex-col'>
            {/* Cart navbar */}
            <div className='flex justify-between'>
            <div className='md:flex-row items-center justify-start space-x-2 flex flex-col'>
                <span className='relative md:top-0 top-2 text-[1.2rem] md:text-[1.6rem] font-semibold text-gray-400'>Your</span>
                <h1 className='text-[1.9rem] md:text-[2rem] font-bold  text-gray-800'>Cart</h1>
            </div>
            <Link href='/' className='flex hover:text-white items-center h-[100%] p-3 rounded-full bg-orange-400'>
                <IoMdArrowRoundBack 
                className='text-[1.3rem]' />
            </Link>
            </div>
            {/* Cart Items */}
            <div className='flex shadow-md rounded-[0.8rem] w-full md:p-5 p-3 flex-col gap-3'>
                {cartItems.map((item, id)=>(
                    <CartFoodContainer
                        key={id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        image={item.image}
                    />
                ))}
            </div>
            {/* Total Container */}
            <div className='flex p-16 gap-1 flex-col'>
                <div className='flex text-[1.2rem] font-semibold text-gray-400 justify-between'>
                    <p className=''>Subtotal</p>
                    <p className=''>₹ {totalCart}</p>
                </div>
                <div className='flex text-[1.2rem] font-semibold text-gray-400 justify-between'>
                    <p className=''>Fee</p>
                    <p className=''>₹0</p>
                </div>
                <div className='flex mt-4 text-[1.4rem] font-bold text-gray-900 justify-between'>
                    <p>Total</p>
                    <p>₹ {totalCart}</p>
                </div>
            </div>
            {/* place order button */}
            <div className='mx-auto  cursor-pointer md:p-4 p-2 w-[40%] hover:shadow-2xl shadow-gray-400 shadow-md flex rounded-[1.9rem] bg-orange-400 justify-center'>
                <button className='text-black hover:text-white text-[0.9rem] md:text-[1.4rem]'>
                    Place Order
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart