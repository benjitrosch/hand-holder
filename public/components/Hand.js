import React from 'react';
import HandIcon from '../assets/Hand.svg';

const Hand = (props) =>{
    return(
        <button className='hand'>
            <img src={HandIcon} style={{height:'200px'}} onMouseDown={props.clickEvent} onMouseUp={props.releaseEvent} />
        </button>
    );
}

export default Hand;