import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="backgroundNoMatch">
      <h1>Error 404</h1>
      <div>The requested URL was not found on this server.</div>
      <Link className="backtohome" to={"/"}>Get back to home</Link>
    </div>
  );
};

export default NoMatch;
