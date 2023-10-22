import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from './Redux/store';
import { Contextprovider } from './Context/Context1';
// import store from './Redux/store';
// import store from './Redux/store';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}/> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

  <Contextprovider>
  <App/>
  </Contextprovider>
  
    


    </PersistGate>
    </Provider>
    {/* <Provider/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
