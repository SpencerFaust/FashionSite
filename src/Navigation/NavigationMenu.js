import React, { Component } from "react";
import commonStyles from "./NavigationStyles/NavigationStyles";
import Fade from "react-reveal/Fade";
import RoutesMain from "./routing/RoutesMain";
import { connect } from "react-redux";

class NavigationMenu extends Component {
  render() {
    const { isNavMenuOpen } = this.props;
    return (
      <div>
        <Fade left when={isNavMenuOpen}>
          <div style={commonStyles.navigationMenu}>
            <RoutesMain />
          </div>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { navigation } = state || {};
  const { isNavMenuOpen } = navigation || {};
  return { isNavMenuOpen };
};

export default connect(mapStateToProps)(NavigationMenu);
