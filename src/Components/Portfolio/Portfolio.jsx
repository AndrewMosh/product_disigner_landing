import { PORTFOLIO } from "../../utils/PORTFOLIO";
import "./portfolio.scss";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__wrapper">
        {PORTFOLIO.map((el) => (
          <>
            <a href="/" className="portfolio__name">
              <div className="portfolio__table">{el.name}</div>
            </a>

            <a href="/" className="portfolio__link">
              <img className="portfolio__img" src={el.img} alt={el.name} />
            </a>
          </>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
