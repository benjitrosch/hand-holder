import React from 'react';

const Message = (props) => {
    return (
        <div className='message'>
            <br/>{props.data.message}<br/>
            From: {props.data.location}<br/>
            {props.data.date}<br/>
        </div>
    );
}

export default Message;