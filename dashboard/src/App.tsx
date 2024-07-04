import React from 'react'
import Navbar from './components/Navbar/Navbar.js'
import Sidebar from './components/Sidebar/Sidebar.js';
import { Route, Routes} from 'react-router-dom';
import Add from "./pages/Add/Add.jsx";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Settings from './pages/Settings/Settings.tsx';
import Calendar from './pages/Calendar/Calendar.tsx';
import Customers from './pages/Customers/Customers.tsx';
import AppointmentPage from './pages/AppointmentPage/AppointmentPage.tsx';
import Footer from './components/Footer/Footer.tsx';
import HelpPage from './pages/HelpPage/HelpPage.tsx';


function App() {

  

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Sidebar/>
        <Routes>
        <Route path='/appointments' element={<AppointmentPage />}/>
        <Route path='/customers' element={<Customers />}/>
        <Route path='/calendar' element={<Calendar />}/>
        <Route path='/' element={<Dashboard />}/>
          <Route path='/add' element={<Add  />}/>
          <Route path='/help' element={<HelpPage  />}/>
          <Route path='/settings' element={<Settings  />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
