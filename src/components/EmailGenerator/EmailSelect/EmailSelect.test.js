import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailSelect from "./EmailSelect";
import { MemoryRouter } from "react-router-dom";
import emailListData from "../EmailList";

beforeAll(cleanup);

describe("EmailSelect unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <EmailSelect />
      </MemoryRouter>
    );

    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent("Sélectionner un modèle de mail");
  });
});
