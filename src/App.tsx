import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Map from "./components/Map";
import logo from "./assets/logo.png";
import menu_1 from "./assets/menu/menu_01.jpeg";
import menu_2 from "./assets/menu/menu_02.jpeg";
import menu_3 from "./assets/menu/menu_03.jpeg";

const App = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-6 h-screen">
        <img className="h-2/4" src={logo} alt="logo" />
        <div className="mousey">
          <div className="scroller" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-32 bg-black">
        <img src={menu_1} alt="" />
        <img src={menu_2} alt="" />
        <img src={menu_3} alt="" />
      </div>
      <footer className="fixed flex justify-center bottom-0 h-32 w-full bg-black">
        <div className="flex justify-between gap-12 items-start max-w-4xl w-full py-3 pt-6 text-white">
          <div className="flex flex-col w-full">
            <span className="flex justify-center font-semibold text-red-500">
              Horário
            </span>
            <span className="flex justify-center text-sm">
              Terça-feira a Domingo 19h00-23h30
            </span>
            <span className="flex justify-center text-sm">
              Segunda-feira Encerrado
            </span>
          </div>
          <div className="flex w-full flex-col items-center">
            <span className="flex justify-center font-semibold text-red-500">
              Faça seu pedido
            </span>
            <div className="flex justify-center gap-3">
              <div className="flex gap-2 items-center">
                <FaPhoneAlt />
                <span className="text-lg">11-91234-5678</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-green-500 text-lg">
                  <FaWhatsapp />
                </span>
                <span className="text-lg">11-92345-6789</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
