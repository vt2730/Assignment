import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/Routes/index.jsx'
import LoginMain from './container/Authentication/Login';
import SignupMain from './container/Authentication/Signup';
import BooksCollectionMain from './container/User/BookCollection';


function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      {/* <LoginMain/> */}
      {/* <SignupMain/> */}
      <BooksCollectionMain/>
    </div>
  );
}

export default App;
