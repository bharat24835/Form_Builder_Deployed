import React from 'react'
import { useState } from 'react';
import './checkbox.css'

const CheckBoxSection3 = ({obj}) => {
  return (
    <>
    {obj.data.options.map((input , index)=>(
        <div key={index} className='radioDiv'>
           <input 
              type="checkbox" 
              value={input.displayName} 
              name={obj.data.name} 
              
            />
            <label>{input.displayText.length>0 ? `${input.displayText}` : "###"}</label>
        </div>
       ))}
       </>
  )
}

export default CheckBoxSection3
