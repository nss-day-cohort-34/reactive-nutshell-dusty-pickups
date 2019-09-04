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
import TaskManager from "../../modules/TaskManager";

class TaskEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true,
      // put properties here
      userId: "",
      taskName: "",
      taskDate: "",
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
    TaskManager.getTask(this.props.task.id).then(task => {
      this.setState({
        taskName: task.taskName,
        taskDate: task.taskDate,
        userId: task.userId
      });
    });
  }

  updateExistingTask = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedTask = {
      // creates edited task object with the values that we type in inputs
      taskName: this.state.taskName,
      taskDate: this.state.taskDate,
      userId: this.state.userId
    };

    this.props
      // invokes edit task function from task list, passes edited object and the id, and then closes modal
      .editTask(editedTask, this.props.task.id)
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
  // put functionality here  example:handle field change
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
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            {/* put form info */}
            <Input
              id="taskName"
              type="text"
              onChange={this.handleFieldChange}
              value={this.state.taskName}
            />
            <Input
              id="taskDate"
              type="date"
              onChange={this.handleFieldChange}
              value={this.state.taskDate}
            />
          </ModalBody>
          <ModalFooter>
            {/* put buttons */}
            <Button color="primary" onClick={this.updateExistingTask}>
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

export default TaskEditModal;
