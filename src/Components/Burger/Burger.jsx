import React from "react";
import "./burger.css";
import { SOCIALS } from "../../utils/SOCIALS";
import menu from "../../assets/Burger.svg";
import open from "../../assets/IconButton.svg";
function BurgerMenu({ isOpen, toggleMenu }) {
  return (
    <div className="burger-menu">
      <img
        className="burger-menu__icon"
        onClick={toggleMenu}
        style={{ position: isOpen ? "fixed" : "" }}
        src={isOpen ? open : menu}
        alt="menu"
      />

      {isOpen && (
        <div className="menu">
          <ul className="menu__list">
            {SOCIALS.map((social) => (
              <li key={social}>
                <a className="menu__link" href="/">
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
