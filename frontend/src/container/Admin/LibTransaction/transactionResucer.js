import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    transaction: [],
    loading: false,
    error: false,
  };
  const transactionSlice = createSlice({
      /*The name property in createSlice is used internally by redux-toolkit to create the names for your actions. 
      If the name is 'user' then the getUser action will have { type: 'user/getUser' } */
    name: 'books',//
    initialState,
    reducers: {
      getTransaction: (state, action) => {
        state.transaction = action.payload;
        state.loading = true;
        state.error = false;
      },
    },
  });
  export const { getTransaction } = transactionSlice.actions;
  export default transactionSlice.reducer;