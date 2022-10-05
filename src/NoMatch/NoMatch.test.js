import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoMatch from "./NoMatch";

describe('NoMatch unit testing', () => {
    test('should render correctly', () => { 
        render(<NoMatch/>)
        const errorElement = screen.getByRole("heading", /error 404/i)
        expect(errorElement).toBeInTheDocument();
     })
})