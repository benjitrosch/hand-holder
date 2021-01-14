import React, { Component } from 'react';
import MessageContainer from './MessageContainer.js';
import LetterIcon from '../assets/mail.svg';

class Mailbox extends Component {

    constructor(props) {
        super(props);

        this.getMessages = this.getMessages.bind(this);
        this.unfetch = this.unfetch.bind(this);

        this.state = {messages: [], fetched: false};
    }

    getMessages(){
        fetch(`/msg/read/?ssid=${this.props.ssid}`)
            .then(res => res.json())
            .then((messages) => {
                if (!Array.isArray(messages)) messages = [];
                console.log(messages);
                return this.setState({messages, fetched: true});
            })
            .catch(err => console.log('getMessages GET /msg/read: ERROR: ', err));
    }

    unfetch(){
        this.setState({messages: [], fetched: false});
    }

    render(){

        const messageComponent = this.state.fetched ? <MessageContainer messages={this.state.messages} clickEvent={this.unfetch} /> : <button><img src={LetterIcon} style={{height:'100px'}} onClick={this.props.clickEvent} /></button>;

        return (
            <div className='mailbox'>{messageComponent}</div>
        );
    }
}
  
export default Mailbox;

/*Messages go here: <br/>
{messages}
For user:
{this.props.ssid}*/