import { useBookings } from '../../context/BookingContext';

const MyBookings = () => {
  const { bookings } = useBookings();

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li
            key={booking.id}
          >{`Service ID: ${booking.id}, Comment: ${booking.comment}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
