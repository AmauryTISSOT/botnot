import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./SideBar";

describe("SideBar", () => {
  test("renders SideBar component with menu items", () => {
    render(
      <Router>
        <SideBar />
      </Router>
    );

    // Verify the existence of menu items
    const menuItems = screen.getAllByRole("listitem");
    expect(menuItems.length).toBe(6);

    // Verify the text content of menu items
    const menuNames = screen.getAllByText(
      /Accueil|Email|Checklist|API|Courrier|A propos/i
    );
    expect(menuNames.length).toBe(6);
  });

  test("navigates to correct path when a menu item is clicked", () => {
    render(
      <Router>
        <SideBar />
      </Router>
    );

    // Click on a menu item
    const menuItem = screen.getByText(/Accueil/i);
    menuItem.click();

    // Verify that the correct path is navigated to
    expect(window.location.pathname).toBe("/");

    // Click on another menu item
    const emailMenuItem = screen.getByText(/Email/i);
    emailMenuItem.click();

    // Verify that the correct path is navigated to
    expect(window.location.pathname).toBe("/outils/emailGenerator");
  });
});
