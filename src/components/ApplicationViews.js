import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import NewsCard from "./news/News";

export default class ApplicationViews extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route  exact path="/login" Component={Login} />
        <Route
          exact path="/" render={props => {
            return <Home {...props}/>
          }}
        />

        <Route
          exact path="/news" render={props => {
            if (this.isAuthenticated()) {
              return <NewsCard />
            } else { return <Redirect to="/login" />

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
