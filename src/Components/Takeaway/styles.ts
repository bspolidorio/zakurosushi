import styled from "@emotion/styled";

export const Takeaway = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.color.primaryDark};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: unset;
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 80px 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 60px;
    padding: 60px 15px;
  }
`;

export const title = styled.h2`
  margin: 0;
  font-family: "Philosopher", sans-serif;
  font-size: 42px;
  color: ${({ theme }) => theme.color.primaryHighlight};
  text-align: center;
  letter-spacing: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.div`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const Address = styled.div`
  font-size: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }
`;
