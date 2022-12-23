import React from "react";
import "../styles/Header.css";

function Header({ setCurrentPage, currentPage }) {
  const styles = {
    footerText: {
      fontSize: "35px",
    },
  };

  return (
    <body>
      <header className="header">
        <h1>Jeremiah Swearingen Portfolio</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li
            onClick={() => setCurrentPage("AboutMe")}
            className={`links ${
              setCurrentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }`}
          >
            About Me
          </li>
          <li
            onClick={() => setCurrentPage("Portfolio")}
            className={`links ${
              setCurrentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }`}
          >
            Portfolio
          </li>
          <li
            onClick={() => setCurrentPage("ContactMe")}
            className={`links ${
              setCurrentPage === "ContactMe" ? "nav-link active" : "nav-link"
            }`}
          >
            Contact Me
          </li>
          <li
            onClick={() => setCurrentPage("Resume")}
            className={`links ${
              setCurrentPage === "Resume" ? "nav-link active" : "nav-link"
            }`}
          >
            Resume
          </li>
        </ul>
      </nav>
      <footer>
        <a
          style={styles.footerText}
          href="https://github.com/jswearingen18"
          className="fa fa-github icons"
        >Github</a>
        <a
          style={styles.footerText}
          href="https://www.linkedin.com/in/jeremiah-swearingen-021985244/"
          className="fa fa-linkedin icons"
        >Linkedin</a>
        <a
          style={styles.footerText}
          href="/"
          className="fa fa-stack-overflow icons"
        >Stack OverFlow</a>
      </footer>
    </body>
  );
}

export default Header;
