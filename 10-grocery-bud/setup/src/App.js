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

  const onSubmit = (e) => {
    e.preventDefault()
    setGroceryList([...groceryList, groceryItem])
    setGroceryList("")
  }

  return (
    <article>
      <h2>Grocery Bud</h2>
      <input value={groceryItem} onChange={(e) => setGroceryItem(e.target.value)} type="text" placeholder='e.g. eggs' />
      <button onClick={(e) => onSubmit(e)}>Submit</button>
      <List groceryList={groceryList}></List>
    </article>
  )
}

export default App

