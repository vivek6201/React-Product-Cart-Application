import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name:"cart",
  initialState:{
    cartArray: []
  },
  reducers:{
    add: (state,action) =>{
      state.cartArray.push(action.payload);
    },
    remove: (state,action) =>{
      return state.cartArray.filter((product) => product.id !== action.payload)
    },
  }
})

export const {add,remove} = CartSlice.actions;
export const cartArray = (state) => state.cart.cartArray;
export default CartSlice.reducer;