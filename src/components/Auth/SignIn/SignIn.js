import React from "react"
import { connect } from "react-redux"
import { LoginUser } from "../../../services/redux/middleware"

// Styles
import { Button, Form, FormGroup, Input } from "reactstrap"

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    }
    this.submit = this.submit.bind(this)
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    let user = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.signIn(user)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submit}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Username"
              value={this.state.email}
              onChange={this.inputChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.inputChange}
            />
          </FormGroup>
          <Button type="submit" label="SignIn" color="primary">
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  signIn: data => {
    dispatch(LoginUser(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
