import React from 'react';
import { useBookings } from '../../context/BookingContext';

const MyBookingsModal = () => {
  const { services } = useBookings();

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            {service.name} - {service.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MyBookingsModal;
