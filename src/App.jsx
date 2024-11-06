import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
