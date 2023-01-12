import styled from "@emotion/styled";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
  background-color: ${({ theme }) => theme.color.primaryLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 100px;
    border-top: 2px solid ${({ theme }) => theme.color.primaryHighlight};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  padding: 80px 110px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px 16px;
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

export const ObservationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  gap: 18px;
`;

export const Observation = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.primaryDark};
`;
