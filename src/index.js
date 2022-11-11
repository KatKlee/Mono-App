import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/03_Homepage/Homepage';
import OnBoarding from './Pages/02_OnBoarding/OnBoarding';
import SplashScreen from './Pages/01_SplashScreen/SplashScreen';
import Wallet from './Pages/04_Wallet/Wallet';
import Profile from './Pages/05_Profile/Profile';
import TransactionDetails from './Pages/06_TransactionDetails/TransactionDetails';
import Statistics from './Pages/07_Statistics/Statistics';
import AddTransaction from './Pages/08_AddTransaction/AddTransaction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/onboarding' element={<OnBoarding />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/transaction/' element={<TransactionDetails />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/addtransaction' element={<AddTransaction />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

