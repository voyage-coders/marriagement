//Individual service page component
import Header from '../../components/header/Header';
import ServiceDetail from '../../components/services-section/ServiceDetail';

import {servicesDetail} from '../../components/services-section/servicesData';

function ServicePage() {
  return (
    <div className="service-page">
        <Header/>
        <ServiceDetail services={servicesDetail}/>
    </div>
  )
}

export default ServicePage