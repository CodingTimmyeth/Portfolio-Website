import React from "react";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Navigation from "./Navigation";

const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowChange = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowChange);

    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);

  const items = [
    "About Me",
    "Skills",
    "Projects",
    "Work Experience",
    "Get In Touch",
  ];

  return (
    <header className="flex justify-between items-center relative">
      <h1 className="font-bold text-xl">Thomas Miguel</h1>
      {windowSize >= 923 ? (
        <Navigation items={items} />
      ) : (
        <Menu items={items} />
      )}
    </header>
  );
};

export default Header;
