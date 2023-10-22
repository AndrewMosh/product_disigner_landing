import "./App.css";
import Main from "./Components/Main/Main";
import Gap from "./Components/Gap/Gap";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import ContactButton from "./Components/ContactButton/ContactButton";
function App() {
  return (
    <div className="App">
      <Main />
      <Gap props="Я" />
      <About />
      <Gap props="Опыт" />
      <Experience />
      <Gap props="Навыки" />
      <Skills />
      <Gap props="Портфолио" />
      <Portfolio />
      <Gap props="Footer" />
      <ContactButton />
    </div>
  );
}

export default App;
