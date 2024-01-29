import Hero from "../../components/Hero";
import Delivery from "../../components/Delivery";
import Takeaway from "../../components/Takeaway";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Main>
      <Hero />
      <Delivery />
      <Takeaway />
    </S.Main>
  );
};

export default Home;
