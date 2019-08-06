import React from "react"
import { Router, Route, Redirect, Switch } from "react-router-dom"

import { connect } from "react-redux"

// Routes Components
import AuthorizedRoute from "./routes/AuthorizedRoute"
import UnAuthorizedRoute from "./routes/UnauthorizedRoute"

// Pages
import { Login } from "./pages/login"
import { Capabilities } from "./pages/capabilities"
import { Settings } from "./pages/settings"
import { Error404 } from "./pages/error/error404"

class PublicRoute extends React.Component {
  componentDidMount() {}

  render() {
    const { history } = this.props

    return (
      <Router history={history}>
        <Switch>
          <AuthorizedRoute
            exact
            path="/capabilities"
            component={Capabilities}
          />
          <AuthorizedRoute exact path="/settings" component={Settings} />

          <AuthorizedRoute exact path="/" component={Capabilities} />
          <UnAuthorizedRoute exact path="/login" component={Login} />
          <Route component={Error404} />
          {/* <Redirect to="/" /> */}
        </Switch>
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
