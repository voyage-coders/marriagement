import { useContext } from "react";
import { ServicesContext } from "../../context/ServicesContext";

const ServicesForm = () => {
  const form = useContext(ServicesContext);

  return (
    <div className="ServicesForm">
      <h3> Services Selected </h3>
      {form && form.services.map((service) => <li>{service.name}</li>)}
      <h3> Total Services : {form.services.length}</h3>
    </div>
  );
};

export default ServicesForm;
