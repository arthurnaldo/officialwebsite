import React from 'react';
import '../Experience.css';
import atlassianLogo from '../images/atlassian.png';
import berkeleytimeLogo from '../images/berkeleytime.png';
import svcLogo from '../images/SVC.png';

const experiences = [
  {
    company: 'Atlassian',
    role: 'Incoming Software Engineering Intern',
    duration: 'May 2025 – Aug. 2025',
    location: 'San Francisco, CA',
    description: 'Incoming software engineering intern at Atlassian.',
    link: 'https://www.atlassian.com',
    logo: atlassianLogo
  },
  {
    company: 'Berkeleytime.com',
    role: 'Backend Software Engineer',
    duration: 'Aug. 2024 – Present',
    location: 'Berkeley, CA',
    description: 'Developed a semantic search system used by over 26,000 UC Berkeley students for course navigation.',
    link: 'https://berkeleytime.com',
    logo: berkeleytimeLogo
  },
  {
    company: 'Silicon Valley Commerce',
    role: 'Machine Learning Engineer Intern',
    duration: 'May 2024 – Aug. 2024',
    location: 'San Francisco, CA',
    description: 'Worked on ML solutions to enhance product listings and improve customer engagement through image processing.',
    link: 'https://www.siliconvalleycommerce.com/',
    logo: svcLogo
  }
];

const Experience = () => {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <div className="experience-box">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-entry">
            <a href={exp.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={exp.logo} 
                alt={`${exp.company} logo`} 
                className="experience-logo" 
              />
            </a>
            <div className="experience-info">
              <h3>
                {exp.role} at{' '}
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a>
              </h3>
              <p><strong>{exp.duration}</strong> | {exp.location}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
