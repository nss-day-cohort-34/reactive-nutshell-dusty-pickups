/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class TaskAddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            unmountOnClose: true
            // put properties here 
        };

        this.toggle = this.toggle.bind(this);
        this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
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
                    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        {/* put form info */}
                        <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
                    </ModalBody>
                    <ModalFooter>
                        {/* put buttons */}
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default TaskAddModal;
