import React from "react";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";

const PageContent = (props) => {
  const renderPage = (currentPage) => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return <div>{renderPage(props.currentPage)}</div>;
};

export default PageContent;
