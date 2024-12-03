import React from 'react'
import { useState } from 'react';
import './radio.css'

const RadioSection3 = ({obj}) => {
    const[selectedOption , setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
    {obj.data.options.map((input , index)=>(
        <div key={index} className='radioDiv'>
           <input 
              type="radio" 
              value={input.displayName} 
              name={obj.data.name} 
              checked={selectedOption === input.displayName} 
              onChange={handleOptionChange} 
            />
            <label>{input.displayText.length>0 ? `${input.displayText}` : "###"}</label>
        </div>
       ))}
       </>
  )
}

export default RadioSection3

