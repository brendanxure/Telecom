import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import Dashboard from './Component/Dashboard';
import Home from './Pages/Home';
import {HelmetProvider} from 'react-helmet-async'
import BuyDataPage from './Pages/BuyDataPage';
import BuyAirtimePage from './Pages/BuyAirtimePage';
import DashboardPage from './Pages/DashboardPage';
import Admin from './UserDashboard/layouts/Admin';
import Auth from './UserDashboard/layouts/Auth';



function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path = 'dashboard' element={<DashboardPage />} />
          <Route path='buydata' element={<BuyDataPage /> } />
          <Route path='buyairtime' element={<BuyAirtimePage />} />
          <Route path='/auth/*' element={<Auth />} />
          <Route path='/admin/*' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
