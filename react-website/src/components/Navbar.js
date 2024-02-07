import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className='navbar-logo'></Link>
        Alex Kolev <i className='fab fa-typo3'/>
      </div>
    </nav>
    </>
  )
}

export default navbar