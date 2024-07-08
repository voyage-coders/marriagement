import React from 'react';
import { useBookings } from '../../context/BookingContext';

const MyBookingsModal = () => {
  const { bookings } = useBookings();

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.name} - {booking.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};
