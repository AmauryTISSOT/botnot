import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import CustomerQuizSummary from "../components/CustomerQuiz/CustomerQuizSummary"
import user from "@testing-library/user-event";


describe("CustomerQuizSummary test", ()=> {
    test("Data length should be 38", () => {
        render(<CustomerQuizSummary/>)
        const dataElement = screen.getByText(38);
        expect(dataElement).toBeInTheDocument();
    })
})