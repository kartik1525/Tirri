import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <h1>Welcome Back 👋</h1>

      <p>
        This is the main content area of your dashboard. You can display
        statistics, tasks, notifications, or any other information here.
      </p>

      <div className="cards">
        <div className="card">
          <h2>Projects</h2>
          <p>12 Active Projects</p>
        </div>

        <div className="card">
          <h2>Tasks</h2>
          <p>28 Pending Tasks</p>
        </div>

        <div className="card">
          <h2>Messages</h2>
          <p>5 New Messages</p>
        </div>
      </div>
    </div>
  );
};

export default Content;