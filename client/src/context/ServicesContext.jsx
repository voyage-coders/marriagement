import React, { createContext, useContext, useState } from 'react';

const ServicesContext = createContext();

export function ServicesProvider({ children }) {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices((prev) => [...prev, service]);
  };

  return (
    <ServicesContext.Provider value={{ services, addService }}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  return useContext(ServicesContext);
}
