//Centralized route definitions
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/contact/Contact';
import HomePage from '../pages/home/HomePage';
// import ServiceDetail from '../components/services-section/ServiceDetail';
import MyBookings from '../components/services-section/MyBookings';
import ServicePage from '../pages/services/ServicePage';

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service/:id' element={<ServicePage />} />
        {/* <Route path='/my-bookings' element={<MyBookings />} /> */}
      </Routes>
    </>
  );
}

export default AppRoutes;
