import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    users: [],
    loading: false,
    error: false,
  };
  const userSlice = createSlice({
      /*The name property in createSlice is used internally by redux-toolkit to create the names for your actions. 
      If the name is 'user' then the getUser action will have { type: 'user/getUser' } */
    name: 'books',//
    initialState,
    reducers: {
      getUsers: (state, action) => {
        state.users = action.payload;
        state.loading = true;
        state.error = false;
      },
    },
  });
  export const { getUsers } = userSlice.actions;
  export default userSlice.reducer;