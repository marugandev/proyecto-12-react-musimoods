import "./MainLayout.css";

import Header from "../organisms/Header/Header";
import { Outlet } from "react-router-dom";
import ModalPlayer from "../molecules/ModalPlayer/ModalPlayer";
import { useModalPlayer } from "../../contexts/ModalPlayerContext";

const MainLayout = () => {
  const { isOpen } = useModalPlayer();

  return (
    <>
      <Header />
      {isOpen && <ModalPlayer />}
      <main className="main">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default MainLayout;
