import logo_light from "../../assets/img/logo_light.png";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Text>Nos siga nas redes sociais</S.Text>
      <S.SocialsContainer>
        <S.SocialLink
          href="https://www.instagram.com/zakurosushisp/"
          className="fa fa-instagram"
          target="_blank"
        />
        <S.SocialLink
          href="https://www.facebook.com/zakurosushisp/"
          className="fa fa-facebook"
          target="_blank"
        />
        <S.SocialLink
          href="https://api.whatsapp.com/send?phone=5511974661227"
          className="fa fa-whatsapp"
          target="_blank"
        />
      </S.SocialsContainer>
      <S.Logo src={logo_light} />
      <S.CopyrightText>2023 © Todos os direitos reservados</S.CopyrightText>
    </S.Footer>
  );
};

export default Footer;
