import React from "react";

const followmeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    minHeight: '10vh', // Use minHeight instead of height for better responsiveness
    textAlign: 'center', // Center text within the container
    backgroundColor: 'black', // Set the background color to black
    color: 'white', // Set the text color to white
    padding: '40px', // Add padding for better mobile readability
  };

const Followme = () => {
  return (
    <div style={followmeStyle}>
    <div className="follow-me">
      <h3>Follow me on</h3>
      <br/>
      <div className="social-icons">
        
        <a
          href="https://www.linkedin.com/in/muhammad-umer-haq-qureshi-198959221"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-success mr-2 mx-1"
        >
          LinkedIn
        </a>
        
      </div>
    </div>
    </div>
  );
};

export default Followme;
