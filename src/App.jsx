import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;