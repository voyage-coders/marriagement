import React, { useState } from 'react';
import { useBookings } from '../../context/BookingContext';

const ServicePage = ({ service }) => {
  const [comment, setComment] = useState('');
  const { addBooking } = useBookings();

  const handleSubmit = () => {
    addBooking({ ...service, comment });
    setComment('');
  };

  return (
    <div>
      <h2>{service.name}</h2>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={handleSubmit}>Add Service</button>
    </div>
  );
};
export default ServicePage;
