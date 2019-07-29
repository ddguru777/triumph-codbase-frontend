import React from "react"
import { Router } from "react-router-dom"

import { connect } from "react-redux"

// Routes Components
import AuthorizedRoute from "./routes/AuthorizedRoute"
import UnAuthorizedRoute from "./routes/UnauthorizedRoute"

// Components
import Login from "./pages/login"
import Home from "./pages/home"

class PublicRoute extends React.Component {
  componentDidMount() {}

  render() {
    const { history } = this.props

    return (
      <Router history={history}>
        <AuthorizedRoute exact path="/home" component={Home} />

        <AuthorizedRoute exact path="/" component={Home} />
        <UnAuthorizedRoute exact path="/login" component={Login} />
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  hasLoginStatus: state.getIn(["auth", "loginStatus"]) !== null,
  isLoggedIn: state.getIn(["auth", "isLoggedIn"])
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicRoute)
