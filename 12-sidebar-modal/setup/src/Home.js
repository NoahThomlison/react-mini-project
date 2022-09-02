import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars></FaBars>
      </button>
      <button className='btn'>
        Show Modal
      </button>
    </main>
    )
  }

export default Home
