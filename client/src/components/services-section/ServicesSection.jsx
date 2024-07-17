import './ServicesSection.css'
import Card from './Card'
import { useTransform, motion } from 'framer-motion';


const ServicesSection = ({scrollYProgress, cards}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    
    <motion.div style={{scale, rotate}} className="services-container relative h-screen">
        <h2 className="services-heading" id="services"> Services</h2>
        <div className="cards-section">
            {cards.map((card, index) => (
            <Card 
              key={index} 
              image={card.image} 
              text={card.text}
              link={card.link}
            />
            ))}
        </div>
  </motion.div>
  )
}

export default ServicesSection