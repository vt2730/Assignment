import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/Routes/index.jsx'
import LoginMain from './container/Authentication/Login';


function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <LoginMain/>
    </div>
  );
}

export default App;
