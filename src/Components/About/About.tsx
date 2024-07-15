import Mark from "../../assets/images/Photo.png";
import "./about.scss";
import useFadeInOnScroll from "../Hooks/useFadeInOnScroll";
import { animated } from "react-spring";
const About = () => {
  const fadeIn = useFadeInOnScroll(600);
  return (
    <div className="about">
      <animated.div style={fadeIn} className="about__wrapper">
        <div className="about__text">
          Я продуктовый дизайнер, создающий консистентный, уникальный и
          лаконичный дизайн. Имею успешный опыт работы, как с небольшими
          командами, так и с индивидуальными клиентами. Помогаю предприятиям
          решать проблемы пользователей с помощью минималистичного, чистого
          дизайна и понятных любому разработчику макетов. <br /> <br /> Как
          специалист, я объединяю в себе кластер навыков, которые в совокупности
          помогают исследовать, создавать, проектировать и тестировать наилучшее
          решение для бизнеса, которое в свою очередь приносит бизнесу
          дополнительные дивиденды в виде заветной прибыли
        </div>
        <div className="about__content">
          <div className="about__photo">
            <img className="about__img" src={Mark} alt="Марк" />
          </div>

          <div className="about__text">
            В команде могу взять на себя большой спектр задач, начиная от
            UX-исследований и продуктового анализа, заканчивая контролем
            разработки и последующим собой информации после релиза.
          </div>
        </div>
      </animated.div>
    </div>
  );
};
export default About;
