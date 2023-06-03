import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Accordion from "./Accordion";
import "@testing-library/jest-dom";

const dataObject = [
  {
    title: "Section 1",
    svg: <svg data-testid="svg" />,
    content: [
      { name: "Question 1", path: "/question1" },
      { name: "Question 2", path: "/question2" },
    ],
  },
  {
    title: "Section 2",
    svg: <svg data-testid="svg" />,
    content: [
      { name: "Question 3", path: "/question3" },
      { name: "Question 4", path: "/question4" },
    ],
  },
];

describe("Accordion component", () => {
  test("renders the component with data", () => {
    render(
      <Router>
        <Accordion dataObject={dataObject} rootPath="/root" />
      </Router>
    );

    // Assert that the svg is rendered
    const sections = screen.getAllByTestId("svg");
    expect(sections).toHaveLength(dataObject.length);

    //Assert that the accordion-title is rendered
    const accordionTitle = screen.getAllByTestId("accordion-title");
    expect(accordionTitle).toHaveLength(dataObject.length);
  });

  test("toggles section visibility on click", () => {
    render(
      <Router>
        <Accordion dataObject={dataObject} rootPath="/root" />
      </Router>
    );

    const section1 = screen.getByText("Section 1");
    const section2 = screen.getByText("Section 2");
    const question1 = screen.getByText("Question 1");
    const question3 = screen.getByText("Question 3");

    // Assert that section content is initially hidden
    expect(question1).not.toHaveClass("h-full");
    expect(question3).not.toHaveClass("h-full");

    // Click on section 1 to toggle visibility
    fireEvent.click(section1);
    expect(question1).toHaveClass("h-full");

    // Click on section 2 to toggle visibility
    fireEvent.click(section2);
    expect(question1).toHaveClass("h-full");
    expect(question3).toHaveClass("h-full");

    // Click on section 1 again to toggle visibility
    fireEvent.click(section1);
    expect(question1).not.toHaveClass("h-full");
    expect(question3).toHaveClass("h-full");
  });
});
