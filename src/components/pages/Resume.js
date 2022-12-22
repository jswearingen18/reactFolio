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
    </div>
  );
}
