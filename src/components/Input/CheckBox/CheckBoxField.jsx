import React ,{useState}from 'react'

const CheckBoxField = ({ obj, objIndex, index, section2data, setSection2data, displayName: a, displayText: b }) => {
    const [displayText, setDisplayText] = useState(b);
    const [displayName, setDisplayName] = useState(a);
  
    // Handle adding a new option
    const handleAdd = () => {
      const updatedSection2data = [...section2data]; // Shallow copy of section2data
  
      const newOption = {
        id: Date.now(), // Ensure a unique ID
        displayText: "",
        displayName: "",
      };
  
      // Deep copy of the current options for the specific objIndex
      const newOptionsArray = [...updatedSection2data[objIndex].data.options, newOption]; 
  
      // Update the section2data immutably
      updatedSection2data[objIndex] = {
        ...updatedSection2data[objIndex],
        data: {
          ...updatedSection2data[objIndex].data,
          options: newOptionsArray, // Replace options with the new cloned array
        },
      };
  
      setSection2data(updatedSection2data); // Update the state immutably
    };
  
    // Handle deleting an option
    const handleDelete = (optionIndex) => {
      const updatedSection2data = [...section2data]; // Shallow copy of section2data
  
      // Create a new array of options with the specific one removed
      const newOptionsArray = updatedSection2data[objIndex].data.options.filter(
        (_, i) => i !== optionIndex // Remove the specific option
      );
  
      // Update the section2data immutably
      updatedSection2data[objIndex] = {
        ...updatedSection2data[objIndex],
        data: {
          ...updatedSection2data[objIndex].data,
          options: newOptionsArray, // Replace options with the filtered array
        },
      };
  
      setSection2data(updatedSection2data); // Update the state immutably
    };
  
    // Handle updating the displayText of an option
    const handleDisplayTextChange = (e, objIndex, optionIndex) => {
      const updatedSection2data = [...section2data];
  
      // Create a new array with updated displayText for the specific option
      const newOptionsArray = updatedSection2data[objIndex].data.options.map((option, i) =>
        i === optionIndex ? { ...option, displayText: e.target.value } : option
      );
  
      // Update the section2data immutably
      updatedSection2data[objIndex] = {
        ...updatedSection2data[objIndex],
        data: {
          ...updatedSection2data[objIndex].data,
          options: newOptionsArray, // Replace options with the updated array
        },
      };
  
      setSection2data(updatedSection2data); // Update state immutably
      setDisplayText(e.target.value);
    };
  
    // Handle updating the displayName of an option
    const handleDisplayNameChange = (e, objIndex, optionIndex) => {
      const updatedSection2data = [...section2data];
  
      // Create a new array with updated displayName for the specific option
      const newOptionsArray = updatedSection2data[objIndex].data.options.map((option, i) =>
        i === optionIndex ? { ...option, displayName: e.target.value } : option
      );
  
      // Update the section2data immutably
      updatedSection2data[objIndex] = {
        ...updatedSection2data[objIndex],
        data: {
          ...updatedSection2data[objIndex].data,
          options: newOptionsArray, // Replace options with the updated array
        },
      };
  
      setSection2data(updatedSection2data); // Update state immutably
      setDisplayName(e.target.value);
    };
  return (
    <div className="mb-3" style={divStyle}>
    <input
      type="text"
      value={displayText}
      onChange={(e) => handleDisplayTextChange(e, objIndex, index)}
      className="form-control"
    />
    <input
      type="text"
      value={displayName}
      onChange={(e) => handleDisplayNameChange(e, objIndex, index)}
      className="form-control"
    />
    <i className="ri-add-circle-line" style={iStyle} onClick={handleAdd}></i>
    {(
      <i className="ri-close-circle-fill" style={iStyle} onClick={() => handleDelete(index)}></i>
    )}
  </div>
  )
}
const divStyle = {
  display: "flex",
  "align-items": "center",
  "justify-content" : "center",
  gap: "10px",
  height:"fit-content",
  width:"100%",
  "margin-bottom" : "10px"
};

const iStyle = {
  fontSize: "30px",
  cursor: "pointer",
  width : "10%",
  height:"100%"
};
export default CheckBoxField
