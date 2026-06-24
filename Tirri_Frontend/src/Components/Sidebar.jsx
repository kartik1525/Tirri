import React, { useState } from 'react'
import { 
  User, Clock, Star, Grid, Compass, Folder, Plus, MoreHorizontal, 
  ChevronDown, ChevronUp, Filter, LayoutDashboard, Users, Sliders,
  ChevronLeft, ChevronRight, ExternalLink
} from 'lucide-react'
import './Sidebar.css'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('For you')
  const [spacesExpanded, setSpacesExpanded] = useState(true)
  const [dashboardsExpanded, setDashboardsExpanded] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleItemClick = (itemName) => {
    setActiveItem(itemName)
  }

  return (
    <div className={`sidebar-wrapper ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Collapse Handle Button */}
      <button className="sidebar-toggle-handle" onClick={toggleSidebar}>
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className="sidebar-content">
        {/* Navigation List */}
        <div className="sidebar-section">
          <ul className="sidebar-menu">
            <li 
              className={activeItem === 'For you' ? 'active' : ''} 
              onClick={() => handleItemClick('For you')}
            >
              <User size={18} className="menu-icon" />
              <span className="menu-text">For you</span>
            </li>
            <li 
              className={activeItem === 'Recent' ? 'active' : ''} 
              onClick={() => handleItemClick('Recent')}
            >
              <Clock size={18} className="menu-icon" />
              <span className="menu-text">Recent</span>
              {!isCollapsed && <ChevronDown size={14} className="menu-chevron" />}
            </li>
            <li 
              className={activeItem === 'Starred' ? 'active' : ''} 
              onClick={() => handleItemClick('Starred')}
            >
              <Star size={18} className="menu-icon" />
              <span className="menu-text">Starred</span>
              {!isCollapsed && <ChevronDown size={14} className="menu-chevron" />}
            </li>
            <li 
              className={activeItem === 'Apps' ? 'active' : ''} 
              onClick={() => handleItemClick('Apps')}
            >
              <Grid size={18} className="menu-icon" />
              <span className="menu-text">Apps</span>
            </li>
            <li 
              className={activeItem === 'Plans' ? 'active' : ''} 
              onClick={() => handleItemClick('Plans')}
            >
              <Compass size={18} className="menu-icon" />
              <span className="menu-text">Plans</span>
            </li>
            <li 
              className={activeItem === 'Spaces' ? 'active' : ''} 
              onClick={() => handleItemClick('Spaces')}
            >
              <Folder size={18} className="menu-icon" />
              <span className="menu-text">Spaces</span>
              {!isCollapsed && (
                <div className="spaces-actions" onClick={(e) => e.stopPropagation()}>
                  <button className="icon-action-btn"><Plus size={14} /></button>
                  <button className="icon-action-btn"><MoreHorizontal size={14} /></button>
                </div>
              )}
            </li>
          </ul>
        </div>

        <hr className="sidebar-divider" />

        {/* Collapsible Spaces List */}
        {!isCollapsed && (
          <div className="sidebar-section">
            <div 
              className="section-header" 
              onClick={() => setSpacesExpanded(!spacesExpanded)}
            >
              <span>Recent</span>
              {spacesExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
            
            {spacesExpanded && (
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <div className="project-avatar-bug">
                    <span>9B</span>
                  </div>
                  <span className="sub-menu-text">918 Bugs</span>
                </li>
                <li className="sub-menu-item action-item">
                  <ChevronDown size={16} />
                  <span>More spaces</span>
                </li>
                <li className="sub-menu-item action-item">
                  <Folder size={16} />
                  <span>Browse templates</span>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* Filters Section */}
        {!isCollapsed && (
          <div className="sidebar-section">
            <div className="section-header">
              <span>Filters</span>
            </div>
          </div>
        )}

        {/* Dashboards Section */}
        {!isCollapsed && (
          <div className="sidebar-section">
            <div 
              className="section-header"
              onClick={() => setDashboardsExpanded(!dashboardsExpanded)}
            >
              <span>Dashboards</span>
              {dashboardsExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
            {dashboardsExpanded ? (
              <div className="dashboard-empty-state">
                <p>Once you visit or create dashboards, they'll show up here.</p>
                <button className="view-dashboards-link">
                  <LayoutDashboard size={14} />
                  <span>View all dashboards</span>
                </button>
              </div>
            ) : (
              <ul className="sub-menu">
                <li className="sub-menu-item action-item secondary-action">
                  <span>Once you visit or create dashboards, they'll show up here.</span>
                </li>
                <li className="sub-menu-item action-item">
                  <LayoutDashboard size={16} />
                  <span>View all dashboards</span>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* Teams Section */}
        {!isCollapsed && (
          <div className="sidebar-section">
            <div className="sidebar-menu-item-standalone">
              <div className="item-left">
                <Users size={18} />
                <span>Teams</span>
              </div>
              <ExternalLink size={14} className="ext-icon" />
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="sidebar-footer">
        <div className="sidebar-footer-item">
          <Sliders size={18} />
          {!isCollapsed && <span>Customize sidebar</span>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
