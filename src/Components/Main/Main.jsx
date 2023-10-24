import Header from "../Header/Header";
import "./main.scss";
import { useState } from "react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="main">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} setIsOpen={setIsOpen} />
      <div className="main__content">
        <div className="main__title">Product</div>
        <div className="main__subtitle">designer</div>
        <div className="main__year">2023</div>
      </div>
    </main>
  );
};
export default Main;
