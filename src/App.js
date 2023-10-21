import "./App.css";
import Main from "./Components/Main/Main";
import Gap from "./Components/Gap/Gap";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
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
    </div>
  );
}

export default App;
