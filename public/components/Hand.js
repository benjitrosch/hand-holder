import React from 'react';
import LeftHand from './LeftHand.js';
import LeftHandShadow from './LeftHandShadow.js';

const Hand = (props) =>{

    const pulse = props.searching ? <div className="pulsating-circle"></div> : <div></div>;
    const search = props.searching ? 'Looking for a helping hand...' : '';

    return(
        <button className='handBtn'>
            {/*<img src={HandIcon} style={{height:'200px'}} onMouseDown={props.clickEvent} onMouseUp={props.releaseEvent} />*/}
            <LeftHand className='hand' onMouseDown={props.clickEvent} onMouseUp={props.releaseEvent} />
            <LeftHandShadow className='handShadow' />
            {pulse}
            <h1>{search}</h1>
        </button>
    );
}

export default Hand;