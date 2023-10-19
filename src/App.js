import "./App.css";
import Main from "./Components/Main/Main";
import Gap from "./Components/Gap/Gap";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
function App() {
  return (
    <div className="App">
      <Main />
      <Gap props="Я" />
      <About />
      <Gap props="Опыт" />
      <Experience />
    </div>
  );
}

export default App;
