import React, { Component } from 'react';
import Message from './Message.js';

class MessageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        const messages = [];

        for (let i = 0; i < this.props.messages.length; i++){
            messages.push(<Message id={`message#${i}`} key={`message#${i}`} data={this.props.messages[i]} />);
        }

        return (
            <div className='msgcontainer' onClick={this.props.clickEvent}>
                <div className='msgs'>{messages}</div>
            </div>
        );
    }
}

export default MessageContainer;