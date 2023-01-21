import styled from "styled-components";
import TicTacToe from "../lib/tic-tac-toe";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <TicTacToe />
    </StyledApp>
  );
}

export default App;
