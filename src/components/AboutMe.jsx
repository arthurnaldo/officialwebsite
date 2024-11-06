// AboutMe.jsx (or inside your existing component)
import React from 'react';
import '../AboutMe.css';  // Import the CSS file

const AboutMe = () => {
    return (
      <section id="about-me" className="about-me">
        <h2>About Me</h2>
        <p>
          I'm studying Computer Science at{' '}
          <a href="https://berkeley.edu" target="_blank" rel="noopener noreferrer">
            UC Berkeley
          </a>.
        </p>
        <p>
          I enjoy learning about the fundamentals of machine learning and artificial intelligence and applying them to the real world.
        </p>
      </section>
    );
  };
  
  export default AboutMe;
