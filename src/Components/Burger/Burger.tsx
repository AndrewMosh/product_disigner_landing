import React from "react";
import "./burger.css";
import { SOCIALS } from "../../utils/socials";
import menu from "../../assets/images/Burger.svg";
import open from "../../assets/images/IconButton.svg";

interface Props {
    isOpen: boolean;
    toggleMenu: () => void;
}

const BurgerMenu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
    const style: React.CSSProperties = {
        position: isOpen ? "fixed" : undefined,
    };

    return (
        <div className="burger-menu">
            <img className="burger-menu__icon" onClick={toggleMenu} style={style} src={isOpen ? open : menu} alt="menu" />

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
};

export default BurgerMenu;
