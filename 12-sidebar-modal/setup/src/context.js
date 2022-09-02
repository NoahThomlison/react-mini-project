import React, { useState, useContext } from 'react'

const AppContext = React.createContext()


const AppProvider = ({children}) => {
  const [modelShow, setModelShow] = useState(false)
  const [sidebarShow, setSidebarShow] = useState(false)

  const toggleModel = () => {
    console.log("Toggle Model")
    setModelShow(!modelShow)
  }
  
  const toggleSidebar = () => {
    console.log("Toggle SideBar")
    setSidebarShow(!sidebarShow)
  }

  return(
    <AppContext.Provider value={{modelShow, toggleSidebar, sidebarShow, toggleModel}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return(useContext(AppContext))
}

export {AppContext, AppProvider}