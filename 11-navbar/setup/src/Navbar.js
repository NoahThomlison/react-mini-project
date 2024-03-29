import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    if(!showLinks){
      linksContainerRef.current.style.height = `0px`
    }
  }, [showLinks])
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
            <div ref={linksContainerRef} className="links-container">
              <ul ref={linksRef} className='links'>
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
