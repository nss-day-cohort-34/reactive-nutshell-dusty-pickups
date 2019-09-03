/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class TaskAddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        modal: false,
        unmountOnClose: true,
        taskName: "",
         taskDate: "",
         loadingStatus: false

            // put properties here
        };

        this.toggle = this.toggle.bind(this);
        this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      constructNewTask = evt => {
    evt.preventDefault();
    if (this.state.taskName === "" || this.state.taskDate === "") {
      window.alert("Please fill out the form right, idiot head.");
    } else {
      this.setState({loadingStatus: true});
      const task = {
        taskName:this.state.taskName,
        taskDate:this.state.taskDate
      };
      this.props.addNewTask(task).then(()=> this.toggle())
    }
  }


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
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    {' '}
                    <Button color="primary" onClick={this.toggle}>Add New Task</Button>
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        {/* put form info */}
                        <Input id="taskName" type="text" onChange={this.handleFieldChange} placeholder="Add New Task"/>
                        <Input id="taskDate" type="date" onChange={this.handleFieldChange}/>
                    </ModalBody>
                    <ModalFooter>
                        {/* put buttons */}
                        <Button color="primary" onClick={this.constructNewTask}>Submit</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

// constructNewTask = evt => {
//     evt.preventDefault();
//     if (this.state.taskName === "" || this.state.taskDate === "") {
//       window.alert("Please fill out the form right, idiot head.");
//     } else {
//       this.setState({loadingStatus: true});
//       const task = {
//         taskName:this.state.taskName,
//         taskDate:this.state.taskDate
//       };
//       TaskManager.postNewTask(task).then(() =>
//       this.p
//       )

//     }
//   }

export default TaskAddModal;
