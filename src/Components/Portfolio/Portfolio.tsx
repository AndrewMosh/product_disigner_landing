import { PORTFOLIO } from "../../utils/PORTFOLIO";
import "./portfolio.scss";
import useFadeInOnScroll from "../Hooks/useFadeInOnScroll";
import { animated } from "react-spring";

const Portfolio = () => {
    const fadeIn = useFadeInOnScroll(4300);
    return (
        <div className="portfolio">
            <animated.div style={fadeIn} className="portfolio__wrapper">
                {PORTFOLIO.map((el) => (
                    <div key={el.name} className="portfolio__container">
                        <a href="/" className="portfolio__name">
                            <div className="portfolio__table">{el.name}</div>
                        </a>
                        <a href="/" className="portfolio__link">
                            <img className="portfolio__img" src={el.img} alt={el.name} />
                        </a>
                    </div>
                ))}
            </animated.div>
        </div>
    );
};
export default Portfolio;
