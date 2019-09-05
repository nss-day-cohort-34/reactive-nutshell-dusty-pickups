// Pourpose: Creats Modal that is able to edit the News Card Inputs
// Author: Michael Stiles
import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from "reactstrap";
import NewsManager from "../../modules/NewsManager";

class NewsEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true,
      // put properties here
      userId: "",
      newsHeader: "",
      newsSynopsis: "",
      newsDate: "",
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
    NewsManager.getTask(this.props.news.id).then(news => {
      this.setState({ newsHeader: news.newsHeader, newsSynopsis: news.newsSynopsis, newsDate: news.newsDate, userId: task.userId });
    });
  }

  updateExistingNews = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedNews = {
      // creates edited task object with the values that we type in inputs
      newsHeader: this.state.taskName,
      newsSynopsis: this.state,
      taskDate: this.state.taskDate,
      userId:  this.state.userId
    };

    this.props
      // invokes edit task function from task list, passes edited object and the id, and then closes modal
      .editedNews(editedNews, this.props.news.id)
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
            Edit Article
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
              value={this.state.newsHeader}
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
            <Button color="primary" onClick={this.updateExistingNews}>
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

export default NewsEditModal;

