import React from 'react';

const introStyle = {
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

export default function Intro() {
  return (
    <div style={introStyle}>
      <img
        src="/images/image.jpeg" // Use an absolute path from the public folder
        alt="Image Description"
        className="img-fluid"
        style={{ maxWidth: '20%', marginBottom: '30px' }}
      />
      <h4>
        <strong>Welcome to My Portfolio</strong>
      </h4>
      <p>
        Greetings! I am thrilled to have you visit my portfolio. My name is Umer, and I am currently pursuing a degree in Software Engineering at Sir Syed University of Engineering and Technology. In this digital page, you will find a collection of my projects and certifications that reflect my passion for software development and my journey as a budding software engineer.
      </p>
      <p>
        As technology continues to evolve and shape our world, I have been on a quest to harness its potential and make meaningful contributions to the field. Through a combination of rigorous academic coursework and hands-on practical experiences, I have honed my skills in software design, development, and problem-solving. This portfolio serves as a testament to my dedication and growth in this exciting and dynamic field.
      </p>
      <p>
        Whether you are a fellow student, a potential employer, or simply someone curious about the world of software engineering, I invite you to explore the projects and achievements I have gathered here, from coding challenges to innovative solutions. Each entry in this portfolio represents a step forward in my journey as a software engineer.
      </p>
      <p>
        Thank you for taking the time to visit my portfolio. If you have any questions or would like to get in touch, please feel free to reach out. I look forward to connecting with like-minded individuals and organizations who share a passion for technology and a commitment to innovation.
      </p>
    </div>
  );
}
