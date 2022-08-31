import React, { useEffect } from 'react'

const Alert = ({msg, type}) => {
  console.log(msg, type)
  return (
      <p className={`alert ${type}`}>{msg}</p>
  )
}

export default Alert
