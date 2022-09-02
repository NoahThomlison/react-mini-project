import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <button className='sidebar-toggle'>
        <FaBars></FaBars>
      </button>
      <button className='btn'>
        Show Modal
      </button>
    </div>
    )
  }

export default Home
