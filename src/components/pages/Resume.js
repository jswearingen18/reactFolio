import React from "react";
import "../../styles/Resume.css";

const styles = {
  resumeStyle: {
    background: "#F4743B",
  },
  resumeHeader: {
    fontSize: "50px",
  },
  resumeText: {
    fontSize: "25px",
  },
};

export default function Resume() {
  return (
    <div style={styles.resumeStyle} className="resume">
      <h2>Jeremiah Swearingen Resume</h2>
      <ul>
        <li>
          <a href="https://docs.google.com/document/d/1dTBSYocJgp3Me6AI_Xb8FRnxDxa0xBlff3oM6LH2GT0/edit">
            Jeremiah Swearingen Resume
          </a>
        </li>
      </ul>
      <h1>Full Stack Skills</h1>
      <ul>
        <li>Css</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>JQUERY</li>
        <li>MYSQL</li>
        <li>MONGODB</li>
        <li>REACT</li>
        <li>MERN Stack</li>
      </ul>
    </div>
  );
}
