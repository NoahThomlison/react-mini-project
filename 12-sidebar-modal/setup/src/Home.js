import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  const [modelShow, toggleSidebar, sidebarShow, toggleModel] = useGlobalContext()
  
  return (
    <main>
      <button className='sidebar-toggle' onClick={() => toggleSidebar()}>
        <FaBars></FaBars>
      </button>
      <button className='btn' onClick={() => toggleModel()}>
        Show Modal
      </button>
    </main>
    )
  }

export default Home
