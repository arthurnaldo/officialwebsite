import React, { useEffect, useState } from 'react';
import { FaTwitter, FaReddit, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../Header.css';

function Header() {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [nameIndex, setNameIndex] = useState(0);
  const names = ['Atharv', 'Arthur']; 
  const typingSpeed = 250;
  const backspacingSpeed = 150;
  const gapTime = 2000;
  const nameDelay = 3000;

  useEffect(() => {
    let typingInterval;
    let backspacingInterval;
    let switchTimeout;

    const typeAndBackspace = () => {
      if (isTyping && text.length < names[nameIndex].length) {
        setText((prevText) => prevText + names[nameIndex][text.length]);
      } else if (!isTyping && text.length > 0) {
        setText((prevText) => prevText.slice(0, prevText.length - 1));
      } else if (text.length === names[nameIndex].length) {
        setIsTyping(false);
        setCursorVisible(false);
        switchTimeout = setTimeout(() => {
          setIsTyping(true);
          setCursorVisible(true);
        }, gapTime);
      } else if (text.length === 0) {
        setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        switchTimeout = setTimeout(() => {
          setIsTyping(true);
        }, nameDelay);
      }
    };

    if (isTyping) {
      typingInterval = setInterval(() => {
        typeAndBackspace();
      }, typingSpeed);
    } else {
      backspacingInterval = setInterval(() => {
        typeAndBackspace();
      }, backspacingSpeed);
    }

    return () => {
      clearInterval(typingInterval);
      clearInterval(backspacingInterval);
      clearTimeout(switchTimeout);
    };
  }, [text, isTyping, nameIndex]);

  return (
    <header className="header">
      <div className="header-content">
        <h1>Hi, I'm {text}<span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span></h1>
        <p>Student, AI/ML Researcher, Developer</p>
        <div className="icons">
          <a href="https://www.instagram.com/atharvnna/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/atharvn/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/atharvnaidu123" target="_blank" rel="noopener noreferrer" className="icon">
            <FaTwitter />
          </a>
          <a href="https://github.com/atharvnaidu" target="_blank" rel="noopener noreferrer" className="icon">
            <FaGithub />
          </a>
        </div>
      </div>
      {/* Add the design-right div here */}
      <div className="design-right"></div>
    </header>
  );
}

export default Header;
