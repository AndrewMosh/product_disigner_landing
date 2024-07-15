import { EXPERIENCE } from "../../utils/experience";
import "./experience.scss";
import useFadeInOnScroll from "../Hooks/useFadeInOnScroll";
import { animated } from "react-spring";
const Experience = () => {
    const fadeIn = useFadeInOnScroll(1900);
    return (
        <div className="experience">
            <animated.div style={fadeIn} className="experience__wrapper">
                {EXPERIENCE.map((el) => (
                    <div key={el.org} className="experience__table">
                        <div className="experience__org">{el.org}</div>
                        <div className="experience__position">{el.position}</div>
                    </div>
                ))}
            </animated.div>
        </div>
    );
};
export default Experience;
