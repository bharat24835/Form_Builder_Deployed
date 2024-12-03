import React from 'react'
import { useState } from 'react'
import './checkbox.css'
import CheckBoxField from './CheckBoxField';
const CheckBox = ({  obj,
    section2data,
    setSection2data,
    index,
    handleInputChange,
    handleCheckBoxChange,
    handleDeleteObject,
    print,
    setActiveCard2,
    onDrop,}) => {
        const [label, setLabel] = useState("");
        //   const [placeholder, setPlaceholder] = useState("");
          const [name, setName] = useState("");
          const [isrequired, setIsrequired] = useState(false);
          const[seletedOptions, setSelectedOptions] = useState(null);
          const[object , setObject] = useState(obj);
      
          // const handleSubmit = (e)=>{
          //   e.preventDefault();
          //   console.log("Save Changes");
      
          // }
          const bodyStyle = {
            display: "flex",
            "justify-content": "space-between",
          };
          const spanstyle = {
            "background-color": "#ccc",
            "border-radius": "50%",
            padding: " 0px 8px",
          };
          const iStyle = {
            fontSize: "30px",
            cursor: "pointer",
          };
          // 
          const handleAdd = (index) => {
            // Clone the section2data array to avoid direct mutation
        const updatedSection2data = [...section2data];
        
        // Clone the specific data object (to avoid mutating the original reference)
        const updatedOptions = [...updatedSection2data[index].data.options];
        
        // Create a new option with a unique ID
        const newOption = {
          id: `${Date.now()}`, // Use a unique ID
          displayText: "",
          displayName: "",
        };
        
        // Add the new option to the cloned array
        updatedOptions.push(newOption);
        
        // Update the object at the current index
        updatedSection2data[index] = {
          ...updatedSection2data[index],
          data: {
            ...updatedSection2data[index].data,
            options: updatedOptions, // Assign the updated options array
          },
        };
        
        // Update the state with the modified section2data
        setSection2data(updatedSection2data);
          };
      
      
          // Handle input changes
          const handleInputChangeInternal = (e) => {
            const { name, value } = e.target;
            handleInputChange(index, name, value); // Call the function passed from App.js
          };
      
          // Handle checkbox change
          const handleCheckBoxChangeInternal = (e) => {
            const { checked } = e.target;
            setIsrequired(checked);
            handleCheckBoxChange(index, checked); // Call the function passed from App.js
          };
      
          // Handle object deletion
          const handleDelete = () => {
            handleDeleteObject(index); // Call the function passed from App.js
          };
      


  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded m-4" draggable onDragStart={()=>setActiveCard2(index)} onDragEnd={()=> setActiveCard2(null)}>
    <div className="top" style={bodyStyle}>
      <label htmlFor="exampleInputEmail1" className="form-label fs-4">
        <span style={spanstyle}>{index + 1}</span> - {obj.tagname}
      </label>

      <button
        type="button"
        className="btn btn-warning"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>

    <div>
      <div className="temp">
        <div className="mb-3">
          <input
            type="text"
            name="label"
            placeholder="Enter Label"
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
              handleInputChangeInternal(e);
            }}
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
      
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleInputChangeInternal(e);
            }}
          />
        </div>

        {/* here we will render the option that we made */}

        <div className="mb-3">
        {/* {object.data.options.map((input, i)=>(
          <div key={i} style={divStyle}>
          <RadioFields obj = {obj} objIndex = {index} index ={i} section2data = {section2data} setSection2data  = {setSection2data} displayText = {input.displayText} displayName  = {input.displayName} />

          </div>
        ))} */}
         <i className="ri-add-circle-line" style={iStyle} onClick={()=> {handleAdd(index)}}></i>
         {section2data[index].data.options.map((input, i) => (
          <div key={input.id} style={divStyle}>
            <CheckBoxField
              obj={obj}
              objIndex={index}
              index={i}
              section2data={section2data}
              setSection2data={setSection2data}
              displayText={input.displayText}
              displayName={input.displayName}
            />
          </div>
        ))}
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="isRequired"
            className="form-check-input"
            checked={isrequired}
            onChange={(e) => {
              setIsrequired(!isrequired);
              handleCheckBoxChangeInternal(e);
            }}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Required
          </label>
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={print}>
        Save
      </button>
    </div>
  </div>
  )
}
const divStyle = {
    "display" : "flex",

}

export default CheckBox
