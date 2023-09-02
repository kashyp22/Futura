import Sample from "./Sample";
import Sample2 from "./Sample2";
import Sample3 from "./Sample3";
import './App.css';
import Stylein from "./Stylein";
import Hooks from "./Hooks";
import { Appcontext } from "./Context";
import Useref from "./Useref";



function App() {


  return (

    <div className="App">
      <Appcontext.Provider value={"hai"}>
       <Sample2/>
      <Sample/>
     <Sample3/>
     <Stylein/>
     <Hooks/> 
     <Useref/>
     </Appcontext.Provider>




    </div>






  );
}

export default App;
