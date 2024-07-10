import { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Dropdown from './Dropdown';
import Button from './Button';
import logo from '../../assets/images/logo.png'





function Header() {
  const [click,setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const isHome = location.pathname === '/';

  const onMouseEnter= () => {
    if(window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true);
    }
    };

    const onMouseLeave= () => {
      if(window.innerWidth < 960) {
        setDropdown(false)
      } else {
        setDropdown(false);
      }
      };  

  return (
    <div>
        <nav className={`navbar ${isHome? 'home-navbar' : ''}`}>
            <Link to='/' className='navbar-logo'>
            <img src={logo} alt="Marriagement Logo" className="navbar-logo" />
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
              <li className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Services <i className="uil uil-angle-down category-icon"></i>
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
                <i className="uil uil-clipboard-alt"></i> My Bookings
                </Link>
              </li>
            </ul>
            <Button />
        </nav>
    </div>
  )
}

export default Header