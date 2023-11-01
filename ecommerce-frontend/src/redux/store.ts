import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from './userSlice';
import { cartSlice } from "./cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
 reducer: {
  user: userSlice.reducer,
  cart: cartSlice.reducer,
 }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;