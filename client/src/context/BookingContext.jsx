import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBookings = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices((prevServices) => [...prevServices, service]);
  };

  return (
    <BookingContext.Provider value={{ services, addService }}>
      {children}
    </BookingContext.Provider>
  );
};
