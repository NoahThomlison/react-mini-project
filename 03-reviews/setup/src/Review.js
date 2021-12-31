import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {

    const [index, setIndex] = useState(0)
    const {id, name, job, image, text} = people[index]

    const next = (index) => {
      if(index + 1 > people.length - 1){
        return(0)
      }
      return(index+1)
    }
  
    const previous = (index) => {
      if(index - 1 < 0){
        return(people.length-1)
      }
      return(index-1)
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
        <button className="prev-btn" onClick={() => setIndex(previous(index))}><FaChevronLeft/></button>
        <button className="next-btn"  onClick={() => setIndex(next(index))}><FaChevronRight/></button>
      </div>
      <button className="random-btn" onClick={() => setIndex(Math.floor(Math.random() * people.length))}>Random</button>
    </article>
  )
};

export default Review;
