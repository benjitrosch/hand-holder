import React, { Component }  from 'react';
import publicIp from "public-ip";

class Postcard extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.findSSID = this.findSSID.bind(this);
        this.findCountry = this.findCountry.bind(this);
        this.getDate = this.getDate.bind(this);

        this.state = {recipient: '', country: '', message: ''};
    }

    handleChange(event) {
        this.setState({...this.state, message: event.target.value});
    }

    findSSID(ssid){
        console.log(`partners ssid is ${ssid}`);
        this.setState({...this.state, recipient: ssid});
    }

    findCountry(){
        fetch('https://extreme-ip-lookup.com/json/')
            .then(res => res.json())
            .then(data => this.setState({...this.state, country: data.country}))
            .catch(err => console.log('Request failed:', err));
    }

    getDate(){
        let d = new Date();
        let n = d.getDay()
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[n];
    }

    sendMessage(){

        const body = {
            sessionID: this.state.recipient,
            message: this.state.message,
            location: this.state.country,
            date: this.getDate(),
          };

        fetch('/msg/send', {method: 'POST', headers: {'Content-Type': 'Application/JSON'}, body: JSON.stringify(body)})
            .then(resp => resp.json())
            .catch(err => console.log('newMessage fetch /msg/send: ERROR: ', err));

        // this.props.resetParent();
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