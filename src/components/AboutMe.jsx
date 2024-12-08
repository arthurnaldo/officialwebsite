import React from 'react';
import '../AboutMe.css';
import swedenImage from '../images/childhood.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      {/* Left side with image */}
      <div className="left-side">
        <img src={swedenImage} alt="about me" className="profile-pic" />
        <div className="image-caption">10 year old me:</div> {/* Caption below the image */}
      </div>

      {/* Right side with description */}
      <div className="right-side">
        <h2>About Me</h2>
        <p>Hi there!</p>
        <p>
          I'm a student at UC Berkeley, pursuing a double major in Computer
          Science and Mathematics. While I've lived in various places around
          the world, I call San Francisco and Middletown, Connecticut home.
        </p>
        <p>
          I began programming through Arduino and Roblox game development, and over time, I
          expanded my interests to merge Artificial Intelligence (AI) and
          Machine Learning (ML) with software development.
        </p>
        <p>
          I'm passionate about Network Research, Deep Learning, Machine
          Learning, Distributed Systems, and Web Development.
        </p>
        <p>
          Outside of tech, I enjoy cooking, skateboarding, gaming, reading,
          watching anime, and spending quality time with family.{' '}
        </p>

        {/* Read More button */}
        <button className="read-more-btn">Read More</button>
      </div>
    </section>
  );
}

export default AboutMe;
