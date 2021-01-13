import React, { Component } from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    updateID(newID){
        this.setState({id: newID});
    }

    render(){

        let currentID = this.state.id ? this.state.id : 'no id found!';

        return (
            <div>
                <button onClick={this.props.clickEvent}>Click to generate ID</button>
                <h1>{currentID}</h1>
            </div>
        );
    }
}
  
export default User;