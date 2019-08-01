import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

class UnauthorizedRoute extends React.Component {
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
          return !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
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
)(UnauthorizedRoute)
