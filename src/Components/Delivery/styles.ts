import styled from "@emotion/styled";

type ContactCardProps = {
  bgColor: "light" | "dark" | "highlight";
};
export const Delivery = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primaryLight};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: initial;
    gap: 0;
  }
`;

export const CarteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 80px 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 15px;
  }
`;

export const title = styled.h2`
  margin: 0;
  font-family: "Philosopher", sans-serif;
  font-size: 28px;
  color: ${({ theme }) => theme.color.primaryDark};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }
`;

export const CarteList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const CarteItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 20%;
  font-family: "Abhaya Libre", serif;
  font-size: 22px;
  color: ${({ theme }) => theme.color.primaryDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 45%;
  }
`;

export const CarteImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

export const CarteButton = styled.button`
  padding: 30px 60px;
  font-family: "Philosopher", sans-serif;
  font-size: 20px;
  letter-spacing: 1.5px;
  background-color: ${({ theme }) => theme.color.primaryHighlight};
  border-radius: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 15px 30px;
  }
`;

export const ContactContainer = styled.div`
  position: relative;
  display: flex;
  height: 200px;
  background-color: ${({ theme }) => theme.color.primaryHighlight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: 400px;
  }
`;

export const ContactCard = styled.div<ContactCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 50%;
  height: 100%;
  padding: 30px 60px;
  font-family: "Philosopher", sans-serif;
  color: ${({ theme, bgColor }) =>
    bgColor === "light" ? theme.color.primaryDark : theme.color.primaryLight};
  text-align: center;
  letter-spacing: 2px;
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === "dark") return theme.color.primaryDark;
    if (bgColor === "light") return theme.color.primaryLight;
    return theme.color.primaryHighlight;
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 15px 20px;
  }
`;

export const ContactImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 130px;
    transform: translate(-50%, -50%) rotate(30deg);
  }
`;

export const ContactTitle = styled.div`
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const ContactNumber = styled.div`
  font-size: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 22px;
  }
`;
