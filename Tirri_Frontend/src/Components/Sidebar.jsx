import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    "Home",
    "Profile",
    "Projects",
    "Settings",
    "Logout",
  ];

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Dashboard</h1>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;