const authActions = {
  HAS_SIGNED_IN: "HAS_SIGNED_IN",

  SIGN_IN: "SIGN_IN",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "SIGN_IN_FAILED",

  LOG_OUT: "LOG_OUT",
  LOG_OUT_SUCCESS: "LOG_OUT_SUCCESS",

  LOGOUT: "LOGOUT",

  //LoggedIn
  hasLoggedIn: email => ({
    type: authActions.HAS_SIGNED_IN,
    email
  }),

  //SignIn
  userSignIn: () => ({
    type: authActions.SIGN_IN
  }),

  userSignInSuccess: authUserData => ({
    type: authActions.SIGN_IN_SUCCESS,
    authUserData
  }),

  userSignInFailed: error => ({
    type: authActions.SIGN_IN_FAILED,
    error
  }),

  userLogOut: () => ({
    type: authActions.LOGOUT
  }),

  userLogOutSuccess: () => ({
    type: authActions.LOG_OUT_SUCCESS
  })
}

export default authActions
