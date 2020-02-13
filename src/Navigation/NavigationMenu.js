import React from "react";
import commonStyles from "./NavigationStyles/NavigationStyles";
import Fade from "react-reveal/Fade";
import RoutesMain from "./routing/RoutesMain";

class NavigationMenu extends React.Component {
  render() {
    return (
      <div>
        <Fade left when={this.props.open}>
          <div style={commonStyles.navigationMenu}>
            <RoutesMain />
          </div>
        </Fade>
      </div>
    );
  }
}

export default NavigationMenu;
