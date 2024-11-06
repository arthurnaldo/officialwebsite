// src/Footer.js

import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:atharvan@berkeley.edu">atharvan@berkeley.edu</a></p>
        <p>Phone: <a href="tel:+16504318235">+1 (650) 431-8235</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/atharvn/" target="_blank" rel="noopener noreferrer">@atharvn</a></p>
        <p>My Github: <a href="https://github.com/atharvnaidu" target="_blank" rel="noopener noreferrer">Github</a></p>
        <p>LeetCode: <a href="https://leetcode.com/u/atharvnaidu/" target="_blank" rel="noopener noreferrer">LeetCode Profile</a></p>
        <p>Spotify: <a href="https://open.spotify.com/user/31u6biefskmynlwgx6uuwvjexg2q" target="_blank" rel="noopener noreferrer">Spotify</a></p>
      </div>
    </div>
  );
};

export default Footer;
