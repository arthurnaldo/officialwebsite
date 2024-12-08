import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add Navbar here */}

      {/* Add IDs to each section to match Navbar links */}
      <section id="header">
        <Header />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
