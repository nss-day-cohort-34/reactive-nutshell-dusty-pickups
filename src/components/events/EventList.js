import React, { Component } from "react"; // imports react and component from react
import EventCard from "./EventCard"; // imports EventCard Component from EventCard.js
import EventManager from "../../modules/EventsManager"; // imports the API methods for Events
// import EventAddModal from "./EventAddModal"; // imports the Add Event Modal built using ReactStrap

class EventList extends Component {
  // sets state (object) events to an empty array
  state = {
    events: []
  };

  // fetches all events for the logged in user from session storage. the active user is passed down from ApplicationViews.js. the initial fetch of the data and then changes state
  componentDidMount() {
    // changes state. data is from the API method getAllEvents
    EventManager.getAllEvents(this.props.activeUser()).then(events => {
      this.setState({
        events: events
      });
    });
  }

  // function used to add new event THEN fetch all events (getAllEvents)
  addNewEvent = obj => {
    // POST method function defined in TaskManager.js
    return EventManager.postNewEvent(obj).then(() => {
      // after the function is called state is changed to show the updated list of events
      EventManager.getAllEvents(this.props.activeUser()).then(events => {
        this.setState({
          events: events
        });
      });
    });
  };

  // function used to edit an event using an object and id as the parameters. there will be an edit button on each EventCard where this function will be invoked
  editEvent = (obj, id) => {
    // PUT method function defined in TaskManager.js
    return EventManager.editEvent(obj, id).then(() => {
      // after the getAllEvents function is called. state is changed with the updated events from the API
      EventManager.getAllEvents(this.props.activeUser()).then(events => {
        this.setState({
          events: events
        });
      });
    });
  };

  // delete function used to delete an event using the id. there will be a delete button on each EventCard where this function is invoked.
  deleteEvent = id => {
    // delete method function defined in EventManager.js
    EventManager.deleteEvent(id).then(() => {
      // after the getAllEvents function is called. state is changed with the updated events from the API
      EventManager.getAllEvents(this.props.activeUser()).then(events => {
        this.setState({
          events: events
        });
      });
    });
  };

  // render function
  render() {
    // returns the JSX (HTML for react)
    return (
      <React.Fragment>
        {/* section containing the button for adding a new event */}
        <section className="button__container">
          {/* injects the add event modal */}
          {/* <EventAddModal addNewEvent={this.addNewEvent} {...this.props} /> */}
        </section>
        {/* section containing all of the cards for Events */}
        <div className="cards__container">
          {/* makes a new array containing all of my events. for each event display a task card */}
          {this.state.events.map(event => (
            <EventCard
              key={event.id} // sets key to the id of the event
              event={event} // displays the details of a single event */}
              editEvent={this.editEvent} // passes down the editEvent function that lives in EventList.js to EventCard.js */}
              deleteEvent={this.deleteEvent} // passes down the deleteEvent function in EventList.js to EventCard.js */}
              {...this.props}  // passes props into the EventCard with a spread operator. takes props and "spreads" them into individual elements */}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default EventList; // exports EventList
