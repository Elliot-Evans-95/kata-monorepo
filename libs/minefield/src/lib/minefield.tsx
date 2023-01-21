import styled from "styled-components";

/* eslint-disable-next-line */
export interface MinefieldProps {}

const StyledMinefield = styled.div`
  color: pink;
`;

export function Minefield(props: MinefieldProps) {
  return (
    <StyledMinefield>
      <h1>Welcome to Minefield!</h1>
    </StyledMinefield>
  );
}

export default Minefield;
