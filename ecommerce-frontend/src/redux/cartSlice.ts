import { CartItem, IProduct } from "@/@types";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartState {
 cartItems: any[]
}

const cartFromLocalStorage =
 typeof localStorage !== "undefined" && localStorage.getItem("cart")
 ? JSON.parse(localStorage.getItem("cart"))
 : [];

const initialState: CartState = {
 cartItems: cartFromLocalStorage,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id == newItem.id
      )
      if (existingItem) {
       existingItem.quantity = newItem.quantity;
      } else {
       state.cartItems.push(newItem);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const itemId = action.payload.id;
      const updatedState = state.cartItems.filter((item) => item.id !== itemId);
      state.cartItems.splice(0, state.cartItems.length, ...updatedState);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
})

export const { addItem, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// export const cartSlice = createSlice({
//  name: 'cart',
//  initialState,
//  reducers: {
//   increment: (state, action: PayloadAction<CartProduct>) => {
//   state.products.push(action.payload);
//   }
//  }
// })

// export const { addToCart } = cartSlice.actions;

// export default cartSlice.reducer;