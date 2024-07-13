//HomePage component
import Hero from './Hero';
import ServicesSection from '../../components/services-section/ServicesSection';
import servicesData from '../../components/services-section/servicesData';

function HomePage() {
  return (
    <div>
        <Hero/>
        <ServicesSection cards={servicesData}/>
    </div>
  )
}

export default HomePage