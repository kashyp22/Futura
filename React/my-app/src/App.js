import Sample from "./Sample";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from "./Bootstrap";
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
import Usecallback from "./Usecallback";
import Inputget from "./Inputget";
import Reduxuseffect from "./Reduxuseffect";
import Useselector from "./work/Useselector";





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
    },
    {
      path:'fifth',
      element:<Usecallback/>
    },
    {
      path:'get data from input',
      element:<Inputget/>
    },
    {
      path:'Bootstrap',
      element:<Bootstrap/>
    },
    {
      path:'apifetch',
      element:<Reduxuseffect/>
    },
    {
      path:'Useref',
      element:<Useref2/>
    },
    {
      path:'Sample',
      element:<Sample/>
    },
    {
      path:'Sample2',
      element:<Sample2/>
    },
    {
      path:'Sample3',
      element:<Sample3/>
    },
    {
      path:'style',
      element:<Stylein/>
    },
    {
      path:'Hooks',
      element:<Hooks/>
    },
    {
      path:'appcontext',
      element:<Appcontext/>
    },
    {
      path:'Useref',
      element:<Useref/>
    },
    {
      path:'local storage',
      element:<Localstorage/>
    },
    {
      path:'api12',
      element:<Apifetch/>
    },
    {
      path:'use',
      element:<Useselector/>
    },
   
  ])




  return (

//<RouterProvider router={myRouter}></RouterProvider> 

<>
<Reduxuseffect/>
<Useselector/>
</>



 );
}

export default App;
