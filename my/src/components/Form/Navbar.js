import React from 'react';
import { Link } from 'react-router-dom';
import "../../CSS/Navbar.css";

// Keep in mind you removed the button that was in the "togglebutton" class
function Navbar() {
  return (
    <div className='navbar'>
      <div className='ToggleButton'>

      </div>
      <div className='links'>
        <Link to="/">About Me</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Resume">Resume</Link>
        <Link to="/Portfolio">Portfolio</Link>
      </div>
    </div>
  )
}

export default Navbar