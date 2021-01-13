import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render(){
        return(
            <div>Hold my hand please!</div>
        );
    }
}

render(<App />, document.querySelector('#root'));

export default App;