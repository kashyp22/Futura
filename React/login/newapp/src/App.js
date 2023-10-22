
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Apicard from './Apicard';
import './App.css';
import Change from './Change';
import './design.css'
import Destructuring from './Destructuring';
import Div from './Div';
import Llogin from './Llogin';
import Mapping from './Mapping';
import Propseg from './Propseg';
import Reactone from './Reactone';
import Reacttwo from './Reacttwo';
import { Usereducer } from './Usereducer';
import Usenav1 from './Components/Usenav1';


function App() {

  const minerouter=createBrowserRouter([
    {
      path:'/',
      element:<Llogin/>
    },
    {
      path:'first',
      element:<Div/>
    },
    {
      path:'third',
      element:<Usenav1/>
    },
    {
      path:'fourth',
      element:<Destructuring/>
    }

  ])
  return (
    <div className='App'>
      {/* <RouterProvider router={minerouter}></RouterProvider>  */}
      <RouterProvider router={minerouter}></RouterProvider>
      {/* <Llogin/>
      <Mapping/>
      <Apicard/>
      <Destructuring/>
      <Div/>
      <Change/>
      <Usereducer/>
      <Propseg/>
      <Reactone/> */}
    </div>
  );
}

export default App;
