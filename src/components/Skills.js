import React from 'react';

let skillStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    minHeight: '90vh', // Use minHeight instead of height for better responsiveness
    textAlign: 'center', // Center text within the container
    backgroundColor: 'black', // Set the background color to black
    color: 'white', // Set the text color to white
    padding: '40px', // Add padding for better mobile readability
};

const gapStyle = {
  margin: '20px 0',
};

const Skills = () => {
  const skillsSummary = "My Skills as a Software Engineer:";
  const skillsList = [
    {
      name: 'Microsoft Office',
      description: 'Proficient in Word, Excel, and PowerPoint.',
    },
    {
      name: 'Linux OS',
      description: 'Familiar with Linux operating systems and command-line usage.',
    },
    {
      name: 'HTML & CSS',
      description: 'Skilled in building and styling web pages using HTML and CSS.',
    },
    {
      name: 'JavaScript',
      description: 'Experience in client-side scripting with JavaScript.',
    },
    {
      name: 'React JS',
      description: 'Proficient in building user interfaces with React.',
    },
    {
      name: 'MySQL Server',
      description: 'Experience in managing MySQL databases.',
    },
    {
      name: 'Java',
      description: 'Proficient in Java programming language.',
    },
    {
      name: 'Python',
      description: 'Experience in Python scripting and development.',
    },
    {
      name: 'Docker',
      description: 'Familiar with containerization using Docker.',
    },
    {
      name: 'Kubernetes',
      description: 'Experience in container orchestration with Kubernetes.',
    },
  ];

  return (
    <div style={skillStyle}>
      <div className="skills-container">
        <h4>{skillsSummary}</h4>
        <br></br>
        
        <ul>
          {skillsList.map((skill, index) => (
            <li key={index} style={gapStyle}>
              <strong>{skill.name}:</strong> {skill.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
