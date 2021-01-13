import React from 'react';

const Hand = (props) =>{
    return(
        <button onMouseDown={props.clickEvent} onMouseUp={props.releaseEvent}>Hold my hand!!</button>
    );
}

export default Hand;