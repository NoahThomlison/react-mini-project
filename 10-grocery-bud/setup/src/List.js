import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({groceryList, removeItem, editItem}) => {

  return (
    <div className='grocery-list'>
      {groceryList.map((listItem) => {
        const {id, item} = listItem
        return(
          <acticle className='grocery-item' key={id}>
            <p className='title'>{item}</p>
            <div className='btn-container'>
              <button onClick={()=> editItem(id)} className='edit-btn'>
                <FaEdit></FaEdit>
              </button>
              <button onClick={()=> removeItem(id)} className='delete-btn'>
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
