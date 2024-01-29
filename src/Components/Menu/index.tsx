import { Link } from "react-router-dom";
import * as S from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Navigation = ({ open, setOpen }: Props) => {
  return (
    <S.Menu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        Home
      </Link>
      <a href="https://drive.google.com/file/d/1ox72qaCxWrbIPhAVcz6o1LCHFvcP_jaH/preview" onClick={() => setOpen(!open)}>
        Cardápio
      </a>
    </S.Menu>
  );
};

export default Navigation;
