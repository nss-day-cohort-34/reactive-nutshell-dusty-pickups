// Author: Allie Purpose: JSX markup of an individual message card. 
import React, { Component } from "react";
import './MessageCard.css'
import MessageEditModal from "./MessageEditModal";


class MessageCard extends Component {
    render() {
        
        return (
            <div className="card">
                <div className="card-content">
                    <h3>
                        {/* the props have a message and we need to get the username and message from that object*/}
                        {this.props.message.user.username}: <b>{this.props.message.message}</b>
                    </h3>
                    {/* used a ternary here to say if the userId equals the activeUser(that function lives on appViews) then allow the edit button/modal to pop up. Otherwise, consolelog the message. The reactstrap modal provides the edit button */}
                    {this.props.message.userId === this.props.activeUser() ?
                        <MessageEditModal {...this.props} /> 
                    : console.log(this.props.message)
                    }
                </div>
            </div>
        );
    }
}

export default MessageCard;