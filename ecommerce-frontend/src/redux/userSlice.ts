import { IUser } from "@/@types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: IUser = {
 name: '',
 email: '',
 password: '',
 confirm_password: '',
};

export const userSlice = createSlice({
 name: 'user',
 initialState,
 reducers: {
  addUser: (state, action: PayloadAction<IUser>) => {
   state.name = action.payload.name;
   state.email = action.payload.email;
   state.password = action.payload.password;
   state.confirm_password = action.payload.confirm_password;
  },
 }
})

export const selectUser = (state: RootState) => state.user

export const { addUser } = userSlice.actions;

export default userSlice.reducer;