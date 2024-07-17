import "./ServiceDetail.css";
import { useParams } from "react-router-dom";
import Button from "../header/Button";


const ServiceDetail = ({ services }) => {
	const { id } = useParams();
	const service = services.find((service) => service.id.toString() === id);


	if (!service) {
		return <div>Service not found</div>;
	}

	return (
		<div className="detail-container">
			<div className="service-container">
				<h2 className="service-heading">{service.text}</h2>
				<div className="service-detail-1">
          <div className="detail-1-text">
					<p>{service.description}</p>
          <Button href='#form' text="Select Service" icon='uil uil-arrow-down hero--button-icon'/>
          </div>
					<img
						src={service.image}
						alt={service.text}
						className="service-image"
					/>
				</div>
				<div className="service-detail-2">
					<img
						src={service.image2}
						alt={service.text}
						className="service-image"
					/>
					<p>{service.description2}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetail;
