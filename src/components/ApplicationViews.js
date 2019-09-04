import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./home/Home";
import NewsCard from "./news/News";
import MessageList from "./messages/MessageList";
import TaskList from "./tasks/TaskList";
import EventList from "./events/EventList";

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;
  activeUser = () => parseInt(sessionStorage.getItem("activeUser"));

  render() {
    console.log(this.activeUser());
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
              return <NewsCard activeUser={this.activeUser} />;

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
            return <MessageList activeUser={this.activeUser} />;
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            return <TaskList activeUser={this.activeUser} {...props} />;
            // Remove null and return the component which will show the user's tasks
          }}
        />
        <Route
          path="/events"
          render={props => {
            return <EventList activeUser={this.activeUser} {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
