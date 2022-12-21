import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="links">About Me</a>
      <a href="/" className="links">Portfolio</a>
      <a href="/" className="links">Contact Me</a>
      <a href="/" className="links">Resume</a>
    </nav>
  );
}

export default Navbar;
