import React from "react"
import { Router, Route, Redirect } from "react-router-dom"

import { connect } from "react-redux"

// Components
import Auth from "./pages/auth"
import Dashboard from "./pages/dashboard"

const RestrictedRoute = ({ component: Component, loginCondition, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loginCondition ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

class PublicRoute extends React.Component {
  componentDidMount() {}

  render() {
    const { history, isLoggedIn } = this.props

    return (
      <Router history={history}>
        <RestrictedRoute
          exact
          path="/home"
          component={Dashboard}
          loginCondition={isLoggedIn}
        />

        <Route exact path="/" component={Auth} />
        <Route exact path="/login" component={Auth} />
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
