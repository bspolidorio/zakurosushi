import * as S from "./styles";

interface Props {
  open: boolean;
}

const Navigation = ({ open }: Props) => {
  return (
    <S.Menu open={open}>
      <a href="/">Home</a>
      <a href="/">Cardápio</a>
      <a href="/">Sobre</a>
    </S.Menu>
  );
};

export default Navigation;
