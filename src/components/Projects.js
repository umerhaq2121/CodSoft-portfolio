import React from 'react';

const projectStyle = {
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
  

const Projects = () => {
  return (

    <div style={projectStyle}>

    <div>
        <br/>
      <h4>Projects and Certifications</h4>
      <br/>
    

      {/* Certification in Cloud Native Computing */}
      <div>
        <h5>Certification in Cloud Native Computing</h5>
        <p>(August 2022 to Present)</p>
        <p>Provider: Presidential initiative for Artificial Intelligence (PIAIC)</p>
      </div>
      <br/>

      {/* Certification in MS Office */}
      <div>
        <h5>Certification in MS Office</h5>
        <p>(October to December 2018)</p>
        <p>Provider: Computer Collegiate</p>
      </div>
      <br/>

      {/* MP3 Player Project */}
      <div>
        <h5>Project built using Data Structures and Algorithms</h5>
        <p>(April 2021)</p>
        <p>Project: MP3 Player</p>
      </div>
      <br/>

      {/* Landmark Recognition Project */}
      <div>
        <h5>Project built using Artificial Intelligence</h5>
        <p>(January 2023)</p>
        <p>Project: Landmark Recognition</p>
      </div>
      <br/>

      {/* Text Analyzer Website */}
      <div>
        <h5>Website built on React JS</h5>
          <p>(September 2023)</p> 
        <p>Project: <a href="https://umerhaq2121.github.io/TextAnalyzer">Text Analyzer</a></p>
      </div>


  
      <br/>
      <br/>
      <br/>
    </div>
    </div>
  );
};

export default Projects;
