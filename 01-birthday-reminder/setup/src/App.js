import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // return <h2>reminder project setup</h2>;
  const [people, setPeople] = useState(data)

  return (
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={() => {setPeople([])}}>Clear All</button>
      <button onClick={() => {setPeople(data)}}>Restore All</button>

    </section>
  )
}

export default App;
