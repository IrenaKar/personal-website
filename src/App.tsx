import React, { useRef } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

import "./app.css";
import Section from "./Components/Section/Section";

const App = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <Home sectionRef={sectionRef} />
      <Section id="technologies" className="min-h-[calc(100vh-68px)]">
        <div ref={sectionRef}>ABC</div>
      </Section>
    </>
  );
};

export default App;
