import './App.css'
import Header from './components/header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/contact/Contact'
import HomePage from './pages/home/HomePage'
import ServicePage from './pages/services/ServicePage'


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<ServicePage/>}/>
      </Routes>
      <h1 className='h1Test'>Marriagement - A Project by Kseniia & Sharaf</h1>
    </Router>
  )
}

export default App
