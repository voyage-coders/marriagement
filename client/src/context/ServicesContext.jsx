import { createContext } from "react";
import { useState } from "react";

export const ServicesContext = createContext(null);

export const ServicesProvider = (props) => {
  const [services, setServices] = useState([]);

  return (
    <ServicesContext.Provider value={{ services, setServices }}>
      {props.children}
    </ServicesContext.Provider>
  );
};