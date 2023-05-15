import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='dash' element={<Home />} />
          <Route path = '/' element={<Dashboard />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='Signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
