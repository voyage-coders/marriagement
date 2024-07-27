import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Dropdown from './Dropdown';
import Button from './Button';
import logo from '../../assets/images/logo.png';
import MyBookings from '../services-section/MyBookings';
import { useServices } from '../../context/ServiceContext';

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isHovering, setHovering] = useState(false);
  const { services = [] } = useContext(useServices) || {};

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const isHome = location.pathname === '/';

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
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
      <nav className={`navbar ${isHome ? 'home-navbar' : ''}`}>
        <Link to='/' className='navbar-logo'>
          <img src={logo} alt='Marriagement Logo' className='navbar-logo' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'uil uil-times' : 'uil uil-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Services <i className='uil uil-angle-down category-icon'></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
              <i className='uil uil-clipboard-alt'></i> My Bookings
            </Link>
          </li>
        </ul>

        <div
          className='my-bookings-dropdown'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button to='#' text='My Bookings' icon='uil-clipboard-alt' />
          {isHovering && (
            <div
              className='dropdown-container'
              // style={{
              //   position: 'absolute',
              //   backgroundColor: '#f0f0f0',
              //   minWidth: '200px',
              //   minHeight: '100px',
              //   border: '1px solid #ddd',
              //   padding: '10px',
              //   boxSizing: 'border-box',
              //   wordWrap: 'break-word',
              //   maxWidth: '300px',
              //   maxHeight: '200px',
              //   overflowY: 'auto',
              // }}
            >
              <MyBookings />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
