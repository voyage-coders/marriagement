import './Card.css'

const Card = ({image,text}) => {
  return (
    <div className="card">
    <img src={image} alt="Card" className="card-image" />
    <div className="card-text">{text}</div>
  </div>
  )
}

export default Card