import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'> 
      <div className='dashboard--sidebar'>
        <div className='dashboard--sidebar--image'>
          <img src="../assets/Logo.png" alt="" className="dashboard--sidebar--avatar" />
        </div>
        <p className='sidebar--icon'><i className="fa fa-home" aria-hidden="true"></i>Home</p>
        <p className='sidebar--icon'><i className="fa fa-user" aria-hidden="true"></i>Pharmacies</p>
        <p className='sidebar--modify'><i className="fa fa-wrench" aria-hidden="true"></i>Modify Pharmacy<i className="fa fa-angle-down" aria-hidden="true"></i></p>
      </div>
      <div className='dashboard--sidebar--modify'>
        <p className='sidebar--icon--extra'>Add</p>
        <p className='sidebar--icon--extra'>Update</p>
      </div>
    </div>
  )
}

export default Sidebar