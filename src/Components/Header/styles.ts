import styled from "@emotion/styled";

export const Header = styled.header`
  position: relative;
  flex: 0 0 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 30px 0;
  color: ${({ theme }) => theme.color.primaryDark};
  background-color: ${({ theme }) => theme.color.primaryLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-end;
  }
`;
