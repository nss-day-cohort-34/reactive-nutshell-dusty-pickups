/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form
} from "reactstrap";

/*
evt IS NOT THE SAME AS EVENT.
evt is used as parameter EVENT is for the data being used
 */

// defines the component EventAddModel (built with ReactStrap). This component uses a modal for the user to add an event
class EventAddModal extends React.Component {
  // constructor function using props from ReactStrap
  constructor(props) {
    super(props); // also from ReactStrap
    this.state = {
      modal: false,
      unmountOnClose: true,
      // put properties here
      eventName: "",
      eventDate: "",
      eventLocation: "",
      loadingStatus: false
    };

    // toggling from ReactStrap
    this.toggle = this.toggle.bind(this);
    // also from ReactStrap
    this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
  }

  // handleFieldChange function that takes an event as a parameter
  handleFieldChange = evt => {
    // stores empty obj in variable called stateToChange
    const stateToChange = {};
    // stateToChange targets the id of the targeted event and sets it equal to the value of the targeted event
    stateToChange[evt.target.id] = evt.target.value;
    // sets the state of stateToChange using the value of the targeted event
    this.setState(stateToChange);
  };

  // function that will construct a new event to add to the API
  constructNewEvent = evt => {
    // stops the event
    evt.preventDefault();
    // if eventName, eventDate, or eventLocation are empty, alert user to fill out all fields
    if (
      this.state.eventName === "" ||
      this.state.eventDate === "" ||
      this.state.eventLocation === ""
    ) {
      window.alert("Please fill out all fields.");
    } else {
      // otherwise set state loadingState to true
      this.setState({ loadingStatus: true });
      // object representing a new event being created using state from the input fields
      const event = {
        eventName: this.state.eventName,
        eventDate: this.state.eventDate,
        eventLocation: this.state.eventLocation,
        userId: this.props.activeUser()
      };
      // take this event object and using props pass through addNewEvent that lives in EventList.js. Then use the toggle function from ReactStrap
      this.props.addNewEvent(event).then(() => this.toggle());
    }
  };

  // Toggle function from ReactStrap
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // function from ReactStrap
  changeUnmountOnClose(e) {
    let value = e.target.value;
    this.setState({ unmountOnClose: JSON.parse(value) });
  }

  // render function. most of this JSX came from ReactStrap
  render() {
    return (
      // div containing the modal. probably needs a class and/or id
      <div>
        {/* form for adding an event button */}
        <Form inline onSubmit={e => e.preventDefault()}>
          {/* wtf is this */}{" "}
          {/* button that makes the modal appear. the button toggles the modal on click */}
          <Button color="primary" onClick={this.toggle}>
            Add New Event
          </Button>
        </Form>
        {/* Modal that contains the input fields for a new event */}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          unmountOnClose={this.state.unmountOnClose}
        >
          <ModalHeader toggle={this.toggle}>New Event</ModalHeader>
          {/* Modal Body */}
          <ModalBody>
            {/* form inputs */}
            <Input
              id="eventName" // must match the key in the JSON file
              type="text" // what type of input field
              onChange={this.handleFieldChange} // calls the handle field event function that lives in EventAddModal.js
              placeholder="Add New Event"
            />
            <Input
              id="eventDate"
              type="date"
              onChange={this.handleFieldChange}
            />
            <Input
              id="eventLocation"
              type="text"
              onChange={this.handleFieldChange}
            />
          </ModalBody>
          <ModalFooter>
            {/* put buttons */}
            <Button color="primary" onClick={this.constructNewTask}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EventAddModal;
