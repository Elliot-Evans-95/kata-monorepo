import styled from "styled-components";

/* eslint-disable-next-line */
export interface DarkThemeProps {}

const StyledDarkTheme = styled.div`
  color: pink;
`;

export function DarkTheme(props: DarkThemeProps) {
  return (
    <StyledDarkTheme>
      <h1>Welcome to DarkTheme!</h1>
    </StyledDarkTheme>
  );
}

export default DarkTheme;
