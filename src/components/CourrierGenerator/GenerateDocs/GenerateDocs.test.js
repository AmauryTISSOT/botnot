import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import GenerateDocs from "./GenerateDocs"




describe('Generatore Docs unit testing', () => { 
    test('should render correctly', () => { 
        render(<GenerateDocs/>)
        const buttonElement = screen.getByRole("button", /générer/i)
        expect(buttonElement).toBeInTheDocument();
     })
 })