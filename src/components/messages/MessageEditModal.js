// Author: Allie Purpose: The modal for edit messages
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
import MessagesManager from "../../modules/MessagesManager";

class MessageEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true,
      // put properties here
      userId: "",
      message: "",
      loadingStatus: false
    };

    this.toggle = this.toggle.bind(this);
    this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
  }

  handleFieldChange = evt => {
    // whatever we put in the inputs changes the state
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    MessagesManager.getMessage(this.props.message.id).then(message => {
      this.setState({
        message: message.message,
        userId: message.userId
      });
    });
  };

  updateExistingMessage = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedMessage = {
      // creates edited message object with the values that we type in inputs
      message: this.state.message,
      userId: this.state.userId
    };
    // invokes edit task function from task list, passes edited object and the id, and then closes modal
    this.props
      .editMessage(editedMessage, this.props.message.id)
      .then(() => this.toggle());
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeUnmountOnClose(e) {
    let value = e.target.value;
    this.setState({ unmountOnClose: JSON.parse(value) });
  }
  
  render() {
    return (
      <div>
        <Form inline onSubmit={e => e.preventDefault()}>
          {" "}
          <Button color="primary" onClick={this.toggle}>
            Edit Task
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          unmountOnClose={this.state.unmountOnClose}
        >
          <ModalHeader toggle={this.toggle}>Edit your message here</ModalHeader>
          <ModalBody>
            {/* put form info */}
            <Input
              id="message"
              type="text"
              onChange={this.handleFieldChange}
              value={this.state.message}
            />
          </ModalBody>
          <ModalFooter>
            {/* put buttons */}
            <Button color="primary" onClick={this.updateExistingMessage}>
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

export default MessageEditModal;
