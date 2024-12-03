import React, { useState } from 'react'
import RadioSection3 from '../Input/Radio_Button/RadioSection3';
import CheckBoxSection3 from '../Input/CheckBox/CheckBoxSection3';


const Section = ({data: obj , index }) => {

  

  const spanstyle = {
    "background-color" : "#ccc",
    "border-radius" : "50%",
    "padding" : " 0px 8px"
      }

  if(obj.number === 1){
    return (
     
      <div className="mb-3">
    <label className="form-label d-flex justify-content-between"><span>{obj.data.label ? obj.data.label : "###"}</span>
    <span style={spanstyle}>{index+1}</span></label>
    <input type={obj.data.type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={obj.data.placeholder ? obj.data.placeholder : "###"} name={obj.data.name} required = {obj.data.isRequired}/>
  </div>
   )
  }
  else if(obj.number===2){
    return (
      <div className="mb-3">
  <label  className="form-label d-flex justify-content-between"><span>{obj.data.label ? obj.data.label : "###" }</span>
  <span style={spanstyle}>{index+1}</span></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={obj.data.row} defaultValue={""} placeholder={obj.data.placeholder ? obj.data.placeholder : "###"} name={obj.data.name}  required = {obj.data.isRequired}/>
</div>

    
   )
  }
  else  if(obj.number === 3){
    return (
     
      <div className="mb-3">
    <label  className="form-label d-flex justify-content-between"><span>{obj.data.label ? obj.data.label : "###"}</span>
    <span style={spanstyle}>{index+1}</span></label>
    <input type={obj.data.type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={obj.data.placeholder ? obj.data.placeholder : "###"} name={obj.data.name} required = {obj.data.isRequired}/>
  </div>
   )
  }
  else if(obj.number === 4){
    return(
      <div className="mb-3">
    <label  className="form-label d-flex justify-content-between"><span>{obj.data.label ? obj.data.label : "###"}</span>
    <span style={spanstyle}>{index+1}</span></label>
     {/* Here we need to render all the option along with default value   */}
     <RadioSection3 obj = {obj}/>
  </div>
    )
  }
  else if(obj.number === 5){
    return(
      <div className="mb-3">
    <label  className="form-label d-flex justify-content-between"><span>{obj.data.label ? obj.data.label : "###"}</span>
    <span style={spanstyle}>{index+1}</span></label>
     {/* Here we need to render all the option along with default value   */}
     <CheckBoxSection3 obj = {obj}/>
  </div>
    )
  }
  else  if(obj.number === 6){
    return (
     
      <div className="mb-3">
    <label className="form-label d-flex justify-content-between"><span>{obj.data.label ? obj.data.label : "###"}</span>
    <span style={spanstyle}>{index+1}</span></label>
    <input type={obj.data.type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={obj.data.placeholder ? obj.data.placeholder : "###"} name={obj.data.name} required = {obj.data.isRequired}/>
  </div>
   )
  }
  else  if(obj.number === 7){
    return (
     
      <div className="mb-3">
    <label className="form-label d-flex justify-content-between"><span>{obj.data.label ? obj.data.label : "###"}</span>
    <span style={spanstyle}>{index+1}</span></label>
    <input type={obj.data.type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={obj.data.placeholder ? obj.data.placeholder : "###"} name={obj.data.name} required = {obj.data.isRequired}/>
  </div>
   )
  }
  else if(obj.number === 8){
    return (
     
      <div className="mb-3">
    <label className="form-label d-flex justify-content-end">
    <span style={spanstyle}>{index+1}</span></label>
    <h1>{obj.data.name}</h1>
    {/* <input type={obj.data.type} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={obj.data.placeholder ? obj.data.placeholder : "###"} name={obj.data.name} required = {obj.data.isRequired}/> */}
  </div>
   )
  }
  
}

export default Section
