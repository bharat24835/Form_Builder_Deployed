import React, { useState } from 'react';
import './DropArea.css';

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setShowDrop(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setShowDrop(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    
      onDrop();
      setShowDrop(false);
    
  };

  return (
    <section
      className={showDrop ? "drop_area shadow p-3 mb-5 bg-body-tertiary rounded m-4" : "hide_drop"}
      onDragEnter={(e)=>{setShowDrop(true)}}
      onDragLeave={(e)=>{setShowDrop(false)}}
      onDragOver={(e) => e.preventDefault()} // prevent default behavior while dragging over
      onDrop={(e)=>{onDrop() ; setShowDrop(false)}}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
