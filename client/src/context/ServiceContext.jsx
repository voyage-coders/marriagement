import { createContext, useState, useContext, useEffect } from 'react';

const ServiceContext = createContext();
export const useServices = () => {
  return useContext(ServiceContext);
};

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    console.log('Initial services state:', services);
  }, []);

  const addService = (serviceName, comment) => {
    console.log('Adding service:', { serviceName, comment });
    setServices((prevServices) => {
      const newServices = [...prevServices, { serviceName, comment }];
      console.log('Updated services list:', newServices);
      return newServices;
    });
  };

  return (
    <ServiceContext.Provider value={{ services, addService }}>
      {children}
    </ServiceContext.Provider>
  );
};
// const addService = (serviceName, comment) => {
//   setServices([...services, { serviceName, comment }]);
//   console.log('Current services list:', [
//     ...services,
//     { serviceName, comment },
//   ]);
// };
