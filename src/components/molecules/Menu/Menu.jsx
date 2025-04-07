import "./Menu.css";

import React, { useEffect } from "react";

import { routesMenu } from "../../../routes/routesMenu";
import { NavLink } from "react-router-dom";

const Menu = ({ isOpen, closeMenu }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <section className={`menu ${isOpen ? "open page-enter-animation" : null}`}>
      <nav className="menu-nav">
        <ul className="menu-list">
          {routesMenu.map((r) => (
            <li className="menu-item" key={r.id}>
              <NavLink className="menu-link" to={r.path} onClick={closeMenu}>
                {r.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
