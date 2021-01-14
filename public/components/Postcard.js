import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Postcard extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.findSSID = this.findSSID.bind(this);
        this.findCountry = this.findCountry.bind(this);
        this.getDate = this.getDate.bind(this);

        this.state = {recipient: '', message: ''};
    }

    handleChange(event) {
        this.setState({...this.state, message: event.target.value});
    }

    findSSID(){
        console.log(Cookies.get('ssid'));
        return Cookies.get('ssid');
    }

    findCountry(){
        return 'America';
    }

    getDate(){
        let d = new Date();
        let n = d.getDay()
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[n];
    }

    sendMessage(){
        
        const body = {
            sessionID: this.findSSID(),
            message: this.state.message,
            location: this.findCountry(),
            date: this.getDate(),
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

        return (
            <div>
                Write a nice message here:
                <input type="text" value={this.state.message} onChange={this.handleChange} />
                <button onClick={this.sendMessage}>Click to send message</button>
            </div>
        );
    }
}
  
export default Postcard;