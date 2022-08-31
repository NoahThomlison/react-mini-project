import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({groceryList}) => {

  return (
    <div className='grocery-list'>
      {groceryList.map((listItem) => {
        const {id, item} = listItem
        return(
          <acticle className='grocery-item' key={id}>
            <p className='title'>{item}</p>
            <div className='btn-container'>
              <button className='edit-btn'>
                <FaEdit></FaEdit>
              </button>
              <button className='delete-btn'>
                <FaTrash></FaTrash>
              </button>
            </div>
          </acticle>
        )
      })}
    </div>
  )
}

export default List
