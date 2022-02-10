import React from 'react';

import './message.style.css'

const Message = ({item: {id, name, email, body}}) => {

    return (
        <div className={'messageBox'}>
            <div>
                {id} -- Name - {name};
            </div>
            <div>
                Email - {email};
            </div>
            <div>
                Message - {body};
            </div>

        </div>
    );
};

export default Message;
