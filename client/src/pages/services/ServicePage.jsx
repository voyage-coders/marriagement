// import React from 'react';
// import { useServices } from '../../context/ServicesContext';

// const ServicePage = () => {
//   const { services, addService, removeService, availableServices } =
//     useServices();

//   const handleSelectService = (service) => {
//     const isServiceAdded = services.some((s) => s.id === service.id);
//     if (!isServiceAdded) {
//       addService(service);
//     } else {
//       console.log('Service already added');
//     }
//   };

//   const handleRemoveService = (serviceId) => {
//     removeService(serviceId);
//   };

//   return (
//     <div>
//       <h2>Available Services</h2>
//       <div>
//         {availableServices.map((service) => (
//           <button key={service.id} onClick={() => handleSelectService(service)}>
//             Add {service.name}
//           </button>
//         ))}
//       </div>
//       <h2>Selected Services</h2>
//       <div>
//         {services.map((service) => (
//           <div key={service.id}>
//             {service.name}{' '}
//             <button onClick={() => handleRemoveService(service.id)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicePage;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useServices } from '../../context/ServicesContext';
import UserInfoForm from '../../components/forms/UserInfoForm';

const ServicePage = () => {
  const { services, addService, removeService } = useServices();
  const toggleService = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      if (service.selected) {
        removeService(serviceId);
      } else {
        addService({ ...service, selected: true });
      }
    }
  };

  // const handleSelectService = (service) => {
  //   const isServiceAdded = services.some((s) => s.id === service.id);
  //   if (!isServiceAdded) {
  //     addService(service);
  //   } else {
  //     console.log('Service already added');
  //   }
  // };
  const handleSelectService = (service) => {
    // Implementation to add the service
    console.log(`Adding service: ${service.name}`);
    // Call toggleService or any relevant function to add the service
    toggleService(service.id);
  };
  return (
    <div>
      <h1>Service Selection</h1>
      <UserInfoForm services={services} toggleService={toggleService} />
      <div>
        {/* Render services here */}
        {services.map((service) => (
          <div key={service.id}>
            {service.name}
            <button onClick={() => handleSelectService(service)}>Add</button>
            <button onClick={() => removeService(service.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
