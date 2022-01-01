import React from 'react';

const Categories = ({category, changeType}) => {

  return (
    <button className='filter-btn' onClick={() => changeType(category)}>{category}</button>
  )
};

export default Categories;
