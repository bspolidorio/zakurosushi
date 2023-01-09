import logo_light from "../../assets/img/logo_light.png";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Text>Nos siga nas redes sociais</S.Text>
      <S.SocialsContainer>
        <S.SocialLink className="fa fa-instagram" />
        <S.SocialLink className="fa fa-facebook" />
        <S.SocialLink className="fa fa-whatsapp" />
      </S.SocialsContainer>
      <S.Logo src={logo_light} />
      <S.CopyrightText>2023 © Todos os direitos reservados</S.CopyrightText>
    </S.Footer>
  );
};

export default Footer;
