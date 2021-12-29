import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    try{
      const response = await fetch(url)
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <main>
      {loading ? <h1><Loading/></h1> : <h1><Tours tours={tours} removeTour={removeTour}/></h1>}
    </main>
  )
}

export default App
