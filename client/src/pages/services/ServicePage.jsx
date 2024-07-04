import React from 'react';
import { useServices } from '../../context/ServicesContext';

const ServicePage = () => {
  const { services, addService, removeService } = useServices();

  const handleSelectService = (service) => {
    const isServiceAdded = services.some((s) => s.id === service.id);
    if (!isServiceAdded) {
      addService(service);
    } else {
      console.log('Service already added');
    }
  };

  return (
    <div>
      {/* Render services here */}
      {services.map((service) => (
        <div key={service.id}>
          {service.name}
          <button onClick={() => removeService(service.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => handleSelectService({ id: 1, name: 'Service 1' })}>
        Add Service
      </button>
    </div>
  );
};

export default ServicePage;
