import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav>
      <div>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo"/>
            <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
              <FaBars/>
            </button>
          </div>
            <div className={showLinks ? "show-container links-container" : "links-container"}>
              <ul className='links'>
                {links.map((link)=>{
                  return(
                    <li key={link.id}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          <ul className='social-icons'>
          {social.map((link)=>{
            return(
              <li key={link.id}>
                <a href={link.url}>
                  {link.icon}
                </a>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
