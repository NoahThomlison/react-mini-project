import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  return (
  <div className='modal-container'>
    <div className={`modal-overlay`}>
      <h3>Modal Content</h3>
      <button className='close-modal-btn'>
        <FaTimes></FaTimes>
      </button>
    </div>
  </div>
  )
}

export default Modal
