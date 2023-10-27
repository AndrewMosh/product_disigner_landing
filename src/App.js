import "./App.css";
import Main from "./Components/Main/Main";
import Gap from "./Components/Gap/Gap";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import ContactButton from "./Components/ContactButton/ContactButton";
import Loader from "./Components/Loader/Loader";
import { useState, useEffect } from "react";
function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  useEffect(() => {
    // Simulate loading progress for demonstration purposes
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => prevProgress + 0.02);
    }, 70);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      {loadingProgress < 1 ? (
        <Loader loadingProgress={loadingProgress} />
      ) : (
        // Content to show after loading is complete
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
