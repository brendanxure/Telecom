import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';
import App from './App';
import App2 from './DashTemplate/app/App2'
import './index.css';
import { getUser } from './features/Auth/AuthSlice';

const container = document.getElementById('root');
const root = createRoot(container);

const {user } = useSelector(getUser)


root.render(
  <React.StrictMode>
    <Provider store={store}>
     {user ? <App2 /> : <App />}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

