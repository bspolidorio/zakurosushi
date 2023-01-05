import * as S from "./styles";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Burger = ({ open, setOpen }: Props) => {
  return (
    <S.Burger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </S.Burger>
  );
};

export default Burger;
