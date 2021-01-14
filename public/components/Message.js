import React from 'react';

const Message = (props) => {
    return (
        <div>Message:
        {props.data.message}
        From: {props.data.location}
        {props.data.date}</div>
    );
}

export default Message;