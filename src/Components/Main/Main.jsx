import Header from "../Header/Header";
import "./main.scss";
import Smoke from "../Smoke/Smoke";
const Main = () => {
  return (
    <main className="main">
      <Header />
      <div className="main__content">
        <div className="main__title">Product</div>
        <div className="main__subtitle">designer</div>
        <div className="main__year">2023</div>
      </div>
      {/* <Smoke /> */}
    </main>
  );
};
export default Main;
