const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUsername = (state) => state.auth.user.name;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;
const getRegisterErrors = (state) => state.auth.registerError;
const getLoginErrors = (state) => state.auth.loginError;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getRegisterErrors,
  getLoginErrors,
};

export default authSelectors;
