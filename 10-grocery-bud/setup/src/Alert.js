import React, { useEffect } from 'react'

const Alert = ({msg, type}) => {
  console.log(msg, type)
  return (
    <section className='alert'>
      <h4 className={type}>{msg}</h4>
    </section>
  )
}

export default Alert
