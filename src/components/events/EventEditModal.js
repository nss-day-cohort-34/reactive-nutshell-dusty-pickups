// Author: Brantley Jones
// Purpose: Creates a modal using ReactStrap for editing an event.

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
import EventManager from "../../modules/EventsManager";

// defines EventEditModal Component. Most from ReactStrap, refactored for what is needed to edit events
class EventEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true,
      // put properties here
      userId: "",
      eventName: "",
      eventDate: "",
      eventLocation: "",
      loadingStatus: false
    };

    // toggle from reactstrap
    this.toggle = this.toggle.bind(this);
    // does this remove the modal from the screen when finished??? what does this do?
    this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
  }

  // handleFieldChange function that takes an event as a parameter.
  // whatever is typed in the inputs changes state
  handleFieldChange = evt => {
    // stores empty obj in variable called stateToChange
    const stateToChange = {};
    // stateToChange targets the id of the targeted event and sets it equal to the value of the targeted event
    stateToChange[evt.target.id] = evt.target.value;
    // sets the state of stateToChange using the value of the targeted event
    this.setState(stateToChange);
  };

  // function that takes the id of an event (from an API method) and changes the state of the event
  componentDidMount() {
    // getEvent fetch. fetches a single event to be edited
    EventManager.getEvent(this.props.event.id).then(event => {
      this.setState({
        // changing state of the event object from the getEvent
        eventName: event.eventName,
        eventDate: event.eventDate,
        eventLocation: event.eventLocation,
        userId: event.userId
      });
    });
  }

  // function that updates an existing event
  updateExistingEvent = evt => {
    evt.preventDefault(); // stops evt?
    this.setState({ loadingStatus: true });
    const editedEvent = {
      // creates edited event object with the values that we type in inputs
      eventName: this.state.eventName,
      eventDate: this.state.eventDate,
      eventLocation: this.state.eventLocation,
      userId: this.state.userId
    };

    this.props
      // invokes editEvent function from EvenList.js, passes edited object and the id, and then closes modal
      .editEvent(editedEvent, this.props.event.id)
      .then(() => this.toggle());
  };

  // toggle function that opens/closes modal from ReactStrap
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // not sure what this does? from ReactStrap
  changeUnmountOnClose(e) {
    let value = e.target.value;
    this.setState({ unmountOnClose: JSON.parse(value) });
  }

  // render function. most JSX came from ReactStrap
  render() {
    return (
      // div containing the modal. probably needs a class and/or id
      <div>
        {/* form for adding an event button */}
        <Form inline onSubmit={e => e.preventDefault()}>
          {" "}
          {/* button that makes the modal appear. the button toggles the modal on click */}
          <Button color="primary" onClick={this.toggle}>
            Edit Event
          </Button>
        </Form>
        {/* Modal that contains the input fields to edit event */}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          unmountOnClose={this.state.unmountOnClose}
        >
          <ModalHeader toggle={this.toggle}>Edit Event</ModalHeader>
          {/* Modal Body */}
          <ModalBody>
            {/* input fields */}
            <Input
              id="eventName" // has to match json
              type="text"
              onChange={this.handleFieldChange}
              value={this.state.eventName}
            />
            <Input
              id="eventDate"
              type="date"
              onChange={this.handleFieldChange}
              value={this.state.eventDate}
            />
            <Input
              id="eventLocation"
              type="text"
              onChange={this.handleFieldChange}
              value={this.state.eventLocation}
            />
          </ModalBody>
          <ModalFooter>
            {/* put buttons */}
            <Button color="primary" onClick={this.updateExistingEvent}>
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

export default EventEditModal;
