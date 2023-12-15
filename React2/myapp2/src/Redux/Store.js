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

// import { PersistGate } from 'redux-persist/integration/react'

// import App from './App'
// import rootReducer from './reducers'
import Useredux from './Useredux'

const persistConfig = {
  key: 'kashyb',
  version: 1,
  storage,
}
const rootReducer=combineReducers({users:Useredux})  // connection 0f store and Usererdux 


const persistedReducer = persistReducer(persistConfig, rootReducer)

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

