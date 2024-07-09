import React from 'react';
import ServicePage from './ServicePage';

const ServicesList = () => {
  const services = [
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' },
    { id: 3, name: 'Service 3' },
    { id: 4, name: 'Service 4' },
    { id: 5, name: 'Service 5' },
  ];

  return (
    <div>
      {services.map((service) => (
        <ServicePage key={service.id} service={service} name={service.name} />
      ))}
    </div>
  );
};

export default ServicesList;
