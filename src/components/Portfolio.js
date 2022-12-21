import React from "react";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="images">
      <div className="image1">
        <div className="imgborder">
          <a href="https://dadjokesgalore.herokuapp.com/">dadjokesgalore</a>
        </div>
      </div>
      <div className="image2">
        <div className="imgborder">
          <a href="https://cyberlog.herokuapp.com/">CYBERlog</a>
        </div>
      </div>
      <div className="image3">
        <div className="imgborder">
          <a href="https://jswearingen18.github.io/JSwearProfile/">HTML + CSS Portfolio</a>
        </div>
      </div>
      <div className="image4"></div>
      <div className="image5"></div>
      <div className="image6"></div>
    </div>
  );
}

export default Portfolio;
