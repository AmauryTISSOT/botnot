import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailDisplay from "./EmailDisplay";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router";

// const mockData = {
//   test: {
//     input: [
//       {
//         type: "text",
//         id: "test1",
//         label: "testing label-1",
//         placeholder: "0,00 €",
//       },
//       {
//         type: "radio",
//         id: "test2",
//         label: "testing label-2",
//         valueObj: [
//           {
//             subLabel: "oui",
//             value: "yes",
//           },
//           {
//             subLabel: "non",
//             value: "no",
//           },
//         ],
//       },
//       {
//         type: "select",
//         id: "test3",
//         label: "testing label-3",
//         value: ["option one", "option two"],
//       },
//     ],
//     mailString:
//       "This is a test. The variable 1 is {{test1}}. The variable 2 is {{test2}}. The variable 3 is {{test3}} ",
//   },
// };

describe("EmailDisplay unit testing", () => {
  test("should render correctly", () => {

    render(
      <MemoryRouter initialEntries={[]}>
        <Routes>
          <Route path="emailGenerator/:emailID">
            <EmailDisplay/>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const textInputElement = screen.getByTestId("test-test1");
    expect(textInputElement).toBeInTheDocument();

    const placeholderElement = screen.getByPlaceholderText("0,00 €");
    expect(placeholderElement).toBeInTheDocument();

    const radioInputElement = screen.getByTestId("test-test2-oui");
    expect(radioInputElement).toBeInTheDocument();

    const selectInputElement = screen.getByTestId("test-test3-option one");
    expect(selectInputElement).toBeInTheDocument();
  });

  test.skip("input should work correctly", () => {
    render(<EmailDisplay/>)
    

    const textInputElement = screen.getByPlaceholderText("0,00 €");
    fireEvent.change(textInputElement, { target: { value: "10000" } });
    expect(textInputElement.value).toBe("10000");

    const radioInputElement = screen.getByTestId("test-test2-oui");
    fireEvent.click(radioInputElement);
    expect(radioInputElement).toBeChecked();

    const selectInputElement = screen.getByTestId("test-test3");
    userEvent.selectOptions(selectInputElement, "option one");
    expect(screen.getByTestId("test-test3-option one").selected).toBe(true);

    const copyEmailElement = screen.getByText(
      "This is a test. The variable 1 is 10000. The variable 2 is yes. The variable 3 is option one"
    );
    expect(copyEmailElement).toBeInTheDocument();
  });
});
