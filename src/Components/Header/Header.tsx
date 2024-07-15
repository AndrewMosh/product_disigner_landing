import React from "react";
import logo from "../../assets/images/Logo.svg";
import { SOCIALS } from "../../utils/socials";
import "./header.scss";
import BurgerMenu from "../Burger/Burger";

interface HeaderProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, toggleMenu }) => {
    return (
        <header className="header">
            <a href="/" className="header__logo">
                Марк <img className="header__img" src={logo} alt="logo" /> Игнатьев
            </a>
            <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            <nav className="header__nav">
                <ul className="header__list">
                    {SOCIALS.map((social) => (
                        <li className="header__item" key={social}>
                            <a className="header__link" href={social}>
                                {social}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
