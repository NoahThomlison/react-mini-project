import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categories = ["All", ...new Set(items.map((item) => item.category))]

function App() {
  const [filter, setFilter] = useState("All")
  const [menu, setMenu] = useState(items)

  const changeType = (category) => {
    setFilter(category)
    if(category === "All"){
      setMenu(items)
      return
    }
    const newItems = items.filter(item => item.category === category)
    setMenu(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} menu={menu} changeType={changeType}/>
        <Menu items={menu} filter={filter}/>
      </section>
    </main>
  )
}

export default App;
