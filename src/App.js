import React, { useState, useEffect } from "react";
import "./App.css";
import NavIcon from "./Navigation/NavIcon";
import NavigationMenu from "./Navigation/NavigationMenu";
import MenuToggle from "./Navigation/MenuToggle";

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
