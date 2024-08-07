import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './routes/ScrollToTop';


function App() {

  return (
    <Router>
      <ScrollToTop/>
      <AppRoutes/>
      <h1 className='h1Test'> Marriagement - A Project by Kseniia and Sharaf</h1>
    </Router>
  )
}

export default App
