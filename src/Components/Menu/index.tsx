import { Link } from "react-router-dom";
import * as S from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Navigation = ({ open, setOpen }: Props) => {
  return (
    <S.Menu open={open}>
      <Link to="/zakurosushi" onClick={() => setOpen(!open)}>
        Home
      </Link>
      <Link to="/zakurosushi/cardapio" onClick={() => setOpen(!open)}>
        Cardápio
      </Link>
    </S.Menu>
  );
};

export default Navigation;
