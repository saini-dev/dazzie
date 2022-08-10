import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="nav-title">
            <div></div>
            <h2>Dazzie</h2>
        </div>
        <div className="nav-info">
          <img src="/icons/Notification Bell.svg" alt="bell" />
          <div className='user-icon'></div>
          <div className="user-info">
            <h3>Sumanto</h3>
            <span>Cashier</span>
          </div>
        </div>
    </div>
  )
}

export default Navbar