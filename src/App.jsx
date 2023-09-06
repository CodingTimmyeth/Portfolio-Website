import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import Skills from "./components/skills/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Skills />
    </>
  );
}

export default App;
