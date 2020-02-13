import React, { Component } from "react";
import NavigationMenu from "./NavigationMenu";
import NavIcon from "./NavIcon";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MenuMain extends Component {
  handleNavToggle = () => {
    const { dispatch, isNavMenuOpen } = this.props;
    dispatch({
      type: "NAV_MENU",
      payload: { isNavMenuOpen: !isNavMenuOpen }
    });
  };

  render() {
    return (
      <div className="App">
        <NavigationMenu />
        <NavIcon buttonFunction={this.handleNavToggle} />
      </div>
    );
  }
}

MenuMain.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  const { navigation } = state || {};
  const { isNavMenuOpen } = navigation || {};
  return { isNavMenuOpen };
};

export default connect(mapStateToProps)(MenuMain);
