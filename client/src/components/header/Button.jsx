import { Link } from 'react-router-dom';
import './Button.css';

function Button() {
  return (
    <Link to='/'>
      <button className='btn'>
        <i className='uil uil-clipboard-alt button-icon'></i> My Bookings
      </button>
    </Link>
  );
}

export default Button;
