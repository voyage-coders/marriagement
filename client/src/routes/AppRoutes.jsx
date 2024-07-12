//Centralized route definitions
import {Routes, Route} from 'react-router-dom'
import Contact from '../pages/contact/Contact'
import HomePage from '../pages/home/HomePage'
import ServicePage from '../pages/services/ServicePage'


function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/service/:id' element={<ServicePage/>}/>
        </Routes>
    </>
    
  )
}

export default AppRoutes
