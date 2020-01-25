import React from "react";
import commonStyles from "../CommonStyles";
import { IconButton } from "@material-ui/core";
import MenuToggle from "./menuToggle";

const NavIcon = buttonFunction => {
  const { buttonFunction: navOpen } = buttonFunction;
  return (
    <div style={commonStyles.navIconPlacement}>
      <IconButton onClick={navOpen}>
        <MenuToggle />
      </IconButton>
    </div>
  );
};

export default NavIcon;
