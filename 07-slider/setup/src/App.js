import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [review, setReview] = useState(data[0])
  const {id, image, name, title, quote} = review

  const checkIndex = (index) => {
    if(index < 0) {
      return data.length-1}
    if(index > data.length-1) {
      return 0}
    return(index)
  }

  const prev = () => {
    let index = id - 1
    index -= 1
    const newIndex = checkIndex(index)
    setReview(data[newIndex])
  }

  const next = () => {
    let index = id - 1
    index += 1
    const newIndex = checkIndex(index)
    setReview(data[newIndex])
  }

  return (
    <main>
        <section className="section-center">
          <button className='prev' onClick={() => prev()}><FiChevronLeft/></button>
          <div>
            <img className="person-img" src={image} alt={name} ></img>
            <h2>{name}</h2>
            <h2 className='title'>{title}</h2>
            <p className='text'>{quote}</p>
          </div>
          <button className='next' onClick={() => next()} ><FiChevronRight/></button>
          <div className='icon'>
          <FaQuoteRight/>
          </div>
        </section>
    </main>
  )
}

export default App;
