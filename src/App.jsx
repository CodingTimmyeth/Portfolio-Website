import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import WorkExperience from "./components/experience/WorkExperience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <WorkExperience />
    </>
  );
}

export default App;
