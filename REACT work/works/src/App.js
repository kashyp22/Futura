
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Card from './Components/Card';
import Login from './Components/Login/Login';
import Signup from './Components/Signup.jsx/Signup';
import { useSelector } from 'react-redux';
// import Home from './Components/Home/Home';
import Basicexample from './Components/Basicexample';

import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Components/Root/Root';
// import First from './Components/First';
import Welcome from './Components/Welcome/Welcome';
import Update from './Components/Update/Update';
// import { Card } from 'react-bootstrap';
// import Root, { rootLoader } from "./routes/root";
// import  { teamLoader } from "./routes/team";

function App() {

  const data1=useSelector((state)=>state.userss.userValue1[0])
  console.log('dataa12234444',data1);
  if (data1) {
    var token=data1 && data1.accesstoken
    console.log('token',token);  
  }

const router = createBrowserRouter([
  {
    path:'/',
    element: token ? <Root/> : <Login/>,
    children: [
      {
        path: "/",
        element: <Welcome />,
        // loader: teamLoader,
      },
      {
        path: "profile",
        element: <Basicexample />,
        // loader: teamLoader,
      },
      {
        path:'Update',
        element: <Update/>
        // loader: teamLoader,
      },
    ]
  },
  {
    path:'signup',
    element: <Signup/>
  },

])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
     
    </div>
  );
}

export default App;
