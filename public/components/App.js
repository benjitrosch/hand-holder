import React, { Component } from 'react';
import User from './User.js';

class App extends Component {
    constructor(props) {
      super(props);
      this.connect = this.connect.bind(this);
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
            <User ref={this.user} clickEvent={this.connect}/>
        );
    }
}

export default App;