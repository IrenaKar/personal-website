import React, { useRef } from "react";
import Header from "./Components/Header/Header";
import Technologies from "./Components/Technologies/Technologies";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

import "./app.css";

const App = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <Home sectionRef={sectionRef} />
      <Technologies sectionRef={sectionRef} />
      <About />
      <Projects />
    </>
  );
};

export default App;
