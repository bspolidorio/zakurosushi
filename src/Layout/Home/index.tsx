import Header from "../../Components/Header";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.Hero />
      </S.Main>
    </S.Container>
  );
};

export default Home;
