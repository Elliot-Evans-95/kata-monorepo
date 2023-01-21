import { render } from "@testing-library/react";

import TicTacToe from "./tic-tac-toe";

describe("TicTacToe", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TicTacToe />);
    expect(baseElement).toBeTruthy();
  });
});
