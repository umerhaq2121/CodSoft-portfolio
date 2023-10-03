// Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-success text-white text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        <p>Website by <strong> Muhammad Umer Haq Qureshi </strong></p>
      </div>
    </footer>
  );
};

export default Footer;
