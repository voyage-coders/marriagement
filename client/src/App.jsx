import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <AppRoutes />
      <h1 className='h1Test'>Marriagement - A Project by Kseniia & Sharaf</h1>
    </Router>
  );
}

export default App;
