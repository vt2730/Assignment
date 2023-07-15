import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LoginMain from '../container/Authentication/Login';
import SignupMain from '../container/Authentication/Signup';
import BooksDetailsMain from '../container/Admin/BooksDetails';
import LibraryTransactionMain from '../container/Admin/LibTransaction';
import BooksCollectionMain from '../container/User/BookCollection';
import MyBooksMain from '../container/User/MyBooks';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<LoginMain />} />
            <Route path='signup' element={<SignupMain />} />

            <Route path='/admin'>
                <Route index element={<BooksDetailsMain/>}/>
                <Route path='bookdetails' element={<BooksDetailsMain/>}/>
                <Route path='transaction' element={<LibraryTransactionMain/>}/>
            </Route>

            <Route path="bookcollection" element={<BooksCollectionMain/>}/>
            <Route path="mybooks" element={<MyBooksMain/>}/>
        </Route>
    )
)

export default router