import Sample from "./components/Sample";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Sample2 from "./components/Sample2";
import Sample3 from "./components/Sample3";
import './App.css';
import Stylein from "./components/Stylein";
import Hooks from "./components/Hooks";
import { Appcontext } from "./Context";
import Useref from "./components/Useref";
import Task from "./components/Task";
import Useref2 from "./components/Useref2";
import Useeffect from "./components/Useeffect";

import Localstorage from "./components/Localstorage";
import Usereduce from "./components/Usereduce";
import Usememo from "./components/Usememo";
import Usecallback from "./components/Usecallback";
import Inputget from "./components/Inputget";
import Reduxuseffect from "./components/Reduxuseffect";
// import Useselector from "./work/Useselector";
import { useSelector } from "react-redux";

import Usenavigate1 from "./components/Usenavigate1";
import Bootstrap from "./components/Bootstrap";
import Apifetch from "./components/Apifetch";
import Useselector from "./components/Useselector";
import Home from "./Context/Home";
import Dispatch1 from "./components/Dispatch1";
// import Usecallback2 from "./components/Usecallback2"





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
      path:'usecallback',
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
    {
      path:'usenavigate',
      element:<Usenavigate1/>
    },
    {
      path:'Home',
      element:<Home/>
    },
    {
      path:'Dispatch1',
      element:<Dispatch1/>
    }
   
   
  ])




  return (

<RouterProvider router={myRouter}></RouterProvider> 

// {/* <Appcontext.Provider>
// <Reduxuseffect/>
// <Useselector/>
// <Apifetch/>
// </Appcontext.Provider> */}



 );
}

export default App;
