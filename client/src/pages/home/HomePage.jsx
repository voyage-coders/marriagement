//HomePage component
import Hero from './Hero';
import Header from '../../components/header/Header';
import ServicesSection from '../../components/services-section/ServicesSection';
import servicesData from '../../components/services-section/servicesData';

function HomePage() {
  return (
    <div>
        <Header/>
        <Hero/>
        <ServicesSection cards={servicesData}/>
    </div>
  )
}

export default HomePage