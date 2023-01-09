import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
  background-color: ${({ theme }) => theme.color.primaryLight};
`;
