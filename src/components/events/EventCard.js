// Author: Brantley Jones
// Purpose: Creates a "card" that contains all the info for an event.

import React, { Component } from "react"; // imports React and Component from react
import EventEditModal from "./EventEditModal"; // imports the edit event Modal made with reactstrap from the EventEditModal.js file

class EventCard extends Component {
  // names the component we're using EventCard
  render() {
    // render function
    return (
      // returns the JSX below
      <div className="card">
        {/* div w/ class name card. universal for all cards for styling purposes */}
        <div className="card-content">
          {/* div w/ class name card-content for styling the content of each card */}
          <h3>
            {/* event name is being passed down from props. allows us to render dynamically. */}
            <b>{this.props.event.eventName}</b>
          </h3>
          <p>
            {/* location also being passed down from props */}
            {this.props.event.eventLocation}
          </p>
          <p>
            {/* date being passed down from props.  */}
            {this.props.event.eventDate}
          </p>
          {/* with spread operator, whatever is passed into event card is now being passed to event edit modal including eventobj and edit function */}
          <EventEditModal {...this.props} />{" "}
          <button
            type="button"
            onClick={() => this.props.deleteEvent(this.props.event.id)}
          >
            {/* delete button that invokes the deleteEvent API method */}
            Delete Event
          </button>
        </div>
      </div>
    );
  }
}

export default EventCard;
