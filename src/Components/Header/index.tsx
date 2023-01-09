import { useState, useRef } from "react";
import { useOnClickOutside } from "../../Shared/hooks";
import logo from "../../assets/img/logo.png";
import Burger from "../Burger";
import Menu from "../Menu";
import * as S from "./styles";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <S.Header>
      <img src={logo} alt="Zakuro logo" />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </S.Header>
  );
};

export default Header;
