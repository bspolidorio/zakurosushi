import { Link } from "react-router-dom";
import hashi from "../../assets/img/hashi_sushi.png";
import sushis from "../../assets/img/sushis.jpeg";
import sashimis from "../../assets/img/sashimis.jpeg";
import temakis from "../../assets/img/temakis.jpeg";
import hotrolls from "../../assets/img/hotrolls.jpeg";
import pratos_quentes from "../../assets/img/pratos_quentes.jpeg";
import * as S from "./styles";

const Delivery = () => {
  return (
    <S.Delivery>
      <S.CarteContainer>
        <S.title>Temos variados pratos da culinária japonesa</S.title>
        <S.CarteList>
          <S.CarteItem>
            <S.CarteImage src={sushis} />
            Sushis
          </S.CarteItem>
          <S.CarteItem>
            <S.CarteImage src={sashimis} />
            Sashimis
          </S.CarteItem>
          <S.CarteItem>
            <S.CarteImage src={temakis} />
            Temakis
          </S.CarteItem>
          <S.CarteItem>
            <S.CarteImage src={hotrolls} />
            Hot rolls
          </S.CarteItem>
          <S.CarteItem>
            <S.CarteImage src={pratos_quentes} />
            Pratos quentes
          </S.CarteItem>
        </S.CarteList>
        <a href="https://drive.google.com/file/d/1ox72qaCxWrbIPhAVcz6o1LCHFvcP_jaH/preview">
          <S.CarteButton>Conheça nosso cardápio completo</S.CarteButton>
        </a>
      </S.CarteContainer>
      <S.ContactContainer>
        <S.ContactImage src={hashi} />
        <S.ContactCard bgColor="dark">
          <S.ContactTitle>Faça seu pedido online</S.ContactTitle>
          <a
            href="https://instadelivery.com.br/zakurosushi"
            target="_blank"
            rel="noreferrer"
          >
            <S.CarteButton> Clique aqui</S.CarteButton>
          </a>
        </S.ContactCard>
        <S.ContactCard bgColor="highlight">
          <S.ContactTitle> ou por telefone</S.ContactTitle>
          <S.ContactNumber> (11) 98914-0372</S.ContactNumber>
          <S.ContactTitle>e também WhatsApp</S.ContactTitle>
          <S.ContactNumber> (11) 98914-0372</S.ContactNumber>
        </S.ContactCard>
      </S.ContactContainer>
    </S.Delivery>
  );
};

export default Delivery;
