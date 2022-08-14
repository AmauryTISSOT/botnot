import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App component", () => {
  test("App render correctly", () => {
    const {container} = render(<App/>);
    expect(container).toMatchSnapshot();
  })
})