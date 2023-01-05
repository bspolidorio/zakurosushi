import styled from "@emotion/styled";

export const Header = styled.header`
  position: relative;
  display: flex;
  height: 90px;
  width: 100%;
  color: ${({ theme }) => theme.color.primaryDark};
  background-color: ${({ theme }) => theme.color.primaryLight};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
