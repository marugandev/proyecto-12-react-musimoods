import "./Header.css";

import React, { useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";
import Menu from "../../molecules/Menu/Menu";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="header">
      <Logo />
      <Button
        text={menuVisible ? "Cerrar" : "Menú"}
        className={"button-menu secondary"}
        onClick={() => setMenuVisible(!menuVisible)}
      />
      {menuVisible && (
        <Menu isOpen={menuVisible} closeMenu={() => setMenuVisible(false)} />
      )}
    </header>
  );
};

export default Header;
