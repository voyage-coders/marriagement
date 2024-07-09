import React, { useState } from 'react';
import { useBookings } from '../../context/BookingContext';

const ServicePage = ({ service }) => {
  const [comment, setComment] = useState('');
  const { addService } = useBookings();
  const serviceName = service?.name;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addService({ ...service, comment });
      setComment('');
      console.log('Booking added');
    } catch (error) {
      console.log(error);
    }
  };

  return (x
    <form onSubmit={handleSubmit}>
      <h2>{serviceName}</h2>
      <textarea
        aria-label='Comment'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button type='submit'>Add Service</button>
    </form>
  );
};
export default ServicePage;
