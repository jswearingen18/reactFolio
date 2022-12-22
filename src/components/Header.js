import React from "react";
import "../styles/Header.css";

function Header({ currentPage, changePage }) {
  return (
    <>
      <header className="header">
        <h1>Jeremiah Swearingen Portfolio</h1>
      </header>
      <nav className="navbar">
        <a
          href="/about"
          onClick={() => changePage("AboutMe")}
          // className={'links' {currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}'}
          className={`links ${currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}`}
        >
          About Me
        </a>
        <a href="/portfolio"
          onClick={() => changePage("Portfolio")}
          className={`links ${currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}`}
        >
          Portfolio
        </a>
        <a href="/contact"
          onClick={() => changePage("ContactMe")}
          className={`links ${currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}`}
        >
          Contact Me
        </a>
        <a href="/resume"
          onClick={() => changePage("Resume")}
          className={`links ${currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}`}
        >
          Resume
        </a>
      </nav>
    </>
  );
}

export default Header;
