import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { FLUSH } from 'redux-persist/es/constants';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: reducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
