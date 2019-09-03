// Allie: MessageList component to make chatbox section
import React, { Component } from 'react'
import './MessageList.css'
//import the components we will need


class MessageList extends Component {
    //define what this component needs to render
    state = {
        messages: [],
    }

    componentDidMount() {
        console.log("MESSAGE LIST: ComponentDidMount");
        //getAll from MessageManager and hang on to that data; put it in state
    }

    render() {

        return (
            <>
                <div className="container-message-cards">
                    {/* cards here */}
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