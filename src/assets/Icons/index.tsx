import styled from "@emotion/styled";
import { ImLeaf } from "react-icons/im";

export type IconProps = {
  marginLeft?: number;
  fontSize?: number;
  color?: string;
};

export const VeggieIcon = styled(ImLeaf)<IconProps>`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft + "px" : "0px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "14px")};
  color: ${({ color }) => (color ? color : "#7bad56")};
`;
