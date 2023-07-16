import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../container/Admin/BooksDetails/bookReducer';
import transactionResucer from '../container/Admin/LibTransaction/transactionResucer';
import myBookReducer from '../container/User/MyBooks/myBookReducer';
import userReducer from '../container/Authentication/Login/userReducer';


export default configureStore({
    reducer: {
      //REDUCER_NAME
      book: bookReducer,
      transaction: transactionResucer,
      myBook: myBookReducer,
      user: userReducer
    },
  });