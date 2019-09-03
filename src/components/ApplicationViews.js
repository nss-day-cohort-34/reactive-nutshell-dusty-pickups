import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./home/Home";
import NewsCard from "./news/News";
import MessageList from "./messages/MessageList"

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <Home />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          exact
          path="/news"
          render={props => {
            if (this.isAuthenticated()) {
              return <NewsCard />;

              // Remove null and return the component which will show news articles
            }
          }}
        />

        <Route
          path="/friends"
          render={props => {
            return null;
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages"
          render={props => {
            return <MessageList />;
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            return null;
            // Remove null and return the component which will show the user's tasks
          }}
        />
      </React.Fragment>
    );
  }
}
