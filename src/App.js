import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dashboard from './Component/Dashboard';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import {HelmetProvider} from 'react-helmet-async'
import BuyDataPage from './Pages/BuyDataPage';
import BuyAirtimePage from './Pages/BuyAirtimePage';
import DashboardPage from './Pages/DashboardPage';
import Dashboard from './DashTemplate/app/dashboard/Dashboard';


function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path = 'dashboard' element={<DashboardPage />} />
          <Route path='buydata' element={<BuyDataPage /> } />
          <Route path='buyairtime' element={<BuyAirtimePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='Signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
