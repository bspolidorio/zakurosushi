import { useRef } from "react";
import useOnClickOutside from "../../Shared/hooks";
import * as S from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Navigation = ({ open, setOpen }: Props) => {
  const node = useRef(null);
  useOnClickOutside(node, () => setOpen(false));
  return (
    <S.Menu ref={node} open={open}>
      <a href="/">Home</a>
      <a href="/">Cardápio</a>
      <a href="/">Sobre</a>
    </S.Menu>
  );
};

export default Navigation;
