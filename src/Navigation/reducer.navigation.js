const navigation = (state = { isNavMenuOpen: false }, action) => {
  switch (action.type) {
    case "NAV_MENU":
      return action.payload;
    default:
      return state;
  }
};

export default navigation;
