import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarMenuData = [
    {
      menuName: "Accueil",
      path: "/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      menuName: "Email",
      path: "/outils/emailGenerator",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
          />
        </svg>
      ),
    },
    {
      menuName: "Checklist",
      path: "/outils/checklistGenerator",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ),
    },
    {
      menuName: "API",
      path: "/outils/annuaire",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
    },
    {
      menuName: "Courrier",
      path: "/outils/courrierGenerator",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
    {
      menuName: "A propos",
      path: "/about",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="w-32 w-min-32 bg-slate-50 dark:bg-slate-800  h-screen flex flex-col items-center pt-5 pb-5 gap-2 drop-shadow-md flex-shrink-0 top-0 left-0 overflow-x-hidden sticky">
      <Link to="/" className="font-semibold w-full flex flex-col items-center">
        <span className="flex gap-1">
           <svg
              width="20"
              height="20"
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
        BotNot 
        </span>
        <i className="text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 dark:highlight-white/5">Beta</i>
      </Link>
      <ul className="w-full flex flex-col items-center">
        {sideBarMenuData.map((item, index) => (
          <li
            key={index}
            className=" w-full h-24 flex items-center justify-center content-center hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-slate-700"
          >
            <Link
              to={item.path}
              className="w-full h-full flex flex-col items-center justify-center gap-3"
            >
              <span>{item.svg}</span>
              {item.menuName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
