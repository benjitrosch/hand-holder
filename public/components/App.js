import React, { Component } from 'react';
import User from './User.js';
import Mailbox from './Mailbox.js';
import Postcard from './Postcard.js';
import Hand from './Hand.js';
import Navbar from './Navbar.js';

let socket;

class App extends Component {
    constructor(props) {
        super(props);

        this.connect = this.connect.bind(this);
        this.hold = this.hold.bind(this);
        this.release = this.release.bind(this);
        this.exit = this.exit.bind(this);
        this.getSSID = this.getSSID.bind(this);

        this.user = React.createRef();
        this.postcard = React.createRef();
        this.mailbox = React.createRef();

        socket = io.connect();

        socket.on('success', (data) => {
            console.log(data)
            this.setState({...this.state, pair: data, searching: false, connected: true});

            let partner = this.state.pair.findIndex(partner => partner.name !== this.state.socket.id);
            this.postcard.current.findSSID(this.state.pair[partner].ssid);
            this.postcard.current.findCountry();
        });

        socket.on('sentSSID', (data) => {
            console.log(data)
            this.setState({...this.state, ssid: data});
            this.mailbox.current.getMessages();
        });

        this.state = {pair: [], searching: false, connected: false, socket: socket, ssid: ''};
    }

    connect(){
        console.log(this.state.socket.id);
        this.user.current.updateID(this.state.socket.id);
    }

    hold(){
        console.log(`lets hold hands, user ${this.state.socket.id}!`);
        socket.emit('joinroom', this.state.socket.id);
        this.setState({...this.state, searching: true});
    }

    getSSID(){
        socket.emit('getSSID');
    }

    release(){

        if (this.connected)
            return;

        console.log(`aw ok bye`);
        socket.emit('leaveroom', this.state.socket.id);
        this.setState({...this.state, pair: [], searching: false, connected: false});
    }

    exit(){
        console.log(`aw ok bye but thanks for the kind messages!`);
        socket.emit('leaveroom', this.state.socket.id);
        this.setState({...this.state, pair: [], connected: false});
    }

    render(){

        const component = this.state.connected ? <Postcard ref={this.postcard} resetParent={this.exit} /> : <Hand clickEvent={this.hold} releaseEvent={this.release} searching={this.state.searching} />;

        return(
            <div className='container'>
                {/*<Navbar />*/}
                {/* <User ref={this.user} clickEvent={this.connect}/> */}
                {component}
                <Mailbox ref={this.mailbox} ssid={this.state.ssid} clickEvent={this.getSSID} />
            </div>
        );
    }
}

export default App;