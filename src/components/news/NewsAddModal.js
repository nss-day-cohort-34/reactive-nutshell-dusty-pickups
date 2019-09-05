// Porpose: Creates Modal that adds new news
// Author: Michael Stiles
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
class NewsAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true,
      newsHeader: "",
      newsSynopsis: "",
      newsURL: "",
      newsDate: "",
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
  constructNewNews = evt => {
    evt.preventDefault();
    if (this.state.newsHeader === "" || this.state.newsDate === "" || this.state.newsSynopsis === "") {
      window.alert("Please fill out the form right, idiot head.");
    } else {
      this.setState({ loadingStatus: true });
      const news = {
        newsHeader: this.state.newsHeader,
        newsDate: this.state.newsDate,
        newsSynopsis: this.state.newsSynopsis,
        newsURL: this.state.newsURL,
        userId: this.props.activeUser()
      };
      this.props.addNewNews(news).then(() => this.toggle());
    }
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
            Add New News
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
              id="newsHeader"
              type="text"
              onChange={this.handleFieldChange}
              placeholder="Add New Article"
            />
            <Input
            id="newsSynopsis"
            type="text"
            onChange={this.handleFieldChange}
            placeholder="Add Synopsis"
          />
           <Input
              id="newsURL"
              type="text"
              onChange={this.handleFieldChange}
              value={this.state.newsURL}
              placeholder="Add URL"

            />
            <Input
              id="newsDate"
              type="date"
              onChange={this.handleFieldChange}
            />
          </ModalBody>
          <ModalFooter>
            {/* put buttons */}
            <Button color="primary" onClick={this.constructNewNews}>
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
export default NewsAddModal;