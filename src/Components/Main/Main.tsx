import React, { useState } from "react";
import Header from "../Header/Header";
import "./main.scss";

const Main: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="main">
            <Header isOpen={isOpen} toggleMenu={toggleMenu} />
            <div className="main__content">
                <div className="main__title">Product</div>
                <div className="main__subtitle">designer</div>
                <div className="main__year">2023</div>
            </div>
        </main>
    );
};

export default Main;
