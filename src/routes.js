import React from "react"
import { Router, Route, Switch } from "react-router-dom"

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
          <Route
            exact
            path="/capabilities"
            component={Capabilities}
          />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/" component={Capabilities} />
          <Route exact path="/login" component={Login} />
          <Route component={Error404} />
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
