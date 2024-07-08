import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import { useBookings } from '../../context/BookingContext';

function Button() {
  const [isHovering, setIsHovering] = useState(false);
  const { bookings } = useBookings();

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link to='/'>
        <button className='btn'>
          <i className='uil uil-clipboard-alt button-icon'></i> My Bookings
        </button>
      </Link>
      {isHovering && (
        <div className='bookings-list'>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div key={index} className='booking-item'>
                {booking.name}
              </div>
            ))
          ) : (
            <div className='booking-item'>No bookings added</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Button;
