import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;

export const CarteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  color: ${({ theme }) => theme.color.primaryHighlight};
`;

export const Title = styled.span`
  font-size: 24px;
`;

export const Description = styled.span`
  margin-bottom: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.primaryHighlight};
`;

export const Quantity = styled.span`
  margin-left: 8px;
  font-size: 18px;

  ::before {
    content: " - ";
  }
`;

export const Divider = styled.div`
  margin-top: 48px;
  border-top: 2px solid ${({ theme }) => theme.color.primaryHighlight};
`;
