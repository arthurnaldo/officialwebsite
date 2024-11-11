// src/components/Navbar.jsx
import React from 'react';
import '../Navbar.css'; // Don't forget to import the CSS for styling

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href='#research'>Research</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
