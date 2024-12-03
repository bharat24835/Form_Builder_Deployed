import React from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap';


const NavBar = ({section2data, handleExport}) => {
  const navigate = useNavigate();
  const goToAbout = () => {
    // Navigate to the About route and pass the state
    navigate('/result', );
  };
  return (
    <nav className="navbar1">
    <div className="navbar-cont">
      {/* Empty div for spacing */}
      <div className="left-spacer"></div>

      {/* Centered Heading */}
      <h1 className="navbar-heading">Form Builder</h1>

      {/* Button aligned to the end */}
      <button className="navbar-button" onClick={handleExport}>Export to PDF</button>
    </div>
  </nav>

  )
}

export default NavBar
