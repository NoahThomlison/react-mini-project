import React from 'react';

const Menu = ({items}) => {

  return (
    <section className='menu-item'>
    {items.map((item) => 
    <header>
      <h4>{item.title}</h4>
      <h5 className='price'>{item.price}</h5>
      <img className="photo" src={item.img} alt={item.name}></img>
      <p className='item-info'>{item.desc}</p>
    </header>

    )}
    </section>
  );
};

export default Menu;
