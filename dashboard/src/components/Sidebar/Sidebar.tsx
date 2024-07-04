import React from 'react'
import  './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='sidebar'>
        <div  className="sidebar-options">
        <NavLink to='/' className="sidebar-option">
      <span className="material-symbols-outlined">
          grid_view
        </span>
        <p>Dashboard</p>
    </NavLink>
    <NavLink to='/list' className="sidebar-option">
    <span className="material-symbols-outlined">
    book_online
      </span>
      <p>Appointments</p>
  </NavLink>
  <NavLink to='/add' className="sidebar-option">
  <span className="material-symbols-outlined">
  add
    </span>
    <p>Add Services</p>
</NavLink>
<NavLink to='/Customers' className="sidebar-option">
      <span className="material-symbols-outlined">
      supervisor_account
        </span>
        <p>Customers</p>
    </NavLink>
    <NavLink to='/calendar' className="sidebar-option">
    <span className="material-symbols-outlined">
    calendar_clock
      </span>
      <p>Calendar</p>
  </NavLink>
  <NavLink to='/Settings' className="sidebar-option">
  <span className="material-symbols-outlined">
  settings
    </span>
    <p>Setting</p>
    </NavLink>
  <NavLink to='/Help' className="sidebar-option">
  <span className="material-symbols-outlined">
  support_agent
    </span>
    <p>Help</p>
</NavLink>




            
        </div>
    </div>
  )
}

export default Sidebar
