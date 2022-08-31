import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({groceryList}) => {

  return (
    <section>
      {groceryList.map((item) => {
        return(
          <section>
            <h1>{item}</h1>
            <FaEdit></FaEdit>
            <FaTrash></FaTrash>
          </section>
        )
      })}
    </section>
  )
}

export default List
