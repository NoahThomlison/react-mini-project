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
      setAlert({show: true, msg: "Please enter value", type: "alert-danger"})
      alertTimer()
    }
    else if(groceryItem && isEditing){
      setIsEditing(true)
    }
    else{
      setAlert({show: true, msg: "Item Added", type: "alert-success"})
      alertTimer()
      const newGroceryItem = {id: Math.floor(Math.random() * 1000), item: groceryItem}
      setGroceryList([...groceryList, newGroceryItem])
      setGroceryItem("")
    }
  }

  const alertTimer = () => {
    const timer = setTimeout(() => {
      setAlert({show: false, msg: "", type: ""})
    },  3000);
    return () => clearTimeout(timer)
  }

  const clearList = () => {
    setAlert({show: true, msg: "List cleared", type: "alert-danger"})
    alertTimer()
    setGroceryList([])
  }

  return (
    <section className='section-center'>
      <form action="" className="grocery-form" onSubmit={submitHandler}>
        {alert.show && <Alert {...alert}/>}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input className="grocery" value={groceryItem} onChange={(e) => setGroceryItem(e.target.value)} type="text" placeholder='e.g. eggs' />
          <button type='submit' className='submit-btn'>{isEditing ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      {groceryList.length > 0 && (
        <div className='grocery-container'>
        < List groceryList={groceryList}></List>
          <button onClick={() => clearList()} className='clear-btn'>Clear Items</button> 
        </div>
      )}
    </section>
  )
}

export default App

