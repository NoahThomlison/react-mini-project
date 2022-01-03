import React from 'react';

const Categories = ({category, changeType, categories}) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => 
        <button className='filter-btn' onClick={() => changeType(category)}>{category}</button>
      )}
    </div>
  )
};

export default Categories;
