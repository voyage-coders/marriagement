//Centralized route definitions
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ServicePage from '../pages/services/ServicePage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/service/:serviceId' element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
