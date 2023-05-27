import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

const NoMatch = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col gap-2 items-center justify-center w-full h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-20 h-20 text-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>

        <h1 className="text-4xl">Error 404</h1>
        <p>The requested URL was not found on this server.</p>
        <Link
          className="underline decoration-solid text-blue-500 hover:text-blue-600"
          to={"/"}
        >
          Get back to home
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
