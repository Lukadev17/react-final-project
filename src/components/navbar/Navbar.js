import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/wikipedia">Wikipedia</Link>
        <Link to="/contact">Contact</Link>
       </div>
    );
  };

  export default Navbar;