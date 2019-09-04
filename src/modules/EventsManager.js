// Author: Brantley Jones
// Purpose: Contains the API methods used for events

const remoteURL = "http://localhost:5002"; // stores url for JSON server in a variable to be used for each fetch call

/*
  exports all API methods as an object.
  variable name is given to the object when it's imported to another page.
*/

export default {
  getEvent(id) {
    // fetches a single event by the id of the event. then parses to JSON
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json());
  },

  getAllEvents(id) {
    // fetches all events for the loggedin user. then parses to JSON
    return fetch(`${remoteURL}/events?userId=${id}`).then(result =>
      result.json()
    );
  },

  postNewEvent(newEvent) {
    // posts a new event object as a parameter to the API using the POST method
    return fetch(`${remoteURL}/events`, {
      method: "POST", // POST method
      headers: {
        "Content-Type": "application/json" // tells the server that we're sending json data
      },
      body: JSON.stringify(newEvent) // converts to a string
    }).then(data => data.json()); // then parses to JSON
  },

  editEvent(editedEventObj, editedEventId) {
    // uses the PUT method to edit existing data using the edited object and edited id of the object as parameters
    return fetch(`${remoteURL}/events/${editedEventId}`, {
      method: "PUT", // PUT method
      headers: {
        "Content-Type": "application/json" // tells the server that we're sending json data
      },
      body: JSON.stringify(editedEventObj) // converts to a string
    }).then(data => data.json()); // then parses to JSON
  },

  deleteEvent(id) {
    // deletes the event using the id of the event as a parameter
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE" // DELETE method
    }).then(result => result.json()); // parse to JSON
  }
};
