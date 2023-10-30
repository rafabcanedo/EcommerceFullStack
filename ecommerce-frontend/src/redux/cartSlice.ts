import { CartItems, CartState, IProduct } from "@/@types";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: CartState = {
 cartItems: [],
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      increment: (state, action: PayloadAction<IProduct>) => {
        const cartItem = state.cartItems.find(
          (e) => e.product?.id === action.payload?.id,
        )
        // eslint-disable-next-line no-unused-expressions
        if (cartItem) cartItem.qty++
        else {
          state.cartItems.push({
            product: action.payload,
            qty: 1,
          })
        }
      },
  
      decrement: (state, action: PayloadAction<IProduct>) => {
        const cartItem = state.cartItems.find(
          (e) => e.product?.id === action.payload?.id,
        )
        if (cartItem) {
          cartItem.qty--
          if (cartItem.qty === 0) {
            state.cartItems = state.cartItems.filter(
              (e) => e.product?.id !== action.payload?.id,
            )
          }
        }
      },
    },
  })

 const cartItems = (state: RootState) => state.cart.cartItems

 export const productQntSelector = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) =>
      cartItems.find((e) => e.product?.id === productId)?.qty,
  )
  
  export const totalCartItemSelector = createSelector([cartItems], (cartItems) =>
    cartItems.reduce(
      (total: number, curr: CartItems) => (total += curr.qty),
      0,
    ),
  )
  
  export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
    cartItems.reduce(
      (total: number, curr: CartItems) =>
        (total += curr.qty * curr.product?.price),
      0,
    ),
  )

export const { increment, decrement } = cartSlice.actions
export default cartSlice.reducer

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