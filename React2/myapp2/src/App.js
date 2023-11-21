
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Useref1 from './Components/Useref1';
import Usestate1 from './Components/Usestate1';
import Usreducer1 from './Components/Usreducer1';
import Login from './Backend/Login';
import Display from './Backend/Display';
import Getdata from './Backend/Getdata';
import Loginform from './loginform/Loginform';



function App() {
  const pathrouter=createBrowserRouter([
    {
      path:'/',
      element:<Loginform/>
    },
    {
      path:'signup',
      element:<Login/>
    },
    // {
    //   path:'usereducer',
    //   element:<Usreducer1/>
    // }
   

  ])


  
  return (
    <div className="App">
      <RouterProvider router={pathrouter}></RouterProvider>      
    </div>
  );
}

export default App;
