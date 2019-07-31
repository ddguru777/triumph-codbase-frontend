import authActions from "./auth/actions"
import { history } from "./store"
import { client } from "../helpers/apiConfig"
// import { push } from 'react-router-redux';

import { loginAPI } from "../helpers/api"

export function LoginUser(LogInData) {
  return async dispatch => {
    let userData = {
      email: LogInData.email,
      password: LogInData.password
    }

    await loginAPI(userData.email, userData.password).then(
      response => {
        if (response.data.token) {
          // console.log(response.data)

          localStorage.setItem("accessToken", response.data.token)
          localStorage.setItem("loggedIn", true)

          client.defaults.headers.common = {
            Authorization: `Bearer ${response.data.token}`
          }
        }

        dispatch(authActions.userSignInSuccess(response.data.account))
        history.push("/capabilities")
      },
      error => {
        console.log(error)
      }
    )
  }
}
