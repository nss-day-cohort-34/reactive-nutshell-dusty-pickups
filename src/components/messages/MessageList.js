// Allie: MessageList component to make chatbox section
import React, { Component } from 'react'
import './MessageList.css'
import MessagesManager from '../../modules/MessagesManager';
import MessageCard from './MessageCard';
//import the components we will need


class MessageList extends Component {
    //define what this component needs to render
    state = {
        messages: [],
        message: "",
        loadingStatus: false
    };

    componentDidMount() {
        console.log("MESSAGE LIST: ComponentDidMount");
        //getAll from MessageManager and hang on to that data; put it in state so it shows in the screen
        MessagesManager.getAllMessages()
            // then for the array of messages
            .then((messages) => {
                this.setState({
                    messages: messages
                })
            })
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }
    // posts a message to json
    constructNewMessage = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const message = {
            // get the user id of active user from session storage by key "active user" and parse from json string to javascript object 
            userId: JSON.parse(sessionStorage.getItem("activeUser")),
            message: this.state.message,
        };
        MessagesManager.postNewMessage(message)
            .then(() => {
                MessagesManager.getAllMessages()
            })
            .then(messages => {
                this.setState({
                    messages: messages
                })
            })
        // then re-render with getAllMessages
    };

    render() {
        return (
            <>
                <div className="container-message-cards" >
                    <h1>Chat with friends</h1>
                    {/* for each message in the messages array assign parameter message to the messageCard property "message" */}
                    {this.state.messages.map(message =>
                        <MessageCard
                            // we give it a key to keep track of which ones are rendering
                            key={message.id}
                            // 1st message is a property (assigned to a message obj) to be used as props.message on message card
                            message={message}
                            // pass down all the props from parent
                            {...this.props}
                        />
                    )}
                </div>
                <div>
                    <form>
                        <fieldset>
                            <div className="message-input">
                                <input
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    id="messageText"
                                    placeholder="Enter message"
                                />
                            </div>
                            <div className="send-message-button">
                                <button
                                    type="button"
                                    disabled={this.state.loadingStatus}
                                    onClick={this.constructNewMessage}
                                >Send</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </>
        )
    }
}

export default MessageList