import React, { useState } from "react";
import NavigationMenu from "./NavigationMenu";
import NavIcon from "./NavIcon";

const MenuMain = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="App">
      <NavigationMenu open={navOpen} closeMenu={handleNavToggle} />
      <NavIcon buttonFunction={handleNavToggle} />
    </div>
  );
};

export default MenuMain;
