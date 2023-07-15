import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    books: [],
    loading: false,
    error: false,
  };
  const bookSlice = createSlice({
      /*The name property in createSlice is used internally by redux-toolkit to create the names for your actions. 
      If the name is 'user' then the getUser action will have { type: 'user/getUser' } */
    name: 'books',//
    initialState,
    reducers: {
      getBooks: (state, action) => {
        state.books = action.payload;
        state.loading = true;
        state.error = false;
      },
    },
  });
  export const { getBooks } = bookSlice.actions;
  export default bookSlice.reducer;