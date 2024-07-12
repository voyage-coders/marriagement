import './ServiceDetail.css';
import { useParams } from 'react-router-dom';

const ServiceDetail = ({services}) => {
    const { id } = useParams();
    const service = services.find(service => service.id.toString() === id);
  
    if (!service) {
      return <div>Service not found</div>;
    }
  
    return (
      <div className="service-detail">
        <h2>{service.text}</h2>
        <img src={service.image} alt={service.text} className="service-image" />
        <p>{service.description}</p>
      </div>
    );
  };

export default ServiceDetail