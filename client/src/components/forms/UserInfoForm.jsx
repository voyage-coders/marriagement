import React, { useState } from 'react';
import { useServices } from '../../context/ServicesContext';

const UserInfoForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    date: '',
    phoneNumber: '',
  });
  const { services, toggleService } = useServices();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedServices = services.filter((service) => service.selected);
    console.log('User Info:', userInfo);
    console.log('Selected Services:', selectedServices);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={userInfo.name}
        onChange={handleChange}
        placeholder='Name'
      />
      <input
        type='email'
        name='email'
        value={userInfo.email}
        onChange={handleChange}
        placeholder='Email'
      />
      <input
        type='date'
        name='date'
        value={userInfo.date}
        onChange={handleChange}
      />
      <input
        type='tel'
        name='phoneNumber'
        value={userInfo.phoneNumber}
        onChange={handleChange}
        placeholder='Phone Number'
      />
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <label>
              <input
                type='checkbox'
                checked={service.selected}
                onChange={() => toggleService(service.id)}
              />
              {`${service.id}: ${service.name}`}
            </label>
          </div>
        ))}
      </div>
      {/* New section for displaying selected services inside the form */}
      <div>
        <h3>Selected Services:</h3>
        {services
          .filter((service) => service.selected)
          .map((service) => (
            <div key={service.id}>{service.name}</div>
          ))}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserInfoForm;
