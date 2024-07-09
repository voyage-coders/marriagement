//HomePage component
import Hero from './Hero';
import Header from '../../components/header/Header';
import { BookingProvider } from '../../context/BookingContext';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default HomePage;
