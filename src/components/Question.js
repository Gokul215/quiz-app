import React, { useEffect } from 'react'
import data from '../database/data'
function Question() {
  const question= data[0]
   useEffect(()=>
   console.log('Question Rendered'))

    function onSelect(){
        console.log("radio button changed")
    }
  return (
    <div className='questions'>
    <h2 className='text-light'>{question.question}</h2>
    <ul key={question.id}>
    {
       question.options.map((o,i)=>(
        <li key={i}>
        <input type='radio' name='options'  onChange={() => onSelect()} id={`q{i}-option`}/>
         <label className='text-primary' htmlFor={`q{i}-option`}>{o}</label>
         <div className='check checked'></div>

        </li>
       ))
    }
     
    </ul>

      
    </div>
  )
}

export default Question