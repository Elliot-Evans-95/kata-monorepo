import styled from "styled-components";
import Minefield from "../lib/minefield";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Minefield />
    </StyledApp>
  );
}

export default App;
