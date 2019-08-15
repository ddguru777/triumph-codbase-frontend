import { Map } from "immutable"

import { getToken } from "../../helpers/utility"

import authActions from "./actions"

const initState = new Map({
  loggedIn: true,
  user: {}
})

function authReducer(state = initState.merge(getToken()), action) {
  switch (action.type) {
    case authActions.HAS_SIGNED_IN:
      const { email } = action
      return email

    case authActions.SIGN_IN:
      return Object.assign({}, state)

    case authActions.SIGN_IN_SUCCESS:
      return Object.assign({}, state, {
        user: action.authUserData,
        loggedIn: true
      })

    case authActions.SIGN_IN_FAILED:
      return Object.assign({}, state, {
        hasError: true,
        errorMessage: action.error
      })

    case authActions.LOG_OUT:
      return Object.assign({}, state, { user: action.data })

    case authActions.LOGOUT:
      return Object.assign({}, state)

    default:
      return state
  }
}

export default authReducer
