import React from 'react';

const navbarStyle = {
  width: '100%', // Set the width to 100% for full-width navbar
  height: '100px', // Set the desired height in pixels
};

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light bg-success" style={navbarStyle}>
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand text-white" href="/">
            <strong>𝗠𝘂𝗵𝗮𝗺𝗺𝗮𝗱 𝘂𝗺𝗲𝗿 𝗛𝗮𝗾 𝗤𝘂𝗿𝗲𝘀𝗵𝗶</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
