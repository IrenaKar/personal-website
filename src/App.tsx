import React, { useRef } from "react";
import Header from "./Components/Header/Header";
import Technologies from "./Components/Technologies/Technologies";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

import "./app.css";

const App = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <Home sectionRef={sectionRef} />
      <About sectionRef={sectionRef} />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
