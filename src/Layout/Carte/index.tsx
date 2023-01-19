import { useEffect } from "react";
import { VeggieIcon } from "../../assets/Icons";
import CarteBlock from "../../components/CarteBlock";
import CarteNavigation from "../../components/CarteNavigation";
import { dishes } from "../../constants/dishes";
import * as S from "./styles";

const Carte = () => {
  useEffect(() => {
    const body = document.querySelector("#root");

    body &&
      body.scrollIntoView({
        behavior: "smooth",
      });
  }, []);

  return (
    <S.Main>
      <CarteNavigation />
      <S.Container>
        <S.BlockContainer>
          <CarteBlock title="Entradas" dishes={dishes.entradas} />
          <CarteBlock title="Pratos Quentes" dishes={dishes.pratosQuentes} />
          <CarteBlock
            title="Sashimis"
            description="(Fatias de peixe cru)"
            quantity="5 peças"
            dishes={dishes.sashimi}
          />
          <CarteBlock
            title="Niguiris"
            description="(Arroz com cobertura de peixe)"
            quantity="4 peças"
            dishes={dishes.niguiri}
          />
          <CarteBlock
            title="Hossomakis"
            description="(Enrolado de alga com arroz e recheio)"
            quantity="4 peças"
            dishes={dishes.hossomaki}
          />
          <CarteBlock
            title="Jows"
            description="(ou Joe pronuncia-se Djô)"
            quantity="5 peças"
            dishes={dishes.jow}
          />
          <CarteBlock
            title="Uramakis"
            description="(Enrolado de alga invertido com arroz, gergelim e recheio)"
            quantity="5 peças"
            dishes={dishes.uramaki}
          />
          <CarteBlock
            title="Hot Rolls"
            description="(Versão de Hossomaki empanada com cobertura de molho tarê)"
            quantity="5 peças"
            dishes={dishes.hotRoll}
          />
          <CarteBlock
            title="Temakis"
            description="(Cone nori com arroz e recheio)"
            quantity="1 peça"
            dishes={dishes.temaki}
          />
          <CarteBlock
            title="Tamanho Ideal *"
            description=""
            quantity="18 peças"
            dishes={dishes.ti}
          />

          <CarteBlock title="Quando Bate a Fome **" dishes={dishes.qbf} />
          <CarteBlock title="Bebidas" dishes={dishes.bebidas} />
          <CarteBlock title="Sobremesas" dishes={dishes.sobremesas} />
        </S.BlockContainer>
        <S.ObservationsContainer>
          <S.Observation>
            * Acompanham 1 sachê de shoyu, wasabi e hashi
          </S.Observation>
          <S.Observation>
            ** Acompanham 2 sachês de shoyu, wasabi e hashi
          </S.Observation>
          <S.Observation>
            <VeggieIcon /> Peças vegetarianas
          </S.Observation>
        </S.ObservationsContainer>
      </S.Container>
    </S.Main>
  );
};

export default Carte;
