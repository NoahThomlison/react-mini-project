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

  const categoryFinder = (items) => {
    const categories = []
    items.forEach(item => {
        if(!categories.includes(item.category)){
          categories.push(item.category)
        }
    });
    return(categories)
  }

  const categories = categoryFinder(items)

  return (
    <main>
      <header className='title'>
        <h3>Our Menu</h3>
        <div className='underline'></div>
      </header>
      <section className='btn-container'>
        <Categories key={99} changeType={changeType} category="all"/>
        {categories.map((item) => 
          <Categories key={categories.indexOf(item)} changeType={changeType} category={item}/>)}
      </section>
      <section className='section-center'>
        <Menu items={menu} filter={filter}/>
      </section>
    </main>
  )
}

export default App;
