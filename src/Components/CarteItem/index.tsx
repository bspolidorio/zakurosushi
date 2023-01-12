import { VeggieIcon } from "../../assets/Icons";
import { Dish } from "../../types/common";
import * as S from "./styles";

interface Props {
  dish: Dish;
}

const CarteItem = ({ dish }: Props) => {
  return (
    <S.Item>
      <S.Name>{dish.name}</S.Name>
      {dish.veggie && <VeggieIcon marginLeft={8} />}
      <S.Dots>
        .........................................................................................................................................................................................................................................
      </S.Dots>
      <S.Price>
        {dish.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
        })}
      </S.Price>
      {dish.ingredients && <S.Ingredients>{dish.ingredients}</S.Ingredients>}
    </S.Item>
  );
};

export default CarteItem;
