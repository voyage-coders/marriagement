import './ServiceDetail.css';
import { useState } from 'react';
import { useServices } from '../../context/ServiceContext'; // !!!!!!!!!!!!!!
import { useParams } from 'react-router-dom';
import Button from '../header/Button';
import { servicesDetail } from '../services-section/servicesData'; //!!!!!!

const ServiceDetail = () => {
  const { id } = useParams();

  const { addService, services } = useServices(); // Hook to manage adding services //!!!!!!!
  const [comment, setComment] = useState(''); //State to store comment
  const service = servicesDetail.find(
    (service) => service.id.toString() === id
  );
  console.log('Service ID from URL:', id);
  console.log('Found service:', service); // Find service by ID

  if (!service) {
    return <div>Service not found</div>;
  }

  const handleAddService = () => {
    const serviceName = service.text;
    addService(serviceName, comment);

    console.log('Service added:', { serviceName, comment });
    setComment(''); // Clear comment after adding service
  };

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
