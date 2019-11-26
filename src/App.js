import React, { useState, useEffect } from "react";
import "./App.css";
import NavIcon from "../src/NavMenu/NavIcon";
import NavigationMenu from "./NavMenu/NavigationMenu";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    console.log("NAV", navOpen);
    setNavOpen(!navOpen);
  };
  return (
    <div className="App">
      <NavigationMenu open={navOpen} />
      <NavIcon buttonFunction={handleNavToggle} />
    </div>
  );
}

export default App;
