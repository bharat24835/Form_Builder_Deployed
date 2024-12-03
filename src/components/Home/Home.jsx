import React from 'react'
import { useEffect, useState , useRef} from "react";

import "./home.css";
import  Item from '../Section_1/Button'
import TextField from '../Input/Text_Field/TextField'
// import { text_field_data } from './components/Input/Text_Field/text_field_data';
import { Inputs } from '../../data/Inputs';
import TextArea from "../Input/Text_Area/TextArea";
// import Section_3_TextArea from './components/Input/Text_Area/Section_3_TextArea'
import DOMPurify from "dompurify";
import Section from "../Section3/Section";
import Number from '../Input/Number/Number'
import DropArea from "../../DropArea/DropArea";
import Radio from "../Input/Radio_Button/RadioButton";
import CheckBox from "../Input/CheckBox/CheckBox";
import Password from "../Input/Password/Password";
import Email from "../Input/Email/Email";
import Heading from "../Input/Heading/Heading";
import NavBar from '../NavBar/Navbar';
import { useData } from '../../context/useData';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Home = () => {
     // const oldSection2Data = localStorage.getItem("oldData");
  const [section2data, setSection2data] = useData();
  const[activeCard1 , setActiveCard1]  =useState(null);  // this is for dragging the item from section 1 to section 2
  const[activeCard2 , setActiveCard2]  =useState(null); // this is for dragging the item from section 2 to within section2
  const[message ,setMessage] = useState('');
  const [t , setT] = useState(null);
  

 

  const data = Inputs;

  // Function to handle input change
  const handleInputChange = (index, name, value) => {
    const updatedSection2Data = section2data.map((input, i) => {
      if (i === index) {
        return {
          ...input,
          data: {
            ...input.data,
            [name] : value, // Update the correct field
          },
        };
      }
      return input;
    });
    setSection2data(updatedSection2Data);
  };

  // Function to handle checkbox change
  const handleCheckBoxChange = (index, checked) => {
    const updatedSection2Data = section2data.map((input, i) => {
      if (i === index) {
        return {
          ...input,
          data: {
            ...input.data,
            isRequired: checked, // Set the checkbox state
          },
        };
      }
      return input;
    });
    setSection2data(updatedSection2Data);
  };

  // Function to delete an object
  const handleDeleteObject = (index) => {
    const updatedSection2Data = section2data.filter((_, i) => i !== index); // Remove the item at the index
    setSection2data(updatedSection2Data);
  };

  const handlePrint = () => {
    console.log(section2data);
  };
  const handleReset = ()=>{
      console.log("Resetting The Data");
      setSection2data([]);
      // localStorage.removeItem("oldData");
  }

  const onDrop =(position)=>{
    if((activeCard1 == null && activeCard1 === undefined) && (activeCard2 == null && activeCard2 === undefined)) return;
    if(activeCard1!== undefined && activeCard1 != null ){
      setMessage(`${activeCard1} is going to place at the position ${position}`);
      console.log(`${activeCard1} is going to place at the position ${position}`);

      const tastToMove = data[activeCard1];
      console.log( tastToMove);
    
      const newObj = {
        ...tastToMove,
        id : `${Date.now()} - ${Math.random()}}`
      }
      console.log(newObj);

      setSection2data(prevData => {
        const newData = [...prevData];
        newData.splice(position, 0, newObj); 
        return newData;
    });

     
    }
    else if(activeCard2!== undefined && activeCard2 != null){
      setMessage(`${activeCard2} is going to place at the position ${position}`);
      console.log(`${activeCard2} is going to place at the position ${position}`);

      const taskToRemove = section2data[activeCard2];

      const updatedSection2Data = section2data.filter((input , index)=> index!==activeCard2);

      updatedSection2Data.splice(position , 0 , {
        ...taskToRemove,
      })
      setSection2data(updatedSection2Data);
      
    }
    
  }

  const componentRef = useRef();
  const handleExport = () => {
    const input = componentRef.current;

    // Temporarily expand the scrollable area to fit the full content
    const originalHeight = input.style.height;
    input.style.height = 'auto';

    // Use html2canvas to capture the entire component
    html2canvas(input, {
      scale: 2, // Improve resolution
      useCORS: true, // Handle cross-origin images if any
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size, portrait

      const imgWidth = 210; // A4 page width in mm
      const pageHeight = 297; // A4 page height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if necessary
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF
      pdf.save('scrollable-component.pdf');

      // Restore the original scrollable area height
      input.style.height = originalHeight;
    });
  };
  return (
    <div className='app'>
    <NavBar section2data={ section2data} handleExport = {handleExport} />
    <div className="cont">
      <div className="section_1 " style={{ height: '90vh', overflowY: 'scroll' , marginBottom : "10px" }}>
        {data.map((input, index) => (
          <div key={`${input.id}`}>
            <Item
              name={input.tagname}
              obj={input}
              index = {index}
              section2data={section2data}
              setSection2data={setSection2data}
              setActiveCard1 = {setActiveCard1}
            />{" "}
          </div>
        ))}
        {/* <Item name = {"Bharat"}/> */}
        {/* <button onClick={handleReset}>Reset</button>
        <h3>Active Card - 1 : -{activeCard1} </h3>
        <h3>Active Card - 2 : -{activeCard2} </h3>
        <h6>Message is : {message}</h6>
        <h5> Task to move from data to Section2data : - {t}</h5>
        <button onClick={handlePrint}>PRint</button> */}
      </div>
      <div className="section_2">
      <DropArea onDrop = {()=>{onDrop(0)}} />

        
        {Array.isArray(section2data) &&
          section2data.map((input, index) => (
            <div key={input.id} >
              {input.number === 1 ? (
                <TextField
                  obj={input}
                  section2data={section2data}
                  setSection2data={setSection2data}
                  index={index}
                  handleInputChange={handleInputChange} // Pass handleInputChange
                  handleCheckBoxChange={handleCheckBoxChange} // Pass handleCheckBoxChange
                  handleDeleteObject={handleDeleteObject} // Pass handleDeleteObject
                  print = {handlePrint}
                  setActiveCard2 = {setActiveCard2}
                  onDrop = {onDrop}
                />
              ) : ( 
                <></>
              )}
              {input.number === 2 ? (
                <TextArea
                  obj={input}
                  section2data={section2data}
                  setSection2data={setSection2data}
                  index={index}
                  handleInputChange={handleInputChange} // Pass handleInputChange
                  handleCheckBoxChange={handleCheckBoxChange} // Pass handleCheckBoxChange
                  handleDeleteObject={handleDeleteObject} // Pass handleDeleteObject
                  print = {handlePrint}
                  setActiveCard2 = {setActiveCard2}
                  onDrop = {onDrop}
                />
              ) : (
                <></>
              )}
              {input.number === 3 ? (
                <Number
                  obj={input}
                  section2data={section2data}
                  setSection2data={setSection2data}
                  index={index}
                  handleInputChange={handleInputChange} // Pass handleInputChange
                  handleCheckBoxChange={handleCheckBoxChange} // Pass handleCheckBoxChange
                  handleDeleteObject={handleDeleteObject} // Pass handleDeleteObject
                  print = {handlePrint}
                  setActiveCard2 = {setActiveCard2}
                  onDrop ={onDrop}
                />
              ) : (
                <></>
              )}
              {input.number === 4 ? (
                <Radio
                  obj={input}
                  section2data={section2data}
                  setSection2data={setSection2data}
                  index={index}
                  handleInputChange={handleInputChange} // Pass handleInputChange
                  handleCheckBoxChange={handleCheckBoxChange} // Pass handleCheckBoxChange
                  handleDeleteObject={handleDeleteObject} // Pass handleDeleteObject
                  print = {handlePrint}
                  setActiveCard2 = {setActiveCard2}
                  onDrop = {onDrop}
                />
              ) : (
                <></>
              )}
               {input.number === 5 ? (
                <CheckBox
                  obj={input}
                  section2data={section2data}
                  setSection2data={setSection2data}
                  index={index}
                  handleInputChange={handleInputChange} // Pass handleInputChange
                  handleCheckBoxChange={handleCheckBoxChange} // Pass handleCheckBoxChange
                  handleDeleteObject={handleDeleteObject} // Pass handleDeleteObject
                  print = {handlePrint}
                  setActiveCard2 = {setActiveCard2}
                  onDrop = {onDrop}
                />
              ) : (
                <></>
              )}
               {input.number === 6 ? (
                <Password
                  obj={input}
                  section2data={section2data}
                  setSection2data={setSection2data}
                  index={index}
                  handleInputChange={handleInputChange} // Pass handleInputChange
                  handleCheckBoxChange={handleCheckBoxChange} // Pass handleCheckBoxChange
                  handleDeleteObject={handleDeleteObject} // Pass handleDeleteObject
                  print = {handlePrint}
                  setActiveCard2 = {setActiveCard2}
                  onDrop = {onDrop}
                />
              ) : ( 
                <></>
              )}
              {input.number === 7 ? (
                <Email
                  obj={input}
                  section2data={section2data}
                  setSection2data={setSection2data}
                  index={index}
                  handleInputChange={handleInputChange} // Pass handleInputChange
                  handleCheckBoxChange={handleCheckBoxChange} // Pass handleCheckBoxChange
                  handleDeleteObject={handleDeleteObject} // Pass handleDeleteObject
                  print = {handlePrint}
                  setActiveCard2 = {setActiveCard2}
                  onDrop = {onDrop}
                />
              ) : ( 
                <></>
              )}
               {input.number === 8 ? (
                <Heading
                  obj={input}
                  section2data={section2data}
                  setSection2data={setSection2data}
                  index={index}
                  handleInputChange={handleInputChange} // Pass handleInputChange
                  handleCheckBoxChange={handleCheckBoxChange} // Pass handleCheckBoxChange
                  handleDeleteObject={handleDeleteObject} // Pass handleDeleteObject
                  print = {handlePrint}
                  setActiveCard2 = {setActiveCard2}
                  onDrop = {onDrop}
                />
              ) : ( 
                <></>
              )}
              <DropArea onDrop = {()=>{onDrop(index+1)}} />
            </div>
          ))}
      </div>
      {section2data.length != 0 && (
        <div className='section_3'>
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded m-4" style={{ height: '90vh', overflowY: 'scroll' , marginBottom : "10px" }} ref={componentRef}>
          {Array.isArray(section2data) &&
            section2data.map((input, index) => (
              <div key={index}>
                <Section data={input} index={index} />
              </div>
            ))}
        </div>
        </div>
        
      )}
    </div>
  </div>
  )
}

export default Home
