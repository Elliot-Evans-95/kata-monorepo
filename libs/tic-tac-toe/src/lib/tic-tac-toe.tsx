import styled from "styled-components";

/* eslint-disable-next-line */
export interface TicTacToeProps {}

const StyledTicTacToe = styled.div`
  color: pink;
`;

export function TicTacToe(props: TicTacToeProps) {
  return (
    <StyledTicTacToe>
      <h1>Welcome to TicTacToe!</h1>
    </StyledTicTacToe>
  );
}

export default TicTacToe;
