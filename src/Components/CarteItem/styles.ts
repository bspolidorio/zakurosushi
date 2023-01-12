import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  width: 100%;
  font-family: "Abhaya Libre", serif;
  color: ${({ theme }) => theme.color.primaryDark};
`;

export const Name = styled.span`
  margin-right: 4px;
  font-size: 18px;
  font-weight: bold;
`;

export const Ingredients = styled.span`
  display: block;
  width: 100%;
  padding-right: 60px;
  font-size: 16px;
  ::before {
    content: " - ";
  }
`;

export const Dots = styled.span`
  flex: 1;
  margin: 0 10px;
  letter-spacing: 10px;
  overflow: hidden;
`;

export const Price = styled.span`
  margin-left: auto;
  font-size: 16px;
`;
