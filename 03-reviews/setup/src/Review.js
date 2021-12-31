import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {

    const [index, setIndex] = useState(0)
    const {id, name, job, image, text} = people[index]
    console.log(id)
    const next = (id) => {
      if(id + 1 > index.length){
        return(0)
      }
      return(id)
    }
  
    const previous = (id) => {
      if(id - 1 < 1){
        return(index.length - 1)
      }
      return(id-2)
    }

  return (
    <article className='review'>
      <div className="img-container">
        <img className="person-img" src={image} alt={name}></img>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className="prev-btn" onClick={() => setIndex(people[previous(index.id)])}><FaChevronLeft/></button>
        <button className="random-btn" onClick={() => setIndex(people[Math.floor(Math.random() * index.length)])}>Random</button>
        <button className="next-btn"  onClick={() => setIndex(people[next(index.id)])}><FaChevronRight/></button>
      </div>
    </article>
  )
};

export default Review;
