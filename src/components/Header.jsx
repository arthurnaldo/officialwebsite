// Header.jsx
import React, { useState, useEffect } from 'react';

function Header() {
  const messages = [
    "Hi, I'm Atharv!",
    "AI/ML enthusiast",
    "Software developer"
  ];
  const [text, setText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  useEffect(() => {
    let index = 0;
    const currentMessage = messages[currentMessageIndex];
    const interval = setInterval(() => {
      setText((prevText) => prevText + currentMessage[index]);
      index += 1;
      if (index === currentMessage.length) {
        clearInterval(interval);
        // Wait before starting the next message
        setTimeout(() => {
          setText('');
          setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length); // Loop through messages
        }, 1000); // Wait for 1 second before starting next message
      }
    }, 150); // Typing speed (adjust as needed)

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [currentMessageIndex]); // Depend on currentMessageIndex to restart when it changes

  return (
    <header className="header">
      <h1>{text}</h1>
    </header>
  );
}

export default Header;
