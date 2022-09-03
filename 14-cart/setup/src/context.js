import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const emptyCart = () => {
    dispatch({type: 'CLEAR'})
  }

  const increment = () => {
    dispatch({type: 'INCREMENT'})
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'})
  }

  const removeItem = (id) => {
    dispatch({type: "REMOVE", payload: id})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        emptyCart,
        increment,
        decrement,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
