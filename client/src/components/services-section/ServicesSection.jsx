import './ServicesSection.css'
import Card from './Card'


const ServicesSection = ({cards}) => {
  return (
    
    <div>
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
  </div>
  )
}

export default ServicesSection