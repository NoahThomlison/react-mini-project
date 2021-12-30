import React from 'react';
import Review from './Review';
import reviews from "./data.js"
import {useState} from 'react'

function App() {
  const [review, setReview] = useState(reviews[0])

  const next = (id) => {
    if(id + 1 > reviews.length){
      return(0)
    }
    return(id)
  }

  const previous = (id) => {
    if(id - 1 < 1){
      return(reviews.length - 1)
    }
    return(id-2)
  }

  return (
    <section>
      <Review review={review}/>
      <div>
        <button onClick={() => setReview(reviews[previous(review.id)])}>Previous</button>
        <button onClick={() => setReview(reviews[Math.floor(Math.random() * reviews.length)])}>Random</button>
        <button onClick={() => setReview(reviews[next(review.id)])}>Next</button>
      </div>
  </section>
  )
}

export default App;
