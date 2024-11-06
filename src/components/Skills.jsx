// src/Skills.js
import React from "react";
import "../Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-section">
        <div className="skills-category">
          <h3>Programming Languages:</h3>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java</li>
            <li>Perl</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Frameworks:</h3>
          <ul>
            <li>TensorFlow</li>
            <li>React</li>
            <li>Next.js</li>
            <li>OpenGL</li>
            <li>Flask</li>
            <li>Django</li>
            <li>Bootstrap</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Libraries:</h3>
          <ul>
            <li>Git</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>SciPy</li>
            <li>Matplotlib</li>
            <li>PyTorch</li>
            <li>Pinecone</li>
            <li>Sk-Learn</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
