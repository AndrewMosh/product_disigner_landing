import React from "react";
import "./burger.css";
import { socials } from "../../utils/socials";
function BurgerMenu({ isOpen, toggleMenu }) {
  return (
    <div className="burger-menu">
      <div
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="menu">
          <ul className="menu__list">
            {socials.map((social) => (
              <li key={social}>
                <a href="/">{social}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
