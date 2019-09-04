import React, { Component } from "react";
// import MessageEditForm from "./MessageEditForm"; //may not need


class MessageCard extends Component {
  render() {
    // const username = this.props.users.find(user => user.id === this.props.message.userId).username
        
// go through the users array and find a user whose id matches the userId and get his username which will be the email
// THIS WILL NOT WORK UNTIL THE USERS COLLECTION IS PASSED AS PROPS TO THE MESSAGE LIST COMPONENT
    return (
      <div className="card">
        <div className="card-content">
          <h3> 
              {/* the props have a message */}
            `${this.props.message.userId}`: <b>{this.props.message.message}</b>
            {/* username would be this.props.users */}
          </h3>
          {/* <MessageEditModal {...this.props} />
          <button
            type="button"
            onClick={() => this.props.editMessage(this.props.task.id)}
          >
            Edit Message
          </button> */}
        </div>
      </div>
    );
  }
}

export default MessageCard;