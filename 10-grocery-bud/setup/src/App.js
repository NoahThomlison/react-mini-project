import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [groceryList, setGroceryList] = useState([])
  const [groceryItem, setGroceryItem] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: ""
  })

  const submitHandler = (e) => {
    e.preventDefault()
    if(!groceryItem){
      console.log("ding")
      setAlert(prevState => {
        return {...prevState, show: true};
      })
    }
    else if(groceryItem){
      setGroceryList([...groceryList, groceryItem])
      setGroceryItem("")
    }
  }

  return (
    <section className='section-center'>
      <form action="" className="grocery-form" onSubmit={submitHandler}>
        {alert.show && <Alert/>}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input className="grocery" value={groceryItem} onChange={(e) => setGroceryItem(e.target.value)} type="text" placeholder='e.g. eggs' />
          <button type='submit' className='submit-btn'>{isEditing ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      <div className='grocery-container'>
        <List groceryList={groceryList}></List>
        <button className='clear-btn'>Clear Items</button> 
      </div>
    </section>
  )
}

export default App

