import React from 'react'
import { LayoutGrid, ChevronDown, Search, Bell, HelpCircle, Settings } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-left">
        <div className="nav-logo" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <img src="tirri.png" alt="" width="50px" height="50px"/>
          <span className="logo-text">Tirri</span>
        </div>
      </div>
      <div className="navbar-right">
        <div className="search-wrapper">
          <Search className="search-icon" size={16} />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <button className="create-btn">
          Create
        </button>
      </div>
    </header>
  )
}

export default Navbar