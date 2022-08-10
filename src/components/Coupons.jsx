import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Coupons() {
  return (
    <div className='wrapper'>
        <Navbar />
        <div className="main">
            <Sidebar />
        </div>
    </div>
  )
}

export default Coupons