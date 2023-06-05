import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/Auth/AuthSlice'
import walletReducer from '../features/Wallet/WalletSlice'
import walletHistoryReducer from '../features/Wallet/WalletHistorySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    wallet: walletReducer,
    walletHistory: walletHistoryReducer
  },
});
