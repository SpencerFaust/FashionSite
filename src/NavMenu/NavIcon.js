import React from "react";
import Icon from "@material-ui/core/Icon";
import commonStyles from "../CommonStyles";
import { IconButton } from "@material-ui/core";

const NavIcon = buttonFunction => {
  const { buttonFunction: navOpen } = buttonFunction;
  return (
    <div style={commonStyles.navIconPlacement}>
      {console.log(buttonFunction)}
      <IconButton onClick={navOpen}>
        <Icon style={commonStyles.iconSize}>menu</Icon>
      </IconButton>
    </div>
  );
};

export default NavIcon;
