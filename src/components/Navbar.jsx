import React from 'react';
import '../Navbar.css'; // Don't forget to import the CSS for styling

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo/Name section */}
      <div className="logo">
        <h1>a|rthur/tharv</h1> {/* Your name here */}
      </div>

      {/* Navigation links */}
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
