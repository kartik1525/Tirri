import React from 'react'
import './Sidebar.css'
const Sidebar= () => {
  return (
    <div>
        <div className="sidebar">
    <div className="logo">
      <img src="path/to/logo.png" alt="Logo" />
      <span>Company Name</span>
    </div>
    <nav className="sidebar-nav">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Tasks</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
    </nav>
    <div className="sidebar-footer">
      <a href="#">Settings</a>
      <a href="#">Logout</a>
    </div>
  </div>
    </div>
  )
}

export default Sidebar;
