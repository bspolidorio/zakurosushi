import { Dish } from "../../types/common";
import CarteItem from "../CarteItem";
import * as S from "./styles";

interface Props {
  title: string;
  description?: string;
  quantity?: string;
  dishes: Dish[];
}

const CarteBlock = ({ title, description, quantity, dishes }: Props) => {
  return (
    <S.Container id={title.split(" ").join("-").toLowerCase()}>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        {quantity && <S.Quantity>{quantity}</S.Quantity>}
      </S.TitleContainer>
      {description && <S.Description>{description}</S.Description>}
      <S.CarteList>
        {dishes.map((dish) => (
          <CarteItem dish={dish} />
        ))}
      </S.CarteList>
      <S.Divider />
    </S.Container>
  );
};

export default CarteBlock;
