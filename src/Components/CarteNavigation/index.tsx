import * as S from "./styles";

const CarteNavigation = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    element &&
      element.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <S.Navigation>
      <S.CarteList>
        <div onClick={() => handleSmoothScroll("entradas")}>
          <S.CarteItem>Entradas</S.CarteItem>
        </div>
        <div onClick={() => handleSmoothScroll("pratos-quentes")}>
          <S.CarteItem>Pratos quentes</S.CarteItem>
        </div>
        <div onClick={() => handleSmoothScroll("sashimis")}>
          <S.CarteItem>Sushis</S.CarteItem>
        </div>
        <div onClick={() => handleSmoothScroll("temakis")}>
          <S.CarteItem>Temakis</S.CarteItem>
        </div>
        <div onClick={() => handleSmoothScroll("tamanho-ideal-*")}>
          <S.CarteItem>Combinados</S.CarteItem>
        </div>
        <div onClick={() => handleSmoothScroll("bebidas")}>
          <S.CarteItem>Bebidas</S.CarteItem>
        </div>
        <div onClick={() => handleSmoothScroll("sobremesas")}>
          <S.CarteItem>Sobremesas</S.CarteItem>
        </div>
      </S.CarteList>
    </S.Navigation>
  );
};

export default CarteNavigation;
