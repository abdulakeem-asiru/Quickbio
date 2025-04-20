import React from 'react'
import { FaArrowRotateLeft } from "react-icons/fa6";

function Header() {
  return (

    <div className='logo-container'>

  
    <div className='logo'>
      <img src='src/assets/react.svg' alt='logo' />
      <h2>QuickBio</h2>

    </div>
    <FaArrowRotateLeft size={30} />

    </div>
  )
}

export default Header
