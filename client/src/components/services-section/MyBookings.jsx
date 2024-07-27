import React, { useEffect, useState } from 'react';
import { useServices } from '../../context/ServiceContext';

const MyBookings = () => {
  const { addService, services } = useServices();

  useEffect(() => {
    console.log('MyBookings component rendered with services:', services);
  }, [services]);

  console.log('Rendering service list:', services);

  return (
    <div>
      <h2>My Bookings</h2>

      {services.length === 0 ? (
        <p>No bookings added yet.</p>
      ) : (
        <ul>
          {services.map(({ serviceName, comment }, index) => (
            <li key={index}>
              {serviceName}: {comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
