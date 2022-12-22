import React, { useState } from "react";
import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import PageContent from "./PageContent";

export default function Profile() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
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

  const changePage = (page) => {
    console.log(page);
    setCurrentPage(page);
  }

  return (
    <div>
      <Header currentPage={currentPage} changePage={changePage} />
      <PageContent>{renderPage()}</PageContent>
    </div>
  );
}
