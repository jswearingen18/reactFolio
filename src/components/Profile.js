import React, { useState } from "react";
import Header from "./Header";
import PageContent from "./PageContent";

export default function Profile() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const changePage = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageContent currentPage={currentPage}></PageContent>
    </div>
  );
}
