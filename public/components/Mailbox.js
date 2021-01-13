import React, { Component } from 'react';

class Mailbox extends Component {

    constructor(props) {
        super(props);
        this.state = {messages: []};
    }

    render(){

        const messages = [];

        for (let i = 0; i < this.state.messages.length; i++){
            messages.push(<Message id={`message#${id}`} key={`message#${id}`} />);
        }

        return (
            <div>
                Messages go here: <br/>
                {messages}
            </div>
        );
    }
}
  
export default Mailbox;