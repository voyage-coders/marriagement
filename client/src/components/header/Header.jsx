import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from "./Dropdown";
import Button from "./Button";
import logo from "../../assets/images/logo.png";
import ServicesForm from "../forms/AddedService";
import { ServicesContext } from "../../context/ServicesContext";

function Header() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [bookings, setBookings] = useState(false);

  const servicesSelected = useContext(ServicesContext);

	const handleClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);

	const isHome = location.pathname === "/";

	const onMouseDropdownEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseBookingsEnter = () => {
		if (window.innerWidth < 960) {
			setBookings(false);
		} else {
			setBookings(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	return (
		<div>
			<nav className={`navbar ${isHome ? "home-navbar" : ""}`}>
				<Link to="/" className="navbar-logo">
					<img src={logo} alt="Marriagement Logo" className="navbar-logo" />
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "uil uil-times" : "uil uil-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li
						className="nav-item"
						onMouseEnter={onMouseDropdownEnter}
						onMouseLeave={onMouseLeave}
					>
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Services <i className="uil uil-angle-down category-icon"></i>
						</Link>
						{dropdown && <Dropdown />}
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Portfolio
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
							Contact Us
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
							<i className="uil uil-clipboard-alt"></i> My Bookings
						</Link>
					</li>
					<li
						className="service-form-nav"
						onMouseEnter={onMouseBookingsEnter}
						onMouseLeave={onMouseLeave}
					>
						<Button
							to="/bookings"
							text="My Bookings"
							icon="uil-clipboard-alt"
						/>
						{bookings && servicesSelected.services.length !== 0 && <ServicesForm />}
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
