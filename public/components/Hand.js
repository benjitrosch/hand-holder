import React from 'react';
import HandIcon from '../assets/Hand.svg';

const Hand = (props) =>{
    return(
        <img src={HandIcon} style={{height:'200px', width: '500px'}} onMouseDown={props.clickEvent} onMouseUp={props.releaseEvent} />
    );
}

export default Hand;