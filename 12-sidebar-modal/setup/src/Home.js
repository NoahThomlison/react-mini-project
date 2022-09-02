import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  const {toggleSidebar, toggleModel} = useGlobalContext()
  console.log(toggleModel, toggleSidebar)
  return (
    <main>
      <button className='sidebar-toggle' onClick={toggleSidebar}>
        <FaBars></FaBars>
      </button>
      <button className='btn' onClick={toggleModel}>
        Show Modal
      </button>
    </main>
    )
  }

export default Home
