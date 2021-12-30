import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {
    const id = props.review.id
    const name = props.review.name
    const job = props.review.job
    const image = props.review.image
    const text = props.review.text

  console.log(props.review.name)
  return (
    <div className='review'>
      <img src={image} alt={name}></img>
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
    </div>
  )
};

export default Review;
