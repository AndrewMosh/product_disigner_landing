import { EXPERIENCE } from "../../utils/experience";
import "./experience.scss";
const Experience = () => {
  return (
    <div className="experience">
      <div className="experience__wrapper">
        {EXPERIENCE.map((el) => (
          <div className="experience__table">
            <div className="experience__org">{el.org}</div>
            <div className="experience__position">{el.position}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
