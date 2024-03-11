import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className=''>One Note</h1>
        <ul>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> About </a></li>
            <li><a href="#"> Contact </a></li>
        </ul>
    </nav>
  )
}
