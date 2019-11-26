import React from "react";
import commonStyles from "../CommonStyles";
import Fade from "react-reveal/Fade";

class NavigationMenu extends React.Component {
  render() {
    return (
      <div>
        <Fade left when={this.props.open}>
          <div style={commonStyles.navigationMenu} />
        </Fade>
      </div>
    );
  }
}

export default NavigationMenu;
