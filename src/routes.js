import React from "react"
import { Router, Redirect } from "react-router-dom"

import { connect } from "react-redux"

// Routes Components
import AuthorizedRoute from "./routes/AuthorizedRoute"
import UnAuthorizedRoute from "./routes/UnauthorizedRoute"

// Components
import { Login } from "./pages/login"
import { Capabilities } from "./pages/capabilities"
import { Settings } from "./pages/settings"

class PublicRoute extends React.Component {
  componentDidMount() {}

  render() {
    const { history } = this.props

    return (
      <Router history={history}>
        <AuthorizedRoute exact path="/capabilities" component={Capabilities} />
        <AuthorizedRoute exact path="/settings" component={Settings} />

        <AuthorizedRoute exact path="/" component={Capabilities} />
        <UnAuthorizedRoute exact path="/login" component={Login} />
        {/* <Redirect to="/" /> */}
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
