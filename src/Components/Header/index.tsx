import { useState, useRef } from "react";
import { useOnClickOutside } from "../../Shared/hooks";
import logo from "../../assets/img/logo.png";
import Burger from "../Burger";
import Menu from "../Menu";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <S.Header>
      <Link to="/">
        <img src={logo} width="200px" alt="Zakuro logo" />
      </Link>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </S.Header>
  );
};

export default Header;
