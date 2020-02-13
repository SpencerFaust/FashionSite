import React from "react";
import navigationStyles from "./NavigationStyles/NavigationStyles";

import { IconButton } from "@material-ui/core";
import MenuToggle from "./menuToggle";

const NavIcon = buttonFunction => {
  const { buttonFunction: navOpen } = buttonFunction;
  return (
    <div style={navigationStyles.navIconPlacement}>
      <IconButton onClick={navOpen}>
        <MenuToggle />
      </IconButton>
    </div>
  );
};

export default NavIcon;
