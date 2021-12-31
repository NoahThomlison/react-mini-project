import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ( props ) => {
  const { question: { id, info, title }} = props;
  const [expanded, setExpanded] = useState(false)

  const toggleExpaned = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='question'>
      <div>
        <h4>{title}</h4>
        <button className='btn' onClick={() => toggleExpaned()}>
        {expanded ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </div>
      {expanded ? <p>{info}</p> : <p></p>}
    </div>
  )
};

export default Question;

