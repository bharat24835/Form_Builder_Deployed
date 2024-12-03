import React, { useState } from 'react'
import './Button.css'
// import { overflow } from 'html2canvas/dist/types/css/property-descriptors/overflow';

const Item = ({name ,section2data ,  setSection2data , obj , index, setActiveCard1}) => {

  const[isActive  , setIsActive] = useState(false);
  const boxStyle = {
    width: "100%",
    height: "80px",
    border: isActive? "1px dashed #FF0800" : "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    "background-color" : "aliceblue",
    cursor : "grab",
    "overflow-y" :"hidden",
    opacity : isActive ? 0.7 : 1
  };

  // const handleNewObject = ()=>{
  //   const newObj = {
  //     ...obj,
  //     id : `${Date.now()} - ${Math.random()}}`
  //   }
  //   setSection2data((prev)=> [...prev , newObj]);
  // }

  return (
    <div className="container mt-4 " draggable onDragStart={()=>{setActiveCard1(index); setIsActive(true)}} onDragEnd={()=> {setActiveCard1(null) ; setIsActive(false)}} >
      <div style={boxStyle} className=" shadow-sm bg-red fw-semibold  ">
        {/* Title on the left */}
        <span className="fw-bold">{name}</span>

        {/* Plus sign on the right */}
        <span className="fs-4" >+</span>
      </div>
    </div>

  )
}

export default Item;
