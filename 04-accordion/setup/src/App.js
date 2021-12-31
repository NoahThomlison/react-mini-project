import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <section className="container">
        <div>
          <h3>Questions And Answers About Login</h3>
        </div>
        <div>
        {data.map(question => 
          <SingleQuestion question={question}/>
        )}
        </div>
      </section>
    </main>
  )  
}

export default App;
