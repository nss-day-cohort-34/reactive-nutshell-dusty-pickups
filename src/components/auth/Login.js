import React, { Component } from "react"

class Login extends Component {

  // Set initial state
  state = {
    username: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()

    sessionStorage.setItem(
        "credentials",
        JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })
    )
    this.props.history.push("/home");

  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please Login</h3>
            <div className="nutshellForms">
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputEmail">Email address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
            Login
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login