import { createSlice } from '@reduxjs/toolkit';
import foods from '../json/foods.json';

const initialState = {
    orders: [],
}

export const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState,
  reducers: {
   addToOrders: (state,action) => {
        state.orders = [...state.orders, action.payload]
   }
  },
})

// Action creators are generated for each case reducer function
export const { addToOrders} = ordersSlice.actions

export default ordersSlice.reducer