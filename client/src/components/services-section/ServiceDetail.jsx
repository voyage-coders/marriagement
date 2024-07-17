import './ServiceDetail.css';
import { useState } from 'react';
import { useBookings } from '../../context/BookingContext';
import { useParams } from 'react-router-dom';
import Button from '../header/Button';

const ServiceDetail = ({ services }) => {
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const { addBooking } = useBookings();
  const service = services.find((service) => service.id.toString() === id);

  const handleAddService = () => {
    addBooking(id, comment);
    setComment(''); // Reset comment input after adding
  };
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <div className='service-container'>
        <h2 className='service-heading'>{service.text}</h2>
        <div className='service-detail-1'>
          <div className='detail-1-text'>
            <p>{service.description}</p>
            <Button
              href='#form'
              text='Select Service'
              icon='uil uil-arrow-down hero--button-icon'
            />
          </div>
          <img
            src={service.image}
            alt={service.text}
            className='service-image'
          />
        </div>
        <div className='service-detail-2'>
          <img
            src={service.image2}
            alt={service.text}
            className='service-image'
          />
          <p>{service.description2}</p>
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Add additional comments here'
          className='service-comment'
        />
        <Button text='Add Service' onClick={handleAddService} />
      </div>
    </>
  );
};

export default ServiceDetail;
