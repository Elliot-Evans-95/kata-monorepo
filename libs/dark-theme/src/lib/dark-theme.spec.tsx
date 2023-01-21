import { render } from "@testing-library/react";

import DarkTheme from "./dark-theme";

describe("DarkTheme", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DarkTheme />);

    expect(baseElement).toBeTruthy();
  });
});
