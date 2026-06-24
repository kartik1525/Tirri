import React, { useState } from 'react'
import { 
  CornerDownRight, CheckSquare, Bookmark, ChevronDown, FolderSearch
} from 'lucide-react'
import './Content.css'

const Content = () => {
  const [activeTab, setActiveTab] = useState('Worked on')

  // Sample tasks based on the Jira screenshot reference
  const tasks = [
    {
      id: 'SCRUM-4',
      title: 'Subtask 2.1',
      type: 'Subtask',
      project: '918 Bugs',
      icon: <CornerDownRight size={14} className="issue-icon subtask" />,
      time: '21 minutes ago',
      assignee: 'KS'
    },
    {
      id: 'SCRUM-3',
      title: 'Task 3',
      type: 'Task',
      project: '918 Bugs',
      icon: <CheckSquare size={14} className="issue-icon task" />,
      time: '21 minutes ago',
      assignee: 'KS'
    },
    {
      id: 'SCRUM-2',
      title: 'Task 2',
      type: 'Story',
      project: '918 Bugs',
      icon: <Bookmark size={14} className="issue-icon story" />,
      time: '21 minutes ago',
      assignee: 'KS'
    },
    {
      id: 'SCRUM-1',
      title: 'Task 1',
      type: 'Task',
      project: '918 Bugs',
      icon: <CheckSquare size={14} className="issue-icon task" />,
      time: '21 minutes ago',
      assignee: 'KS'
    }
  ]

  const tabs = [
    { id: 'Recommended', name: 'Recommended' },
    { id: 'Assigned to me', name: 'Assigned to me', badge: 0 },
    { id: 'Starred', name: 'Starred' },
    { id: 'Worked on', name: 'Worked on' },
    { id: 'Viewed', name: 'Viewed' }
  ]

  return (
    <main className="content-container">
      {/* Recommended Spaces Section */}
      <section className="dashboard-section spaces-section">
        <div className="section-title-bar">
          <h2>Recommended spaces</h2>
          <button className="text-link-btn">View all spaces</button>
        </div>
        <div className="spaces-empty-card">
          <FolderSearch size={48} className="empty-icon" />
          <h3>No spaces found</h3>
          <p>Any recommended spaces will appear here</p>
        </div>
      </section>

      {/* For You Section */}
      <section className="dashboard-section for-you-section">
        <div className="section-title-bar for-you-bar">
          <h2>For you</h2>
          <div className="tabs-wrapper">
            <div className="pills-container">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`pill-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span>{tab.name}</span>
                  {tab.badge !== undefined && (
                    <span className="pill-badge">{tab.badge}</span>
                  )}
                </button>
              ))}
              <button className="pill-btn more-btn">
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Task Timeline / Feed */}
        <div className="task-feed">
          <h3 className="timeline-header">Today</h3>
          <div className="task-list">
            {tasks.map((task) => (
              <div key={task.id} className="task-row">
                <div className="task-left">
                  <div className="type-icon-wrapper">
                    {task.icon}
                  </div>
                  <div className="task-info">
                    <span className="task-title">{task.title}</span>
                    <span className="task-metadata">
                      {task.type} • {task.id} • {task.project}
                    </span>
                  </div>
                </div>
                <div className="task-right">
                  <div className="task-assignee-avatar">
                    <span>{task.assignee}</span>
                  </div>
                  <span className="task-time-text">{task.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Content
