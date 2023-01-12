import styled from "@emotion/styled";

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 110px;
  background-color: ${({ theme }) => theme.color.primaryHighlight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const CarteList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;

export const CarteItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;
