import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/Auth/AuthSlice'
import walletReducer from '../features/Wallet/WalletSlice'
import walletHistoryReducer from '../features/Wallet/WalletHistorySlice'
import dataPlanReducer from '../features/DataPlan/DataPlanSlice'
import dataTransactionReducer from '../features/DataTransaction/DataTransactionSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    wallet: walletReducer,
    walletHistory: walletHistoryReducer,
    dataPlan: dataPlanReducer,
    dataTransaction: dataTransactionReducer
  },
});
