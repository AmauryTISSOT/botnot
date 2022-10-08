import React from "react";
import Header from "../Header/Header";

const NoMatch = () => {
  return (
    <>
      <Header />
      <h1>Error 404</h1>
      <div>The requested URL was not found on this server.</div>
    </>
  );
};

export default NoMatch;
