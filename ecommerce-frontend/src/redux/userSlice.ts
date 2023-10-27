import { IUser } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";

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
  addUser: (state, action) => {
   state.name = action.payload;
   state.email = action.payload;
   state.password = action.payload;
   state.confirm_password = action.payload;
  },
 }
})

export const { addUser } = userSlice.actions;

export default userSlice.reducer;