import React, { useState } from "react";
import "./App.css";
import NavIcon from "./Navigation/NavIcon";
import NavigationMenu from "./Navigation/NavigationMenu";

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
