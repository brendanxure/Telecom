import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/Auth/AuthSlice'
import initializeReducer from '../features/InitializePayment/InitializePaySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    initializePay: initializeReducer
  },
});
