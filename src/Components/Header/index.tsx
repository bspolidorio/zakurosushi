import { useState, useRef } from "react";
import { useOnClickOutside } from "../../Shared/hooks";
import Burger from "../Burger";
import Menu from "../Menu";
import * as S from "./styles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <S.Header>
      <S.LogoContainer>ZAKURO SUSHI</S.LogoContainer>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </S.Header>
  );
};

export default Header;
