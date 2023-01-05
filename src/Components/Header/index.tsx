import { useState } from "react";
import Burger from "../Burger";
import Menu from "../Menu";
import * as S from "./styles";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <S.Header>
      <S.LogoContainer>ZAKURO SUSHI</S.LogoContainer>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </S.Header>
  );
};

export default Header;
