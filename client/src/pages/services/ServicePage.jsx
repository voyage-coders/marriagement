//Individual service page component
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

function ServicePage() {
  let { serviceId } = useParams();

  return (
    <div>
      <Header />
      <h2>Service Details: {serviceId}</h2>
      <Footer />
    </div>
  );
}

export default ServicePage;
