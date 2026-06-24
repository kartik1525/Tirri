import React from 'react'
import { LayoutGrid, ChevronDown, Search, Bell, HelpCircle, Settings } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar-container">
     
      <div className="navbar-left">
        <button className="nav-btn grid-btn" title="App launcher">
          <LayoutGrid size={20} />
        </button>
        <div className="nav-logo">
          <svg className="jira-logo-svg" viewBox="0 0 512 512" width="24" height="24">
            <path fill="#0C66E4" d="M228.3 468.7c-5.1 5.1-13.4 5.1-18.4 0L10.7 269.5c-14.3-14.3-14.3-37.4 0-51.7l199.2-199.2c5.1-5.1 13.4-5.1 18.4 0l19.2 19.2c5.1 5.1 5.1 13.4 0 18.4L69 235.6c-5.1 5.1-5.1 13.4 0 18.4l178.5 178.5c5.1 5.1 5.1 13.4 0 18.4l-19.2 17.8z" />
            <path fill="#0052CC" d="M375.4 321.6c-5.1 5.1-13.4 5.1-18.4 0L240.2 204.8c-14.3-14.3-14.3-37.4 0-51.7L357 37c5.1-5.1 13.4-5.1 18.4 0l19.2 19.2c5.1 5.1 5.1 13.4 0 18.4L297.8 171.4c-5.1 5.1-5.1 13.4 0 18.4l77.6 77.6c5.1 5.1 5.1 13.4 0 18.4l-20 15.8z" />
            <path fill="#2684FF" d="M482.7 195c-5.1 5.1-13.4 5.1-18.4 0L398.2 128.9c-14.3-14.3-14.3-37.4 0-51.7l19.2-19.2c5.1-5.1 13.4-5.1 18.4 0l66.9 66.9c14.3 14.3 14.3 37.4 0 51.7l-20 18.4z" />
          </svg>
          <span className="logo-text">Tirri</span>
        </div>
        
        <nav className="nav-menu">
          <div className="nav-item">
            <span>Your work</span>
            <ChevronDown size={14} />
          </div>
          <div className="nav-item">
            <span>Projects</span>
            <ChevronDown size={14} />
          </div>
          <div className="nav-item">
            <span>Filters</span>
            <ChevronDown size={14} />
          </div>
          <div className="nav-item">
            <span>Dashboards</span>
            <ChevronDown size={14} />
          </div>
          <div className="nav-item">
            <span>People</span>
            <ChevronDown size={14} />
          </div>
          <div className="nav-item">
            <span>Apps</span>
            <ChevronDown size={14} />
          </div>
        </nav>

        <button className="create-btn">
          Create
        </button>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <div className="search-wrapper">
          <Search className="search-icon" size={16} />
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        <div className="premium-badge">
          <span>Premium trial</span>
          <span className="days-left">30d</span>
        </div>

        <button className="nav-btn icon-btn" title="Notifications">
          <Bell size={20} />
          <span className="bell-badge"></span>
        </button>

        <button className="nav-btn icon-btn" title="Help">
          <HelpCircle size={20} />
        </button>

        <button className="nav-btn icon-btn" title="Settings">
          <Settings size={20} />
        </button>

        <div className="user-avatar" title="Kartikeya Singh">
          <span>KS</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar