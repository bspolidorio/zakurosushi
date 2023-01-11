import { Link } from "react-router-dom";
import * as S from "./styles";

interface Props {
  open: boolean;
}

const Navigation = ({ open }: Props) => {
  return (
    <S.Menu open={open}>
      <Link to="/">Home</Link>
      <Link to="/cardapio">Cardápio</Link>
    </S.Menu>
  );
};

export default Navigation;
