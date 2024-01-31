
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Apicard from './Components/Apicard';
import './App.css';
// import Change from './Change';
import './design.css'
import Destructuring from './Components/Destructuring';
import Llogin from './Components/login/Llogin';
// import Mapping from './Mapping';
// import Propseg from './Propseg';
// import Reactone from './Reactone';
// import Reacttwo from './Reacttwo';
// import { Usereducer } from './Usereducer';
import Usenav1 from './Components/Usenav1';
import Propseg from './Components/props/Propseg';


function App() {

  const minerouter=createBrowserRouter([
    {
      path:'/',
      element:<Propseg/>
    },
   
    {
      path:'third',
      element:<Usenav1/>
    },
    {
      path:'fourth',
      element:<Destructuring/>
    },
    {
      path:'apicard',
      element:<Apicard/>
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
