import logo_light from "../../assets/img/logo_light.png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import whatsapp from "../../assets/img/whatsapp.png";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Text>Nos siga nas redes sociais</S.Text>
      <S.SocialsContainer>
        <S.SocialLink>
          <img src={instagram} alt="Instagram logo" />
        </S.SocialLink>
        <S.SocialLink>
          <img src={facebook} alt="Facebook logo" />
        </S.SocialLink>
        <S.SocialLink>
          <img src={whatsapp} alt="WhatsApp logo" />
        </S.SocialLink>
      </S.SocialsContainer>
      <S.Logo src={logo_light} />
      <S.CopyrightText>2023 © Todos os direitos reservados</S.CopyrightText>
    </S.Footer>
  );
};

export default Footer;
