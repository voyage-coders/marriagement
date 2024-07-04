import React, { createContext, useContext, useEffect, useState } from 'react';

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState(() => {
    const localData = localStorage.getItem('services');
    return localData
      ? JSON.parse(localData)
      : [
          { id: 1, name: 'Service 1', selected: false },
          { id: 2, name: 'Service 2', selected: false },
          { id: 3, name: 'Service 3', selected: false },
          { id: 4, name: 'Service 4', selected: false },
          { id: 5, name: 'Service 5', selected: false },
          { id: 6, name: 'Service 6', selected: false },
          { id: 7, name: 'Service 7', selected: false },
          { id: 8, name: 'Service 8', selected: false },
          { id: 9, name: 'Service 9', selected: false },
          { id: 10, name: 'Service 10', selected: false },
          { id: 11, name: 'Service 11', selected: false },
        ];
  });

  const addService = (service) => {
    setServices((prevServices) => [...prevServices, service]);
  };

  const removeService = (serviceId) => {
    setServices((prevServices) =>
      prevServices.filter((service) => service.id !== serviceId)
    );
  };

  const toggleService = (serviceId) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === serviceId
          ? { ...service, selected: !service.selected }
          : service
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  return (
    <ServicesContext.Provider
      value={{ services, addService, removeService, toggleService }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
