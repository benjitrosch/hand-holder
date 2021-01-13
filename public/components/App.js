import React, { Component } from 'react';
import User from './User.js';
import Mailbox from './Mailbox.js';
import Hand from './Hand.js';

class App extends Component {
    constructor(props) {
      super(props);

      this.connect = this.connect.bind(this);
      this.hold = this.hold.bind(this);
      this.release = this.release.bind(this);
      this.sendMessage = this.sendMessage.bind(this);

      this.user = React.createRef();
      this.state = {};
    }

    connect(){
        console.log(this.state.socket.id);
        this.user.current.updateID(this.state.socket.id);
    }

    componentDidMount(){
        const socket = io.connect();
        this.setState({socket: socket});
    }

    hold(){
        console.log(`lets hold hands, user ${this.state.socket.id}!`);
    }

    release(){
        console.log(`aw ok bye`);
    }

    sendMessage(){

        const body = {
            sessionID,
            message,
            location,
            date,
          };

        fetch('/msg/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(body)
            })
            .then(resp => resp.json())
            .then(data => {
              console.log(data);
            })
            .catch(err => console.log('newMessage fetch /msg/send: ERROR: ', err));
    }

    render(){
        return(
            <div>
                <User ref={this.user} clickEvent={this.connect}/>
                <Mailbox />
                <Hand clickEvent={this.hold} releaseEvent={this.release} />
            </div>
        );
    }
}

export default App;