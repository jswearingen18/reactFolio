import React, { useState } from "react";
import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function Profile() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

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
    return <Resume />;
  };

  const changePage = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} changePage={changePage} />
      {renderPage()}
    </div>
  );
}
