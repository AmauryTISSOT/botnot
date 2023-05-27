import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Accordion = ({ dataObject, rootPath }) => {
  const [isActive, setIsActive] = useState({});

  useEffect(() => {
    setIsActive(
      Object.fromEntries(dataObject.map(({ title }) => [title, false]))
    );
  }, [dataObject]);

  const handleActiveClick = (id) => {
    setIsActive((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  //TODO: faire pivoter le svg quand is active change
  return (
    <div className="flex flex-col cursor-pointer bg-blue-100 w-96 rounded ">
      {dataObject.map(({ title, svg, content }, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-full h-full border-slate-100 text-slate-700 rounded-t-1 group cursor-pointer items-center border-b border-solid p-4 text-left font-semibold flex justify-between hover:bg-blue-200 ${isActive[title]&& "bg-blue-200"}`}
            onClick={() => handleActiveClick(title)}
            key={index}
          >
            <div className="flex items-center justify-between gap-2" key={index}>
              <span>{svg}</span>
              {title}
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${isActive[title] && "-rotate-180"} transition-all duration-300 ease-in-out`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div key={`p${index}`}>
            {content.map(({ name, path }, contentIndex) => (
              <Link
                key={contentIndex}
                id={path}
                data-testid="question-element"
                className={`h-${isActive[title] ? "full" : 0} px-4 ${isActive[title] && "py-4"}
                text-sm leading-normal block overflow-hidden transition-height duration-300 ease-in-out hover:bg-blue-300`}
                to={`${rootPath}${path}`}
              >
                {name}
              </Link>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
