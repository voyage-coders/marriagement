import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({image,text,link}) => {
  return (
      <Link to={link} className="card">
        <img src={image} alt="Card" className="card-image"/>
        <div className="card-text">{text}</div>
      </Link> 
  )
}

export default Card