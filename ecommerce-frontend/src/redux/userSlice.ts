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
  setName: (state, action) => {
   state.name = action.payload;
  }
 }
})

export const { setName } = userSlice.actions;

export default userSlice.reducer;