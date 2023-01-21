import { screen, render } from "@testing-library/react";

import App from "./app";

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it("should have a greeting as the title", () => {
    render(<App />);

    const text = screen.getByText('Welcome to DarkTheme!')

    expect(text).toBeInTheDocument();
  });
});
