import React from 'react';

const Menu = ({items, filter}) => {
  
  return (
    <div className='section-center'>
    {items.map((item) => 
      <article key={item.id} className='menu-item'>
        <img className="photo" src={item.img} alt={item.name}></img>
        <div className='item-info'>
          <header>
            <h4>{item.title}</h4>
            <h4 className='price'>${item.price}</h4>
          </header>
            <p className='item-text'>{item.desc}</p>
          </div>
      </article>
    )}
    </div>
  );
};

export default Menu;
