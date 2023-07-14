import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/Routes/index.jsx'
import LoginMain from './container/Authentication/Login';
import SignupMain from './container/Authentication/Signup';


function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      {/* <LoginMain/> */}
      <SignupMain/>
    </div>
  );
}

export default App;
