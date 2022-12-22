import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import ContactMe from "./components/pages/ContactMe";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
