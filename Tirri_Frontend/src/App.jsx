import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App