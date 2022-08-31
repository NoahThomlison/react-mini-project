import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [groceryList, setGroceryList] = useState([])
  const [groceryItem, setGroceryItem] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setGroceryList([...groceryList, groceryItem])
  }

  return (
    <article>
      <h2>Grocery Bud</h2>
      <input value={groceryItem} onChange={(e) => setGroceryItem(e.target.value)} type="text" placeholder='e.g. eggs' />
      <button onClick={(e) => onSubmit(e)}>Submit</button>
    </article>
  )
}

export default App
