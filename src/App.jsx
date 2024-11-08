import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  // Set a constant background color without any scroll effect
  const bgColor = 'white';

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <Navbar /> {/* Add Navbar here */}
      <Header />
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
