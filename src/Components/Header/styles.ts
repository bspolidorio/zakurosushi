import styled from "@emotion/styled";

export const Header = styled.header`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  height: 120px;
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
