import { createSlice } from '@reduxjs/toolkit';
import foods from '../json/foods.json';

const initialState = {
   allFoods: foods && [...foods],
   cart: [],
   itemsQuantity: [],
   cartCounter: 0,
   total: 0
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.cartCounter += 1
    },
    decrement: (state) => {
      if(state.cartCounter <= 0) {
        state.cartCounter = 0;
      }else{
        state.cartCounter -= 1
      }
    },
    addItemsQuantity: (state,action) => {
      state.itemsQuantity = [...state.itemsQuantity, action.payload];
    },
    allFoods: (state,action) => {
        state.allFoods = [...state.allFoods,action.payload];
    },
      addToCart: (state, action) => {
        let item = state.cart.find((item) => item.id === action.payload.id);
        console.log("itemInCart : ",item);
  
        if (item) {
          item.quantity++;
          console.log("item is available in cart");
          item.totalValue = item.price*item?.quantity;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
    },
    removeFromCart: (state,action) => {
      const index = state.cart.findIndex((item)=>item.id === action.payload);
      // for the item updation in cartTotal
      // let item = state.cart.find((item) => item.id === action.payload);
      // if(item) {
      //   item.totalValue -= item?.price;
      // }
      if(index>=0) {
        state.cart[index].quantity -= 1;
      }else{
        console.warn('Cant remove product as its not in the basket !');
      }

      // updating the cart on removing the items 
      if(state.cart[index]?.quantity<=0) {
        state.cart.splice(index,1);
      }
    },
    cartTotal: (state, action) => {
      state.total = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { allFoods, addToCart, removeFromCart, increment, decrement, cartTotal, addItemsQuantity } = cartSlice.actions

export default cartSlice.reducer