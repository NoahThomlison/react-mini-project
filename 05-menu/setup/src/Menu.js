import React from 'react';

const Menu = ({items, filter}) => {
  
  return (
    <div>
    {items.map((item) => 
      <header className='menu-item'>
        <h4>{item.title}</h4>
        <h4>{item.category}</h4>
        <h5 className='price'>{item.price}</h5>
        <img className="photo" src={item.img} alt={item.name}></img>
        <p className='item-info'>{item.desc}</p>
      </header>
    )}
    </div>
  );
};

export default Menu;
