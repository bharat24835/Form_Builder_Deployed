import React, { useState } from 'react'
import './heading.css'

const Heading = ({
    obj,
    section2data,
    setSection2data,
    index,
    handleInputChange,
    handleCheckBoxChange,
    handleDeleteObject,
    print,
    setActiveCard2,
    onDrop,
  }) => {

    const [label, setLabel] = useState("");
    const [placeholder, setPlaceholder] = useState("");
    const [name, setName] = useState("");
    const [isrequired, setIsrequired] = useState(false);
  
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
          {/* <div className="mb-3">
            <input
              type="text"
              name="placeholder"
              className="form-control"
              placeholder="Enter PlaceHolder"
              value={placeholder}
              onChange={(e) => {
                setPlaceholder(e.target.value);
                handleInputChangeInternal(e);
              }}
            />
          </div> */}
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

export default Heading
