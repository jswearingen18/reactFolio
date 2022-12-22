import React from "react";
import "../styles/Header.css";

function Header({ currentPage, changePage }) {
  return (
    <body>
      <header className="header">
        <h1>Jeremiah Swearingen Portfolio</h1>
      </header>
      <nav className="navbar">
        <a
          href="#AboutMe"
          className="links"
          onClick={() => changePage("AboutMe")}
          >
          About Me
        </a>
        <a href="/" className="links">
          Portfolio
        </a>
        <a href="/" className="links">
          Contact Me
        </a>
        <a href="/" className="links">
          Resume
        </a>
      </nav>
    </body>
  );
}

export default Header;
