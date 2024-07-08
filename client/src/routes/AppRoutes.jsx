//Centralized route definitions
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/contact/Contact';
import HomePage from '../pages/home/HomePage';
import ServicePage from '../pages/services/ServicePage';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/services/:serviceId' element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
