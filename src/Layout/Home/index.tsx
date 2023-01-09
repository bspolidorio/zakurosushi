import Delivery from "../../Components/Delivery";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <Hero />
        <Delivery />
      </S.Main>
    </S.Container>
  );
};

export default Home;
