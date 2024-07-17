//HomePage component
import Hero from './Hero';
import ServicesSection from '../../components/services-section/ServicesSection';
import servicesData from '../../components/services-section/servicesData';
import { useLayoutEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import Contact from '../contact/Contact';

function HomePage() {

  const container = useRef();
  const { scrollYProgress } = useScroll ({
    target:container,
    offset: ["start start","end end"]
  })

  useLayoutEffect(() => {
    // Scroll to top with a slight delay to ensure the DOM is fully loaded
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(timer); // Clean up timeout if component unmounts
  }, []);


  return (
    <div className="home-container">
    <div ref ={container} className="relative" style={{ height: '200vh' }}>
        <Hero scrollYProgress = {scrollYProgress}/>
        <ServicesSection scrollYProgress= {scrollYProgress} cards={servicesData}/>
    </div>
    <div className="relative z-10 mt-[60vh]">
        <Contact/>
        <h1 className='h1Test text-4xl font-bold text-blue-500'> Marriagement - A Project by Kseniia and Sharaf</h1>
      </div>
    </div>
  )
}

export default HomePage