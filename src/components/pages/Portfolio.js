import React from "react";
import "../../styles/Portfolio.css";

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
          <a href="https://aura-travel.herokuapp.com/">Aura-Travel Site</a>
        </div>
      </div>
      <div className="image4">
        <div className="imgborder">
          <a href="https://jswearingen18.github.io/PasswordGenie/">
            PasswordGenie
          </a>
        </div>
      </div>
      <div className="image5">
        <div className="imgborder">
          <a href="https://jswearingen18.github.io/Side-Beat/">SideBe@t</a>
        </div>
      </div>
      <div className="image6">
        <div className="imgborder">
          <a href="https://jswearingen18.github.io/CalendarScheduler/">
            CalendarScheduler
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
