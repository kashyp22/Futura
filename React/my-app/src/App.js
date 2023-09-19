import Sample from "./Sample";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Sample2 from "./Sample2";
import Sample3 from "./Sample3";
import './App.css';
import Stylein from "./Stylein";
import Hooks from "./Hooks";
import { Appcontext } from "./Context";
import Useref from "./Useref";
import Task from "./Task";
import Useref2 from "./Useref2";
import Useeffect from "./Useeffect";
import Apifetch from "./Apifetch";
import Localstorage from "./Localstorage";
import Usereduce from "./Usereduce";
import Usememo from "./Usememo";



function App() {
  const myRouter=createBrowserRouter([
    {
      path:'/',
      element:<Usereduce/>
    },
    {
      path:'mysecond',
      element:<Useeffect/>
    }, 
    {
      path:'mythird',
      element:<Task/>
    }, 
    {
      path:'fourth',
      element:<Usememo/>
    }


  ])




  return (

<RouterProvider router={myRouter}></RouterProvider>

 );
}

export default App;
