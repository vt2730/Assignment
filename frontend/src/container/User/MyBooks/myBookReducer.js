import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    myBook: [],
    loading: false,
    error: false,
  };
  const myBookSlice = createSlice({
      /*The name property in createSlice is used internally by redux-toolkit to create the names for your actions. 
      If the name is 'user' then the getUser action will have { type: 'user/getUser' } */
    name: 'books',//
    initialState,
    reducers: {
      getMyBook: (state, action) => {
        state.myBook = action.payload;
        state.loading = true;
        state.error = false;
      },
    },
  });
  export const { getTransaction } = myBookSlice.actions;
  export default myBookSlice.reducer;