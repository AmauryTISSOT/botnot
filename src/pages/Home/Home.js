import React from "react";
import SideBar from "../../components/SideBar/SideBar.js"

const Home = () => {
  return (
    <div className="flex">
    <SideBar/>
      <main className="w-full h-screen text-9xl text-center">Home Page</main>
    </div>
  );
};

export default Home;
