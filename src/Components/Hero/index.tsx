import hero from "../../assets/img/hero.jpeg";
import * as S from "./styles";

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroImage
        src={hero}
        alt="Sushi plate including some djo, nigiri and a lemon slice"
      />
    </S.Hero>
  );
};

export default Hero;
