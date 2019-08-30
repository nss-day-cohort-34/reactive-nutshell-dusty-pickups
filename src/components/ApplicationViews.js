import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import Home from "./home/Home";

export default class ApplicationViews extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route  exact path="/login" componet={Login} />
        <Route
          exact path="/" render={props => {
            return <Home />
          }}
        />

        <Route
          exact path="/news" render={props => {
            if (this.isAuthenticated()) {
              return <News />
            } else { <Redirect to="/login" />

            // Remove null and return the component which will show news articles
          }
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
