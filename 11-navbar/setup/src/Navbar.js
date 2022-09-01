import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div>
        <div class="nav-center">
          <div class="nav-header">
            <div class="links-container .show-container"></div>
            <ul className='social-icons'></ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
