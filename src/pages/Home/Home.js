import React from "react";
import SideBar from "../../components/SideBar/SideBar.js";

const Home = () => {
  return (
    <div className="w-full h-full flex">
      <SideBar />
      <main className="w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center pb-4 gap-3">
          <span>
            <svg
              data-testid="robot-icon"
              width="200"
              height="200"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fillOpacity="0.01" />
              <rect
                x="9"
                y="18"
                width="30"
                height="24"
                rx="2"
                fill="#2F88FF"
                stroke="#000000"
                strokeWidth="4"
              />
              <circle cx="17" cy="26" r="2" fill="white" />
              <circle cx="31" cy="26" r="2" fill="white" />
              <path
                d="M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z"
                fill="white"
              />
              <path
                d="M24 10V18"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 26V34"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 26V34"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="8" r="2" stroke="#000000" strokeWidth="4" />
            </svg>
          </span>
          <h1 className="mx-auto max-w-4xl font-sans text-5xl font-semibold tracking-tight text-slate-900 sm:text-8xl pt-10">
            BotNot
          </h1>
        </div>
        <div className="mx-auto max-w-4xl font-sans text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
          <h1 className="text-center">
            La rédaction d'actes
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative hover:animate-pulse">
                rendue facile
              </span>
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
