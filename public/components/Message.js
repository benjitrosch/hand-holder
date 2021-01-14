import React from 'react';

const Message = (props) => {
    return (
        <div>
            Message:<br/>
            {props.data.message}<br/>
            From: {props.data.location}<br/>
            {props.data.date}<br/><br/><br/>
        </div>
    );
}

export default Message;