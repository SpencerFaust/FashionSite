const navigationStyles = {
  navIconPlacement: {
    position: "absolute",
    float: "left",
    paddingTop: 20,
    paddingLeft: 20
  },
  iconSize: {
    fontSize: 50
  },
  navigationMenu: {
    position: "relative",
    float: "left",
    height: "100vh",
    minWidth: 300,
    width: "33vw",
    backgroundColor: "red"
  },
  menuLinks: {
    display: "flex",
    flex: 1,
    position: "absolute",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  verticalCentering: {
    position: "relative"
  },
  removeLinkStyle: {
    textDecoration: "none"
  }
};

export default navigationStyles;
