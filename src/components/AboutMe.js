import React from "react";
import "../styles/AboutMe.css";

const styles = {
  aboutmeStyle: {
    background: "#F4743B",
  },
  aboutMeHeader: {
    fontSize: "50px",
  },
  aboutMeText: {
    fontSize: "25px",
  },
};

function AboutMe() {
  return (
    <div style={styles.aboutmeStyle} className="aboutMe">
      <h1 style={styles.aboutMeHeader}>About Jeremiah Swearingen</h1>
      <p style={styles.aboutMeText}>
        I am a 31 year old full-stack developer. I have learned a majority of my
        computer programming skills from Vanderbilt University. I attended their
        Full-Stack developer boot-camp. I also was and currently am enrolled in
        a software engineering program with Arizona State University. I am just
        beginning my journey as a full stack developer. I enjoy both front-end
        and back-end so would really love to work doing both.
      </p>
      <a href="/" className="fa fa-github icons"></a>
      <a href="/" className="fa fa-linkedin icons"></a>
      <a href="/" className="fa fa-stack-overflow icons"></a>
    </div>
  );
}

export default AboutMe;
