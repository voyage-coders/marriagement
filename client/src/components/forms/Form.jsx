import { useContext } from 'react';
import { ServicesContext } from '../../context/ServicesContext';

const Form = (props) => {
  const services = useContext(ServicesContext);

  const addService = () => {
    if (!services.services.some((service) => service.name === props.name)) {
      services.setServices([...services.services, { name: props.name }]);
    } else {
      console.log('Service already added');
    }
  };

  return (
    <div className='form-card'>
      <p> Service Name : {props.name} </p>
      <button onClick={addService}>Add Service</button>
    </div>
  );
};

export default Form;
