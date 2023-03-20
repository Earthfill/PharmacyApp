import React from 'react'
import Main from '../components/Dashboard/Main'
import Sidebar from '../components/Dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Dashboard