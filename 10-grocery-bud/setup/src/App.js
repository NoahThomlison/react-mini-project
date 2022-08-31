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
        return {...prevState, show: true, msg: "No Item Added", type: "alert-danger"};
      })
    }
    else if(groceryItem && isEditing){

    }
    else{
      setAlert(prevState => {
        return {...prevState, show: true, msg: "Item Added", type: 'alert-success'};
      })
      const newGroceryItem = {id: Math.floor(Math.random() * 1000), item: groceryItem}
      setGroceryList([...groceryList, newGroceryItem])
      setGroceryItem("")
    }
  }

  return (
    <section className='section-center'>
      <form action="" className="grocery-form" onSubmit={submitHandler}>
        {alert.show && <Alert alert={alert}/>}
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

