import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      // Change background color based on scroll position
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setBgColor('lightgrey');
      } else {
        setBgColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
