import styled from "@emotion/styled";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
  background-color: ${({ theme }) => theme.color.primaryLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 100px;
  }
`;
