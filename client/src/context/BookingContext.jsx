import { createContext, useState, useContext } from 'react';

const BookingContext = createContext();
export const useBookings = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (serviceId, comment) => {
    const newBooking = { id: serviceId, comment };
    setBookings([...bookings, newBooking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
