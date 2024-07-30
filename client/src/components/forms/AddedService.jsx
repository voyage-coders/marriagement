import "./AddedService.css";
import { useContext } from "react";
import { ServicesContext } from "../../context/ServicesContext";

const ServicesForm = () => {
  const form = useContext(ServicesContext);

  return (
    <div className="services-form service-form-nav">
      <h4> Services Selected </h4>
      <ul>
        {form && form.services.map((service, index) => (
          <li key={index}>{service.name}</li>
        ))}
      </ul>
      <h3> Total Services : {form.services.length}</h3>
    </div>
  );
};

export default ServicesForm;
