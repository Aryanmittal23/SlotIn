import React from 'react'
import Navbar from './components/Navbar/Navbar.js'
import Sidebar from './components/Sidebar/Sidebar.js';
import { Route, Routes} from 'react-router-dom';
import Add from "./pages/Add/Add.jsx";
import Orders from './pages/Orders/Orders.tsx';
import List from './pages/List/List.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Settings from './pages/Settings/Settings.tsx';
import Calendar from './pages/Calendar/Calendar.tsx';


function App() {

  

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Sidebar/>
        <Routes>
        <Route path='/calendar' element={<Calendar />}/>
        <Route path='/' element={<Dashboard />}/>
          <Route path='/add' element={<Add  />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/orders' element={<Orders  />}/>
          <Route path='/settings' element={<Settings  />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
