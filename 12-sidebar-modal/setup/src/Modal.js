import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  const {modelShow, toggleModel} = useGlobalContext()

  return (
  <div className={modelShow ? `modal-overlay show-modal`: 'modal-overlay'}>
    <div className='modal-container'>
      <h3>Modal Content</h3>
      <button className='close-modal-btn' onClick={toggleModel} >
        <FaTimes></FaTimes>
      </button>
    </div>
  </div>
  )
}

export default Modal
