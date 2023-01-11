import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as S from "./styles";

const Root = () => {
  return (
    <S.Container>
      <Header />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </S.Container>
  );
};

export default Root;
