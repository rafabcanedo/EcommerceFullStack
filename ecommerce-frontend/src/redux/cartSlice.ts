import { IProductState } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:IProductState = {
 products: [],
 offset: 0,
 status: 'idle',
}

export const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {}
})