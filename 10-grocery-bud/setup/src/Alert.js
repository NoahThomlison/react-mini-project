import React, { useEffect } from 'react'

const Alert = ({alert}) => {
  const message = alert.msg
  const type = alert.type
  return (
    <section className='alert'>
      <h4 className={type}>{message}</h4>
    </section>
  )
}

export default Alert
