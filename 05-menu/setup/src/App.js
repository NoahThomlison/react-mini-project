import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [filter, setFilter] = useState("All")
  const [menu, setMenu] = useState(items)

  const changeType = (category) => {
    setFilter(category)
    if(category === "all"){
      setMenu(items)
      return
    }
    const newItems = items.filter(item => item.category === category)
    setMenu(newItems)
  }

  return (
    <main>
      <header className='title'>
        <h3>Our Menu</h3>
        <div className='underline'></div>
      </header>
      <section className='btn-container'>
        <Categories changeType={changeType} category="all"/>
        <Categories changeType={changeType} category="breakfast"/>
        <Categories changeType={changeType} category="lunch"/>
        <Categories changeType={changeType} category="shakes"/>
      </section>

      <section className='section-center'>
        <Menu items={menu} filter={filter}/>
      </section>
    </main>
  )
}

export default App;
