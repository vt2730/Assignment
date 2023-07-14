/**
 * @description This slice is example of a component reducer function that will be created 
 * for each component in container.
 */

import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  users: [],
  loading: false,
  error: false,
};
const userSlice = createSlice({
    /*The name property in createSlice is used internally by redux-toolkit to create the names for your actions. 
    If the name is 'user' then the getUser action will have { type: 'user/getUser' } */
  name: 'user',//
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = false;
    },
    createUser: (state, action) => {
      state.users.unshift(action.payload);
      state.loading = false;
    },
    deleteUser: (state, action) => {
      state.users.filter((user) => user.id !== action.payload.id);
      state.loading = false;
    },
  },
});
export const { createUser, deleteUser, getUser } = userSlice.actions;
export default userSlice.reducer;