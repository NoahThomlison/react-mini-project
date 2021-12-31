import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return (
    <main>
      <header className='title'>
        <h3>Our Menu</h3>
        <h3 className='underline'></h3>
      </header>
      <section className='btn-container'>
        <Categories catagory="All"/>
        <Categories catagory="Breakfast"/>
        <Categories catagory="Lunch"/>
        <Categories catagory="Shakes"/>
      </section>
      <section className='section-center'>
        <Menu items={items}/>
      </section>
    </main>
  )
}

export default App;
