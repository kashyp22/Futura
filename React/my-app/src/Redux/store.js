// import { configureStore } from "@reduxjs/toolkit";
// import Redux1 from "./Redux1";

// export default configureStore({
//     reducer:{
//         me:Redux1
//     }
// })

// 30-09-2023  redux-persist


import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Redux1 from './Redux1'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
//   dout in reactuseeefect
const rootreducer=combineReducers({me:Redux1}) 
const persistedReducer = persistReducer(persistConfig,rootreducer);
// dout in export
 export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export let persistor = persistStore(store)






