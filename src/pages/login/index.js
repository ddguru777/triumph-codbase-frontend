import React from "react"
import { Helmet } from "react-helmet"

import SignIn from "../../components/Auth/SignIn"

import classnames from "classnames"
import styles from "./login.module.scss"

class Login extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div
          className={classnames(
            "text-center",
            "animated",
            "fadeInDown",
            styles.middlebox,
            styles.loginscreen
          )}
        >
          <h1 className="logo-name">IN+</h1>
          <SignIn />
        </div>
      </div>
    )
  }
}

export default Login
