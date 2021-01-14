import React, { Component } from 'react';
import User from './User.js';
import Mailbox from './Mailbox.js';
import Postcard from './Postcard.js';
import Hand from './Hand.js';

// import '../scss/styles.scss';

let socket;

class App extends Component {
    constructor(props) {
        super(props);

        this.connect = this.connect.bind(this);
        this.hold = this.hold.bind(this);
        this.release = this.release.bind(this);

        socket = io.connect();
        socket.on('success', (data) => {
            console.log(data)
            this.setState({...this.state, pair: data, connected: true});
        });

        this.user = React.createRef();
        this.postcard = React.createRef();

        this.state = {pair: [], connected: false, socket: socket};
    }

    connect(){
        console.log(this.state.socket.id);
        this.user.current.updateID(this.state.socket.id);
    }

    hold(){
        console.log(`lets hold hands, user ${this.state.socket.id}!`);
        socket.emit('joinroom', this.state.socket.id);
    }

    release(){

        if (this.state.pair.length == 2)
            return;

        //console.log(`aw ok bye`);
        //socket.emit('leaveroom', this.state.socket.id);
        //this.setState({...state, pair: [], connected: false});
    }

    render(){

        const postcard = this.state.connected ? <Postcard ref={this.postcard} /> : <div>no postcard</div>;

        return(
            <div>
                <User ref={this.user} clickEvent={this.connect}/>
                <Mailbox />
                {postcard}
                <Hand clickEvent={this.hold} releaseEvent={this.release} />
            </div>
        );
    }
}

export default App;