import './App.css'
import Header from './components/header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import Contact from './pages/contact/Contact'
import HomePage from './pages/home/HomePage'
import ServicePage from './pages/services/ServicePage'
import AppRoutes from './routes/AppRoutes'


function App() {

  return (
    <Router>
      <AppRoutes/>
      <h1 className='h1Test'>Marriagement - A Project by Kseniia & Sharaf</h1>
    </Router>
  )
}

export default App
