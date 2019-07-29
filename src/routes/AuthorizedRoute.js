import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

class AuthorizedRoute extends React.Component {
  render() {
    const {
      component: Component,
      currentUser,
      isLoggedIn,
      ...rest
    } = this.props
    return (
      <Route
        {...rest}
        render={props => {
          return isLoggedIn && currentUser ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.getIn(["auth", "user"]),
  isLoggedIn: state.getIn(["auth", "loggedIn"])
})

export default connect(
  mapStateToProps,
  {}
)(AuthorizedRoute)
