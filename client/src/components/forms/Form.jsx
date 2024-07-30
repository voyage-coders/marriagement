import { useContext } from "react";
import { ServicesContext } from "../../context/ServicesContext";

const Form = (props) => {
  const services = useContext(ServicesContext);
  console.log("Services", services);
  return (
    <div className="form-card">
      <p> Service Name : {props.name} </p>
      <button
        onClick={() =>
          services.setServices([...services.services, { name: props.name }])
        }
      >
        {" "}
        Add Service{" "}
      </button>
    </div>
  );
};

export default Form;