import "./HeroButton.css";
import { Link } from "react-router-dom";

const HeroButton = () => {
	return (
		<div className="btn-box">
			<a href="#services">
				<button className="hero-btn btn-services">
					Services <i className="uil uil-arrow-down hero--button-icon"></i>
				</button>
			</a>
			<Link to="/contact">
				<button className="hero-btn btn-talk">
					<i className="uil uil-envelope hero--button-icon"></i> Talk to Us
				</button>
			</Link>
		</div>
	);
};

export default HeroButton;