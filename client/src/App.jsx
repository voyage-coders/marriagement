import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BookingProvider>
      <Router>
        <AppRoutes />
        <h1 className='h1Test'>Marriagement - A Project by Kseniia & Sharaf</h1>
      </Router>
    </BookingProvider>
  );
}

export default App;
