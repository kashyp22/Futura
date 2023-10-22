
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Useref1 from './Components/Useref1';
import Usestate1 from './Components/Usestate1';
import Usreducer1 from './Components/Usreducer1';

function App() {
  const pathrouter=createBrowserRouter([
    {
      path:'/',
      element:<Usestate1/>
    },
    {
      path:'useref1',
      element:<Useref1/>
    },
    {
      path:'usereducer',
      element:<Usreducer1/>
    }

  ])


  
  return (
    <div className="App">
      <RouterProvider router={pathrouter}></RouterProvider>      
    </div>
  );
}

export default App;
