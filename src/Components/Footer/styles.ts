import styled from "@emotion/styled";

export const Footer = styled.footer`
  position: relative;
  flex: 0 1 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 40px 60px;
  color: ${({ theme }) => theme.color.primaryLight};
  background-color: ${({ theme }) => theme.color.primaryHighlight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 350px;
    padding: 40px 15px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  letter-spacing: 3px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const SocialLink = styled.a`
  width: 60px;
  height: 60px;
  padding: 10px;
  font-size: 40px;
  text-align: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.primaryHighlight};
  background-color: ${({ theme }) => theme.color.primaryLight};
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    opacity: 0.9;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translateY(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: unset;
    bottom: 10px;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

export const CopyrightText = styled.div`
  align-self: flex-end;
  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-self: initial;
  }
`;
